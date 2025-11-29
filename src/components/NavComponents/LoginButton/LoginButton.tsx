import { SignInButton } from "@clerk/nextjs";
import React from "react";

const LoginButton = () => {
  return (
    <SignInButton mode="modal">
      <button className=" px-4 py-2 text-shop_light_green hover:text-shop_dark_green font-semibold active:scale-95 transition-all duration-300 ">
        SignIn
      </button>
    </SignInButton>
  );
};

export default LoginButton;
