import React from "react";
import { auth } from "@/libs/auth";
import { SessionProvider } from "next-auth/react";
import AuthButtonClient from "./AuthButton.client";

const AuthButtonServer: React.FC = async () => {
  const session = await auth();

  if (session && session.user) {
    session.user = {
      name: session.user.name,
    };
  }
  return (
    <SessionProvider session={session}>
      <AuthButtonClient />
    </SessionProvider>
  );
};

export default AuthButtonServer;
