"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Users, Settings, Ticket, User } from "lucide-react";

type Props = {
  children: any;
};
const Layout: React.FC<Props> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Ticket", icon: Ticket, href: "/tickets" },
    { name: "Users", icon: Users, href: "/users" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transition duration-300 ease-in-out transform lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6">
          <span className="text-2xl font-semibold">DILG 9 - TARF</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="px-6 py-3">
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white"
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center sm:justify-between  lg:justify-end px-6 py-4 bg-white border-b ">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 focus:outline-none lg:hidden"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-slate-800">John Doe</span>

            <User size={30} className="h-8 w-8 rounded-full bg-slate-800 p-2" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
