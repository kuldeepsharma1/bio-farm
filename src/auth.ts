// register -> hash -> save -> verfiyemail -> login -> jwt -> session -> role -> protectRoutes 

import NextAuth, { CredentialsSignin, DefaultSession } from "next-auth";
 import connectDb from "./lib/db";
 import { User } from "./models/userSchema";
 import {compare} from "bcryptjs";
 import Credentials from "next-auth/providers/credentials";
 import Google from "next-auth/providers/google"

 declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    role: string;
  }
 }

 export const {handlers, auth, signIn, signOut} = NextAuth ({
  providers :[
  Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: {type: "email" , label: "Email" },
          password: {type: "password" , label: "Password"},
      },
      authorize : async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
         if (!email || !password) {
          throw new CredentialsSignin (" Email & Password are mandentory");
         }
         await connectDb();
         const user = await User.findOne({email}).select("+password +role");
         if (!user) {
          throw new Error("Invalid Email or Password");
         }
         if (!user.password) {
          throw new Error("Invalid Email or Password");
         }
         const isMatch = await compare( password, user.password);
         if (!isMatch) {
           throw new Error("Invalid Password");
         }
         return {
          id: user._id.toString(),
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user.role || "user",
         };
        
      },
    }),
  ],
pages: {
  signIn: "/sign-in",
},
callbacks:{
  async jwt({token, user}){
    if (user) {
      token: user.id;
      token.role = user.role
    }
    return token;
  },
  async session({session, token}){
    if (token?.id && token?.role) {
      session.user ={
        ...session.user,
        id: String(token.id),
        role: String(token.role),
      };
    }
    return session;
  },
  async signIn({user, account}){
    if (account?.provide === 'google') {
      try {
        const {name, email, image}= user;
        await connectDb();
        let existingUser = await User.findOne({email});
        if (!existingUser) {
          existingUser = await User.create({
            name,email,image, authProviderId:user.id, role:"user"
          });
        }
      } catch (error) {
        throw new Error(`${error}`)
      } 
    }
    if (account?.provider === "credentials") {
      return true;
    }
    return false;
  },
},
 });