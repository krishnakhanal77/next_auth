import { GithubSignInButton } from "@/components/authButtons";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../lib/authConfig";

export default async function SignInPage() {
  const session = await getServerSession(authConfig);

  if (session) return redirect("/home");

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center mt-10 p-10 shadow-md">
        I am public
      </div>
    </div>
  );
}
