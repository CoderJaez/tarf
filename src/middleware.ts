import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/')
        return NextResponse.next();
    const cookie = req.cookies.get('next-auth.session-token')
    if (!cookie?.value && req.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL('/login', req.url))
    }

}