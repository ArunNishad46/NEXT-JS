'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-6 border-b border-gray-300 flex justify-between">
      <Link href="/">Home</Link>  
      {session ? (
        <div className="flex items-center gap-4">
          <span>Welcome, {session.user.name}</span>
          <button
            onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <>
          <span>Not signed in</span>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </nav>
  );
}