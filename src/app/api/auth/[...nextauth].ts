// src/app/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "Ov23liayOzTi7QTVMBhH",
            clientSecret: "0b6a25246d2594ded4e06cc18b9ef6faf6e5b93a",
        }),
    ],
    secret: "Bqv8Pq9ks5yxmeOnDLH9+xkKA8+uXrK42nJ9Rql9S2o=",
};

export default NextAuth(authOptions);
