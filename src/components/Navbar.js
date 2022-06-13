import { Button } from "antd";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-center px-5 py-1 bg-white shadow-md">
        <h1 className="text-2xl lg:text-3xl text-slate-800 font-bold my-2">
          ATools<span className="text-orange-700">.</span>
        </h1>
        <div>
          <Button className="mr-2" type="primary">
            Start Free Trial
          </Button>
          <Button type="primary" danger>
            Login
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
