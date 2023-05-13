import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-center bg-yellow-300 py-4 fixed w-full px-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
      <Link
        className="hover:text-blue-500" to="/">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
