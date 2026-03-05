"use client";

import { motion } from "framer-motion";
import { Account } from "./actions/account";
import { Cart } from "./actions/cart";
import { Search } from "./actions/search";

export function MobileActions() {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="mx-auto flex items-center justify-around bg-navbar bg-opacity-95 backdrop-blur-md py-2 border-t border-gray-700">
        <Account />
        <Search />
        <Cart />
      </div>
    </motion.nav>
  );
}
