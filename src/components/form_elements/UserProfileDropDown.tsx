"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { User } from "lucide-react";
import { signOut } from "@/helpers/authHelper";
const UserProfileDropDown: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-slate-800">John Doe</span>

            <User size={30} className="h-8 w-8 rounded-full bg-slate-800 p-2" />
          </div>
        </button>
      </div>

      <div
        className={` absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
        onMouseLeave={() => setIsOpen((prev) => !prev)}
      >
        <div className={`py-1 ${!isOpen ? "hidden" : ""} `} role="none">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Account settings
          </a>
          <button
            type="submit"
            className="block w-full px-4 py-2 text-left text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-3"
            onClick={async () => {
              await signOut();
              await router.push("/login");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDropDown;
