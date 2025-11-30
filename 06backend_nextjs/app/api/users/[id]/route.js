import { users } from '@/lib/db'
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  const {id} = await params;
  const singleData = users.filter(item => item.id == id);

  if(singleData.length === 0){
    return NextResponse.json({message: "No Data Found"}, {status: 404});
  }
  return NextResponse.json(singleData);
}
