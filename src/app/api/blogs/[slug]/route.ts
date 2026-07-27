import connectDb from "@/lib/db";
import { Blog } from "@/models/blogSchema";
import { NextRequest, NextResponse } from "next/server";
interface Params { slug: string }

export async function GET(request: NextRequest, { params }: { params: Promise<Params> }) {
    try {
        const { slug } = await params;
        await connectDb();
        const blog = await Blog.findOne({ slug })
        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 })
        }
        return NextResponse.json(blog, { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong try again later" }, { status: 500 })
    }
}