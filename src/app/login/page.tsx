import React from "react";
import Image from "next/image";
import tarf from "../../../public/asset/images/tarf_background.png";
import UserAuthForm from "@/components/form/UserAuthForm";
const page: React.FC = () => {
  return (
    <div className="py-16 min-h-screen bg-white">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <Image
          src={tarf}
          alt="TARF Background"
          className="hidden lg:block lg:w-1/2 bg-cover"
        />
        <section className="w-full p-4 lg:w-1/2">
          <UserAuthForm />
        </section>
      </div>
    </div>
  );
};

export default page;
