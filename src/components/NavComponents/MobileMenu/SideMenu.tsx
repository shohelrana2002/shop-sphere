"use client";

import React, { FC } from "react";
import Logo from "../logo/Logo";
import { X } from "lucide-react";
import { navItems } from "@/Constance/NavMenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcon from "./SocialIcon";
// import { useOutSideClick } from "@/hooks";

interface SideBarProps {
  isOpen: boolean;
  isClose: () => void;
}

const SideMenu: FC<SideBarProps> = ({ isOpen, isClose }) => {
  //   const sideRef = useOutSideClick<HTMLDivElement>(onclose);
  const pathname = usePathname();

  return (
    <div
      className={`
        fixed inset-0 z-50 bg-black/50 transition-all duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
      onClick={isClose}
    >
      <div
        className={`
          absolute left-0 top-0 h-full min-w-72 max-w-96 bg-black
          border-r border-shop_light_green p-10 shadow-xl
          transition-transform duration-300 flex flex-col justify-between
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex justify-between items-center mb-10">
            <Logo className="text-white" />
            <button
              onClick={isClose}
              className="text-white hover:text-shop_light_green transition"
            >
              <X size={28} />
            </button>
          </div>

          {/* NAV ITEMS */}
          <div
            // ref={sideRef}
            className="flex flex-col gap-4 text-white text-lg font-medium"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={isClose}
                  className={`
                    relative block py-3 px-4 rounded-lg transition-all duration-300
                    ${
                      isActive
                        ? "bg-shop_light_green text-black font-semibold shadow-md"
                        : "hover:bg-shop_light_green/20 text-white"
                    }
                  `}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
