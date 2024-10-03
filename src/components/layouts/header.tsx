"use client";

import React from "react";

import MainNav from "@/components/layouts/main-nav";

const Header = () => {
  return (
    <header className="w-full h-[56px] flex items-center bg-black text-white px-5">
      <MainNav />
    </header>
  );
};

export default Header;
