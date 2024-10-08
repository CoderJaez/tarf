import { authUser } from "@/services/user";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
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
                        name: user.name,
                        email: user.email
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
            session.user.id = token.sub as string;
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