import { NextResponse } from "next/server";
import { getToken } from "../../../lib/auth";
import ApiProxy from "../proxy";

const DJANGO_API_WAITLISTS_URL = "http://127.0.0.1:8000/api/waitlists/"

export async function GET(request){
    // const authToken = getToken()
    // if(!authToken){
    //     return NextResponse.json({}, {status: 401})
    // }
    const {data, status} = await ApiProxy.get(DJANGO_API_WAITLISTS_URL, true)
    return NextResponse.json(data, {status: status})
}

export async function POST(request){
    const requestData = await request.json()   
    const {data, status} = await ApiProxy.post(DJANGO_API_WAITLISTS_URL, requestData, true)
    return NextResponse.json({data}, {status: status})
}