import { NextResponse } from "next/server";
import { getToken } from "../../../lib/auth";

const DJANGO_API_WAITLISTS_URL = "http://127.0.0.1:8000/api/waitlists/"

export async function GET(request){
    const authToken = getToken()
    if(!authToken){
        return NextResponse.json({}, {status: 401})
    }

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    }

    const response = await fetch(DJANGO_API_WAITLISTS_URL, options)
    console.log(response)

    const result = await response.json();
    let status = response.status
    

    return NextResponse.json({}, {status: status})
}

export async function POST(request){
    const requestData = await request.json()
    const jsonData = JSON.stringify(requestData)
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${authToken}`
    }
    const authToken = getToken()
    if(authToken){
        headers["Authorization"] = `Bearer ${authToken}`
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }
    const response = await fetch(DJANGO_API_WAITLISTS_URL, requestOptions)
    try {
        const responseData = await response.json()
    } catch (error) {
        NextResponse.json({message: "Invalid request"}, {status: response.status})
    }
    
    if (response.ok){
        return NextResponse.json({}, {status: 200})
    }
    return NextResponse.json({}, {status: 400})
}