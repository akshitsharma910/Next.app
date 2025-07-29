import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"



export const authOptions={
    providers:[GitHubProvider({
        clientId:"Ov23lihzBJUsJoB5vY8X",
        clientSecret:"64b37591e7b65ccd351ea28828ce69fa4e8431ad"
    })]
}


export default NextAuth(authOptions)