import React from "react";
import Link from "next/link";
import AuthButtonServer from "../form_elements/AuthButton.server";
const Header = () => {
  return (
    <header className="flex justify-between p-4 mx-4">
      <div>
        <h1 className="text-lg">DILG 9 - Technical Assistance Request Form</h1>
      </div>
      <nav className="text-lg">
        <li className="list-none px-4 rounded hover:bg-slate-300 hover:text-slate-800 ">
          {/* <Link href="/login">Login</Link> */}
          <AuthButtonServer />
        </li>
      </nav>
    </header>
  );
};

export default Header;
