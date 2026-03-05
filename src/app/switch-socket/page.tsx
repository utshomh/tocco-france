import { Metadata } from "next";

import { ProductGallery } from "./_components/product-gallery";
import { Sidebar } from "./_components/sidebar";

export const metadata: Metadata = {
  title: "Switch & Socket",
};

export default function SwitchSocketPage() {
  return (
    <div className="bg-background-2 overflow-x-hidden mt-28 p-4 lg:p-6">
      <div className="flex lg:hidden items-center justify-center gap-2 pb-4 border-b border-gray-60">
        <span className="hover:text-white cursor-pointer">Home</span>
        <span>/</span>
        <span className="hover:text-white cursor-pointer">Switch & Socket</span>
      </div>

      <div className="mx-auto w-full max-w-7xl min-h-[calc(100vh-112px)] grid grid-cols-1 lg:grid-cols-7 gap-6">
        <div className="col-span-1 lg:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-1 lg:col-span-5">
          <ProductGallery />
        </div>
      </div>
    </div>
  );
}
