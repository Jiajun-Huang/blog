"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const checkIsLoginSession = () => {
    // check session
    const session = localStorage.getItem("session");
    if (session === null) {
        return false;
    }

    // check expired
    const expired = localStorage.getItem("expired");
    if (expired === null) {
        return false;
    }

    const expiredNumber = Number(expired);
    const now = Date.now();
    if (now > expiredNumber) {
        return false;
    }

    
}


export default function Page() {

    

    // go to home 
    const router = useRouter();
    useEffect(() => {
        router.push("/admin/home");
    }, []);

}