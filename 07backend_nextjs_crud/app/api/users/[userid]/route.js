import { users } from "@/lib/db";
import { NextResponse } from "next/server"

export const GET = async (req) => {
  try{
    const id = req.url.split("users/")[1];
    console.log(id);
    console.log(users);

    const singleData = users.filter(user => user.id.toString() === id);
    if(singleData.length === 0){
      return NextResponse.json({message:"Data Not Found"}, {status:404})
    }
    return NextResponse.json({message:"Success", singleData})
  }catch(error){
    return NextResponse.json({message:"Error", error}, {status:500})
  }
}

//Delete
export const DELETE = async (req) => {
  try{
    const id = req.url.split("users/")[1];

    const userIndex = users.findIndex(user => user.id.toString() === id);

    if(userIndex === -1){
      return NextResponse.json({message:"error", error:"user not found"}, {status:404});
    }
    users.splice(userIndex, 1);
    console.log(users)
    return NextResponse.json({message:"user deleted successfully"});
  }catch(error){
    return NextResponse.json({message:"Error", error}, {status:500});
  }
}

//Update
export const PUT = async (req) => {
  try{
    const id = req.url.split("users/")[1];
    const {username} = await req.json();

    const user = users.find(user => user.id.toString() === id);
    if(!user){
      return NextResponse.json({message:"error", error:"user not found"}, {status:404});
    }

    user.username = username;
    console.log(users)
    return NextResponse.json({message:"user update successfully"})
  }catch(error){
    return NextResponse.json({message:"Error", error}, {status:500});
  }
}