import { ProductGallery } from "./_components/product-gallery";
import { Sidebar } from "./_components/sidebar";

export default function SwitchSocketPage() {
  return (
    <div className="bg-background-2">
      <div className="mx-auto w-full max-w-7xl min-h-[calc(100vh-112px)] grid grid-cols-7 p-6 mt-28 gap-6">
        <Sidebar />
        <div className="col-span-5">
          <ProductGallery />
        </div>
      </div>
    </div>
  );
}
