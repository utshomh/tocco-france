"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
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
      <DrawerContent className="min-h-[80vh]">
        <div className="space-y-8">
          <div className="flex flex-col h-full gap-8 pb-8">
            <input
              type="text"
              className="w-full border-none outline-0 p-3 text-center text-5xl border-b border-gray-700"
              autoFocus
              placeholder="Search for Product"
            />

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
