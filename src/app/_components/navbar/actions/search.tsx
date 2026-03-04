"use client";

import { PiX } from "react-icons/pi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LuSearch } from "react-icons/lu";
import { MdSearchOff } from "react-icons/md";

export function Search() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <button className="relative cursor-pointer">
          <LuSearch className="text-2xl hover:text-gray-500 transition-colors duration-300" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="space-y-8">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-black">Search for Product</h2>
            <DrawerClose asChild>
              <button className="cursor-pointer flex items-center gap-2 text-base">
                <PiX />
                <span>Close</span>
              </button>
            </DrawerClose>
          </div>

          <div className="flex flex-col h-full gap-8 pb-8">
            <div className="flex-1 flex flex-col items-center gap-4">
              <MdSearchOff className="text-9xl text-gray-500" />
              <p className="font-bold">
                No products found that matches the query.
              </p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
