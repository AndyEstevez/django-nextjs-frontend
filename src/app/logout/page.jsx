"use client"

import { useAuth } from "@/components/authProvider";
import { useRouter } from "next/navigation";

const LOGOUT_URL = "/api/logout/"


export default function Login() {
    const auth = useAuth()
    const router = useRouter();

    async function handleClick(event){
        event.preventDefault();
       
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: ""
        }
        const response = await fetch(LOGOUT_URL, requestOptions)
        const data = await response.json()
        if(response.ok){
            console.log("logged out")
            auth.logout()
            router.replace("/login")
        }
        
    }


    return <div className="h-[95vh]">
        <div className="max-w-md mx-auto py-5"></div>
            <h1>Are you sure you want to logout?</h1>
            <button className="bg-red-500 px-3 py-2" onClick={handleClick}>Logout</button>
        </div>
}