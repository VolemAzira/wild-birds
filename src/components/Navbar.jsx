import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-full">
      <nav>
        <div className="bg-black text-white flex justify-between items-center px-5 lg:px-20 py-6">
          <a href="#" className="text-xl font-bold">
            Wild Birds Tracking
          </a>
          <AiOutlineMenu
            size={30}
            color=""
            onClick={handleMenu}
            className="lg:hidden"
          />
          <div className="font-semibold lg:flex items-center hidden">
            <a
              href="#"
              className="hover:text-dark hover:bg-light rounded p-3 transition-all delay-50 ease-in-out"
            >
              Home
            </a>
          </div>
        </div>
        <div
          className={` ${
            menu ? "block" : "hidden"
          } bg-black text-white lg:hidden`}
        >
          <nav className="flex flex-col justify-center items-center pb-3 w-screen">
            <a
              href="#"
              className="hover:text-dark hover:bg-light rounded p-3 transition-all delay-50 ease-in-out"
            >
              Home
            </a>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
