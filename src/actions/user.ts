"use server"

import connectDb from "@/lib/db";
import { generateVerificationToken } from "@/lib/token";
import { User } from "@/models/userSchema";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

const register = async(formData: FormData)=>{
    const email =formData.get("email") as string;
    const password =formData.get("password") as string;
    if (!email || !password) {
        throw new Error("All fields Are Required");
    }
    await connectDb();
    const existingUser = await User.findOne({email});
    if (existingUser) {
        throw new Error("User Already Exist");
    }
    const hashpassword = await hash(password, 12);
    const verificationToken = await generateVerificationToken();
    const verificationTokenExpiry = new Date(Date.now() + 8640000) // 24 hours
    await User.create({
    email,
    password: hashpassword,
    verificationToken.,
    verificationTokenExpiry,
    });
    await sendVerificationEmail(email, verificationToken);
    redirect("/verifysent")
}