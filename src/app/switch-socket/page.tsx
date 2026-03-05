import { Slider } from "@/components/ui/slider";

export default function SwitchSocketPage() {
  const minPrice = 300;
  const maxPrice = 1650;

  return (
    <div className="bg-background-3">
      <div className="mx-auto w-full max-w-7xl min-h-[calc(100vh-112px)] grid grid-cols-7 p-6 mt-28">
        <div className="space-y-6 col-span-2">
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
        <div className="col-span-5"></div>
      </div>
    </div>
  );
}
