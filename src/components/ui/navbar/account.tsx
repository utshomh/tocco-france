"use client";

import Link from "next/link";
import { BsCartX } from "react-icons/bs";
import { PiX } from "react-icons/pi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { LuUser } from "react-icons/lu";

export function Account() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="relative cursor-pointer">
          <LuUser className="text-2xl hover:text-gray-500 transition-colors duration-300" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm space-y-8">
          <div className="flex items-center justify-between p-4 py-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold">Sign In</h2>
            <DrawerClose asChild>
              <button className="cursor-pointer flex items-center gap-2 text-base">
                <PiX />
                <span>Close</span>
              </button>
            </DrawerClose>
          </div>

          <form className="w-full mx-auto flex flex-col gap-6 px-4 font-open-sans">
            <div className="space-y-1.5">
              <label htmlFor="email">
                Username of email address{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border-2 border-gray-600 outline-0 rounded"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full p-2 border-2 border-gray-600 outline-0 rounded"
              />
            </div>

            <button className="w-full bg-tertiary py-3 px-4 rounded hover:bg-red-700 transition text-sm uppercase">
              Sign In
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me" className="text-base">
                  Remember me
                </label>
              </div>

              <Link href="#" className="underline text-tertiary">
                Lost your password?
              </Link>
            </div>
          </form>

          <div className="my-3 p-[0.5px] w-full bg-background-3" />

          <div className="flex flex-col items-center gap-3">
            <LuUser className="text-7xl text-gray-500" />
            <p className="font-semibold">No account yet?</p>
            <Link
              href="#"
              className="uppercase font-semibold pb-0.5 border-b-4 border-tertiary"
            >
              Create new account
            </Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
