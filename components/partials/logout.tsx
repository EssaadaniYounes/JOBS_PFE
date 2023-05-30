"use client"
import React from "react";
import Cookie from "services/Cookie";
import { useRouter } from 'next/navigation';

export default function Logout(){
  const router = useRouter();
    const handleLogout = () => {
        Cookie.removeCookie("token");
        Cookie.removeCookie("role");
        router.push('/');
    }
    return(
        <button onClick={handleLogout}
          className="rounded-md bg-gray-200 px-4 py-1.5 font-medium duration-150 hover:bg-gray-400 "
        >
          logout
        </button>
    )
}