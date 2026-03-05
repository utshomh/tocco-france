import { LuMenu } from "react-icons/lu";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Slider } from "@/components/ui/slider";

export function Sidebar() {
  const minPrice = 300;
  const maxPrice = 1650;

  const barContent = (
    <div className="space-y-6 p-6 lg:p-0">
      <h2 className="uppercase font-bold text-lg">Filter by Price</h2>
      <Slider
        defaultValue={[0, 100]}
        max={100}
        step={1}
        className="w-full text-red-800"
      />

      <div className="w-full flex items-center justify-between">
        <p className="text-sm">
          Price:{" "}
          <span className="font-bold">
            {minPrice} — {maxPrice}৳
          </span>
        </p>
        <button className="p-2 px-3 rounded-xs bg-background cursor-pointer hover:bg-background-2 transition-colors">
          Filter
        </button>
      </div>

      <div className="h-px w-full bg-gray-500" />

      <p className="uppercase font-bold">Series</p>

      <div className="flex items-center justify-between">
        <p className="font-bold">A1</p>
        <span className="px-2 py-[0.5px] rounded-full border border-gray-500 text-sm">
          19
        </span>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block">{barContent}</div>

      <div className="block lg:hidden">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <button className="lg:hidden p-2 rounded text-white hover:text-gray-300 flex items-center gap-2">
              <LuMenu className="text-2xl" /> Show Sidebar
            </button>
          </DrawerTrigger>

          <DrawerContent>{barContent}</DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
