import { Metadata } from "next";
import Slider from "./_components/hero/slider";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="min-h-[200vh]">
      <Slider />
    </div>
  );
}
