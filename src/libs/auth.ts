import { authUser } from "@/services/user";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }
                const username = credentials?.username as string;
                const password = credentials?.password as string
                const user = await authUser(username, password);
                if (user) {
                    return {
                        id: user.id.toString(),
                        username: user.username,
                        name: user.name
                    };
                } else {
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 60, // Session expiration after 30 minutes of inactivity
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account?.provider === "credentials") {
                token.credentials = true
            }
            return token
        },
        async session({ session, token }) {
            // console.log('token', token);
            session.user.id = token.id as string;
            return session
        },


    },
    pages: {
        signIn: "/login"
    },
    cookies: {
        sessionToken: {
            name: 'next-auth.session-token',
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: process.env.NODE_ENV === 'production',
            },
        },
    },
});