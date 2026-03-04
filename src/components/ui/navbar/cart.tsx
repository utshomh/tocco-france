"use client";

import Link from "next/link";
import { BsCartX } from "react-icons/bs";
import { PiShoppingCartSimpleLight, PiX } from "react-icons/pi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Cart() {
  const itemCount = 0;

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="relative cursor-pointer">
          <PiShoppingCartSimpleLight className="text-2xl hover:text-gray-500 transition-colors duration-300" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-tertiary text-white text-xs px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm space-y-8">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-black">Shopping Cart</h2>
            <DrawerClose asChild>
              <button className="cursor-pointer flex items-center gap-2 text-base">
                <PiX />
                <span>Close</span>
              </button>
            </DrawerClose>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex-1 flex flex-col items-center gap-4">
              <BsCartX className="text-9xl text-gray-500" />
              <p className="font-bold">No products in the cart.</p>
            </div>

            <Link
              href="/switch-socket"
              className="mx-auto bg-tertiary py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm uppercase"
            >
              Return to Shop
            </Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
