import { NextResponse } from "next/server";

const DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function GET() {
  const res = await fetch(DATA_URL);
  const posts = await res.json();

  return NextResponse.json(posts)
}

export async function POST(req) {
  try{
    const {userId, title, body} = await req.json();

    const res = await fetch(DATA_URL, {
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify({
        userId,
        title,
        body
      })
    })

    if(res.status === 201){
      const newPost = await res.json();
      return NextResponse.json(newPost)
    }else{
      console.log("Post request is failed with status: ", res.status);
      return NextResponse.error("Post request failed");
    }
  }catch(error){
    return NextResponse.json({message:"Error", error}, {status:500})
  }
}

export async function PUT(req) {
  try{
    const {userId, id, title, body} = await req.json();

    const res = await fetch(`${DATA_URL}/${id}`, {
      method:"PUT",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify({
        userId,
        id,
        title,
        body
      })
    })

    if(res.status === 200){
      const updatePost = await res.json();
      return NextResponse.json(updatePost)
    }else{
      console.log("PUT request is failed with status: ", res.status);
      return NextResponse.error("Update request failed");
    }
  }catch(error){
    return NextResponse.json({message:"Error", error}, {status:500})
  }
}

export async function DELETE(req) {
  try{
    const { id } = await req.json();

    const res = await fetch(`${DATA_URL}/${id}`, {
      method:"DELETE",
      headers:{
        'Content-Type':"application/json",
      },
    })

    return NextResponse.json({message:"Post deleted successfully"})

  }catch(error){
    return NextResponse.json({message:"Error", error}, {status:500})
  }
}
