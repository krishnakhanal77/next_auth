"use client";

import { signIn, signOut } from "next-auth/react";

export function GithubSignInButton() {
  const handleClick = () => {
    signIn("github");
  };

  return (
    <button
      onClick={handleClick}
      className=" flex items-center font-medium justify-center px-3 py-1 text-lg transition-colors duration-300 bg-white border-2 border-black text-black rounded-md focus:shadow-outline hover:bg-slate-200"
    >
      <span>Login with Github</span>
    </button>
  );
}

export function GithubSignOutButton() {
  const handleClick = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleClick}
      className=" flex items-center font-medium justify-center py-1  px-3 text-lg transition-colors duration-300 bg-white border-2 border-black text-black rounded-md focus:shadow-outline hover:bg-slate-200"
    >
      <span className="">Sign Out</span>
    </button>
  );
}
