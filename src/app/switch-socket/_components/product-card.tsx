import { ShoppingCart, Search } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export type Product = {
  img: StaticImageData;
  name: string;
  price: number;
};

export function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (product: Product) => void;
}) {
  return (
    <div className="group flex flex-col items-center w-full cursor-pointer">
      {/* Image container */}
      <div className="relative w-full rounded-md overflow-hidden bg-zinc-800">
        <Image
          src={product.img}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full p-6 object-cover group-hover:scale-125 transition-all duration-300"
        />

        {/* Search icon (top right) */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="bg-black p-2">
            <Search size={18} className="text-white" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <button
            onClick={() => onAddToCart(product)}
            className="group/btn w-full bg-blue-900 text-white text-sm py-2
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       hover:bg-red-600 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="group-hover/btn:hidden">SELECT OPTIONS</span>

            <ShoppingCart size={18} className="hidden group-hover/btn:block" />
          </button>
        </div>
      </div>

      {/* Product info */}
      <h3 className="mt-3 text-center text-sm">{product.name}</h3>
      <p className="text-white font-medium">{product.price}৳</p>
    </div>
  );
}
