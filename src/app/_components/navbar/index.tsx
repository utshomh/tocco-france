"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { NAVBAR_SCROLL_HEIGHT } from "@/utils/consts";
import { Logo } from "@/components/ui/logo";
import { NavList, navLinks } from "./nav-list";
import { ActionList } from "./actions/action-list";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "./nav-link";
import { MobileActions } from "./mobile-actions";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > NAVBAR_SCROLL_HEIGHT);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "py-2 px-4 bg-navbar bg-opacity-80 backdrop-filter backdrop-blur-md shadow-md"
            : "py-8 px-8 bg-transparent",
        )}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo className={clsx(scrolled ? "scale-75" : "scale-100")} />
          </div>

          <NavList />

          <div className="flex items-center gap-4">
            <ActionList />

            {/* hamburger for small screens */}
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <button className="md:hidden p-2 rounded text-white hover:text-gray-300">
                  <LuMenu className="text-2xl" />
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="px-4 py-8"
                >
                  <ul className="flex flex-col gap-6">
                    {navLinks.map((link, i) => (
                      <li key={i}>
                        <NavLink href={link.href}>{link.children}</NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>

      <MobileActions />
    </>
  );
}
