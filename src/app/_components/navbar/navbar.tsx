"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { NAVBAR_SCROLL_HEIGHT } from "@/utils/consts";
import { Logo } from "@/components/ui/logo";
import { NavList } from "./nav-list";
import { ActionList } from "./actions/action-list";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > NAVBAR_SCROLL_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "py-0 px-4 bg-navbar bg-opacity-80 backdrop-filter backdrop-blur-md shadow-md"
          : "py-6 px-8 bg-transparent",
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Logo className={scrolled ? "scale-75" : "scale-100"} />

        <NavList />

        <ActionList />
      </div>
    </nav>
  );
}
