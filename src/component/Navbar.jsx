import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="container h-fit bg-green-700 text-white flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <span className="font-medium">i</span>TODO
      </h1>
      <div>
        <FaSquareGithub className="w-[25px] h-[25px]" />
      </div>
    </div>
  );
};

export default Navbar;
