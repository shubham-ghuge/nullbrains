import React from "react";
import { HiOutlineDocument } from "react-icons/hi";
import { FaBullhorn } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { GoTerminal } from "react-icons/go";
import { BiSmile } from "react-icons/bi";
import { RiCoupon2Line } from "react-icons/ri";

import { FeatureCard } from "./FeatureCard";

function Features() {
  const data = [
    {
      id: "001",
      heading: "Certifications",
      text: "Each of our plan will provide you and your team with certifications.",
      Icon: HiOutlineDocument,
    },
    {
      id: "002",
      heading: "Notifications",
      text: "Send out notifications to all your customers to keep them engaged.",
      Icon: FaBullhorn,
    },
    {
      id: "003",
      heading: "Bundles",
      text: "High-quality bundles of awesome tools to help you out.",
      Icon: BiCube,
    },
    {
      id: "004",
      heading: "Developer Tools",
      text: "Developer tools to help grow your application and keep it up-to-date.",
      Icon: GoTerminal,
    },
    {
      id: "005",
      heading: "Building Blocks",
      text: "The right kind of building blocks to take your company to the next level.",
      Icon: BiSmile,
    },
    {
      id: "006",
      heading: "Coupons",
      text: "Coupons system to provide special offers and discounts for your app.",
      Icon: RiCoupon2Line,
    },
  ];
  return (
    <section id="features" className="text-center sm:w-11/12 sm:mx-auto">
      <h2 className="text-4xl font-bold">Our Features</h2>
      <p className="text-md text-gray-600 mb-8">
        Check out our list of awesome features below.
      </p>
      <div className="flex flex-wrap">
        {data.map((i) => (
          <FeatureCard key={i.id} details={i} />
        ))}
      </div>
    </section>
  );
}
export { Features };
