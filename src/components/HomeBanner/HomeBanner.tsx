import React from "react";
import { Title } from "../ui/text";
import Link from "next/link";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="py-16 md:0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex  items-center justify-between">
      <div className="my-5">
        <Title className="mb-5 font-semibold">
          Grab upto 50% off on <br />
          Select Headphone
        </Title>
        <Link
          className="bg-shop_btn_dark_green/90 text-white/90 px-5 py-2
          rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect
        "
          href={"/shop"}
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          className="hidden md:inline-block w-80 rounded-2xl opacity-95"
          src={"/banner.png"}
          width={500}
          height={100}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
