import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"



export const authOptions={
    providers:[GitHubProvider({
        clientId:"Ov23lihzBJUsJoB5vY8X",
        clientSecret:"636286662d50ece7bd27ba59cc3d0036eabdac5e"
    })]
}


export default NextAuth(authOptions)