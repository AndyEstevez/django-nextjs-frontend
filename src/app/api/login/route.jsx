"use server"

// import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { setRefreshToken, setToken } from '../../../lib/auth'

const DJANGO_API_LOGIN_URL = "http://127.0.0.1:8000/api/token/pair"

export async function POST(request){
    const requestData = await request.json()
    const jsonData = JSON.stringify(requestData)
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }
    const response = await fetch(DJANGO_API_LOGIN_URL, requestOptions)
    const responseData = await response.json()
    if(response.ok){
        const {username, access, refresh} = responseData
        setToken(access)
        setRefreshToken(refresh)
        return NextResponse.json({"loggedIn": true, "username": username}, {status: 200})

    }
    // const authToken = cookies().get("auth-token")
    
    return NextResponse.json({"loggedIn": false, ...responseData}, {status: 400})
}