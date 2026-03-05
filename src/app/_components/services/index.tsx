import { ServiceItem, ServiceItemProp } from "./service-item";

import luxuriousDesign from "./assets/Luxurious-Designs.png";
import unparalleledCraftsmanship from "./assets/Unparalleled-Craftsmanship.png";
import cuttingEdgeTechnology from "./assets/Cutting-Edge-Technology.png";
import uncompromisingQuality from "./assets/Uncompromising-Quality.png";
import yearsOfWarranty15 from "./assets/15-Years-Warranty.png";
import customerSatisfaction from "./assets/Customer-Satisfaction.png";

const serviceData: Array<ServiceItemProp> = [
  {
    title: "Luxurious Designs",
    subtitle:
      "Tocco France offers an extensive range of switches and sockets, providing customers with a wide variety of designs, finishes, and color options to suit your unique style and preferences.",
    image: luxuriousDesign,
  },
  {
    title: "Unparalleled Craftsmanship",
    subtitle:
      "Every switch and socket crafted by Tocco France undergoes rigorous quality control processes, ensuring flawless finishes, precise functionality, and meticulous attention to detail, resulting in products of unmatched excellence.",
    image: unparalleledCraftsmanship,
  },
  {
    title: "Cutting-Edge Technology",
    subtitle:
      "Our switches and sockets are equipped with cutting-edge technology, allowing for intuitive controls, smart home integration, energy-saving features, and enhanced convenience.",
    image: cuttingEdgeTechnology,
  },
  {
    title: "Uncompromising Quality",
    subtitle:
      "We source the finest materials from around the world to create our switches and sockets, ensuring durability, longevity, and a luxurious feel that exudes elegance.",
    image: uncompromisingQuality,
  },
  {
    title: "15 Years Warranty",
    subtitle:
      "Tocco France has earned a reputation as a trusted brand in the industry, known for our commitment to quality, reliability, and timeless elegance. We are proud to announce that you have a rock-solid 15 years warranty for every switch and socket.",
    image: yearsOfWarranty15,
  },
  {
    title: "Customer Satisfaction",
    subtitle:
      "At Tocco France, customer satisfaction is paramount. We go above and beyond to provide exceptional service, prompt assistance, and reliable support, ensuring a seamless experience from selection to installation.",
    image: customerSatisfaction,
  },
];

export function Services() {
  return (
    <ul className="min-h-[80vh] w-full max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceData.map((service, i) => (
        <li key={i}>
          <ServiceItem
            image={service.image}
            subtitle={service.subtitle}
            title={service.title}
          />
        </li>
      ))}
    </ul>
  );
}
