import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from '@/models/contact';

export async function POST(req) {
  try{
    const formData = await req.json();

    console.log(formData)
    await connectDB();
    await Contact.create(formData);

    return NextResponse.json({msg:"Message send successfully"})
  }catch(err){
    return NextResponse.json({msg:"Server error", error: err.message}, {status:500})
  }
}
