"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-700 box-shadow p-4 text-white flex justify-between">
      <Link href="/" className="font-bold text-2xl">
        NextAuth
      </Link>
      <div className="flex items-center justify-between gap-4">
        {session ? (
          <>  
            <Link href="/dashboard" className="text-xl font-bold mr-4 hover:underline hover:text-blue-500">Hello, {session.user.name}</Link>
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
              className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer" 
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600 transition-colors mr-2">
              Login
            </Link>
            <Link href="/signup" className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600 transition-colors">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}