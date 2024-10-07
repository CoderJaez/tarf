"use client";
import React from "react";
import { signIn, signOut } from "@/helpers/authHelper";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const AuthButtonClient: React.FC = () => {
  const session = useSession();
  const router = useRouter();
  return session?.data?.user ? (
    <button
      className="block w-full px-4 py-2 text-left text-sm text-gray-700"
      role="menuitem"
      onClick={async () => {
        console.log("Test");
        await signOut();
        await router.push("/login");
      }}
    >
      Logout
    </button>
  ) : (
    <button
      className="text-white bg-blue-600 px-4 rounded text-lg"
      onClick={async () => await router.push("/login")}
    >
      Login
    </button>
  );
};

export default AuthButtonClient;
