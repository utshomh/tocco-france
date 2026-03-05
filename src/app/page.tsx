import { Metadata } from "next";

import Slider from "./_components/hero/slider";
import { Welcome } from "./_components/hero";
import { Services } from "./_components/services";
import { Demo } from "./_components/demo";
import { Showcase } from "./_components/showcase";
import { HouseDemo } from "./_components/house-demo";
import { OfficeDemo } from "./_components/office-demo";
import { Certified } from "./_components/certified";

export const metadata: Metadata = {
  title: "Home - Tocco France",
};

export default function Home() {
  return (
    <div>
      <Slider />
      <Welcome />
      <Services />
      <Demo />
      <Showcase />
      <OfficeDemo />
      <HouseDemo />
      <Certified />
    </div>
  );
}
