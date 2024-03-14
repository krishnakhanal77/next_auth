import React from "react";
import { GithubSignInButton, GithubSignOutButton } from "./authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/authConfig";

const Navbar = async () => {
  const session = await getServerSession(authConfig);

  return (
    <div className="shadow-lg">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between py-3 ">
          <p>Hi welcome</p>
          {session ? <GithubSignOutButton /> : <GithubSignInButton />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
