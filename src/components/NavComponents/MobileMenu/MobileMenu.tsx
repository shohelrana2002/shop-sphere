"use client";
import { Menu } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <button onClick={() => setOpenSideBar(!openSideBar)}>
        <Menu className=" inline-flex md:hidden hover:cursor-pointer text-darkColor hoverEffect" />
      </button>
      <div className="md:hidden">
        <SideMenu isOpen={openSideBar} isClose={() => setOpenSideBar(false)} />
      </div>
    </>
  );
};

export default MobileMenu;
