"use client";

import Link from "next/link";
import React from "react";

const mainNav = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/1",
    title: "Home",
  },
  {
    to: "/2",
    title: "Home",
  },
  {
    to: "/3",
    title: "Home",
  },
];

const MainNav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        {mainNav.map((nav) => (
          <li key={nav.to}>
            <Link href={nav.to}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
