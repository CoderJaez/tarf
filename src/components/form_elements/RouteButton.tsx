"use client";
import React from "react";
import { useRouter } from "next/navigation";
type Props = {
  Text: string;
  Url: string;
};
const RouteButton: React.FC<Props> = ({ Text, Url }) => {
  const router = useRouter();
  return (
    <button
      className="text-white bg-blue-600 px-4 rounded text-lg"
      onClick={() => router.push(Url)}
    >
      {Text}
    </button>
  );
};

export default RouteButton;
