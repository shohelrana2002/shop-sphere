import React from "react";
import Container from "./Container";
import FooterTop from "../FooterComponents/FooterTop";
import Logo from "../NavComponents/logo/Logo";
import SocialIcon from "../FooterComponents/SocialIcon";
import { SubText, SubTitle } from "../ui/text";
import { categoriesData, quickLinksData } from "@/Constance/NavMenuData";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="grid py-4 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, quasi! Nisi nesciunt beatae molestiae enim
              reprehenderit, quae dignissimos nobis odio.
            </SubText>
            <SocialIcon
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_dark_green"
              className="text-darkColor/60"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-2 mt-4">
              {quickLinksData.map((item) => (
                <li key={item.title}>
                  <Link
                    className="hover:text-shop_light_green hoverEffect font-medium"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Category</SubTitle>
            <ul className="space-y-2 mt-4">
              {categoriesData.map((item) => (
                <li key={item.title}>
                  <Link
                    className="hover:text-shop_light_green hoverEffect font-medium"
                    href={`/category/${item.href}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 ">
            <SubTitle>News Latter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates exclusive offer
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter Your Email" type="email" required />
              <Button className="w-full ">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t border-gray-200">
          <p className="text-center text-sm md:text-base text-gray-600">
            © {new Date().getFullYear()}{" "}
            <Link
              href={"/"}
              className="font-semibold text-shop_dark_green hover:text-shop_light_green transition"
            >
              ShopSphere
            </Link>{" "}
            — All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
