import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import { authUser } from "@/services/user";
// A mock function to validate credentials (In production, connect to your database)

const authenticate = (req: NextApiRequest, res: NextApiResponse) =>
    NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    username: { label: "Username", type: "text", placeholder: "Username" },
                    password: { label: "Password", type: "password" },
                },
                async authorize(credentials:any) {
                    if (!credentials?.username || !credentials?.password) {
                        return null;
                    }
                    const username = credentials?.username as string;
                    const password = credentials?.password as string
                    const user = await authUser(username, password);
                    if (user) {
                        return user;
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
            async jwt({ token, user }) {
                if (user) {
                    token.id = user.id;
                }
                return token;
            },
            async session({ session, token }) {
                session.user.
                return session;
            },
        },
        pages: {
            signIn: "/auth/signin", // Redirect to custom sign-in page
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

export default authenticate;