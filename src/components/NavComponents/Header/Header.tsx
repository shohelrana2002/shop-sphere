"use client";

import { navItems } from "@/Constance/NavMenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center font-semibold gap-7 capitalize text-sm text-lightColor">
      {navItems.map((item) => {
        const isActive = pathname === item?.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`
              group relative hover:text-shop_light_green
              ${isActive ? "text-shop_light_green font-bold" : ""}
            `}
          >
            {item.title}

            {/* Left underline */}
            <span
              className={`
                absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300
                group-hover:w-1/2 group-hover:left-0
                ${isActive ? "w-1/2 left-0" : ""}
              `}
            />

            {/* Right underline */}
            <span
              className={`
                absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300
                group-hover:w-1/2 group-hover:right-0
                ${isActive ? "w-1/2 right-0" : ""}
              `}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
