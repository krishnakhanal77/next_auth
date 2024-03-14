import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    //For custom login form
    // CredentialsProvider({
    //   name:"Credentials",
    //   credentials:{
    //     username:{
    //       label:"username:",
    //       type:"text",
    //       placeholder:"username"
    //     },
    //   },
    //   async  authorize(credentials){

    //   }
    // })
  ],
  //If you are using custome signin and signout pages
  // pages:{
  //   signIn:"/signin"
  // }
};
