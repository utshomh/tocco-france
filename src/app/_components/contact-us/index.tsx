import Link from "next/link";

export function ContactUs() {
  return (
    <div className="w-full py-20 bg-background-4 flex flex-col items-center justify-center text-center gap-8">
      <h3 className="font-bold text-3xl">
        <span className="text-primary">Contact us</span> now to elevate your
        interior design to new heights of <br /> elegance and sophistication.
      </h3>
      <Link
        href="/contact"
        className="py-3 px-6 bg-text text-background hover:bg-primary font-bold rounded transition-colors"
      >
        Contact Now
      </Link>
    </div>
  );
}
