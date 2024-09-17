import { NextResponse } from "next/server"
import { deleteToken } from "@/app/lib/auth"

export async function POST(request){
    deleteToken()
    return NextResponse.json({}, {status: 200});
}