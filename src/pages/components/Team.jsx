import React from "react";
import { TeamCard } from "./TeamCard";

function Team() {
  const data1 = [
    {
      id: "001",
      name: "Freddy_Smith",
      title: "CEO and Founder",
      bg: "rgba(209, 250, 229, 1)",
    },
    {
      id: "002",
      name: "Carl_Jones",
      title: "CTO and Co-Founder",
      bg: "rgba(219, 234, 254, 1)",
    },
    {
      id: "003",
      name: "Susan_Peterson",
      title: "Marketing Directory",
      bg: "rgba(254, 226, 226, 1)",
    },
    {
      id: "004",
      name: "Tommy_Barnes",
      title: "Designer",
      bg: "rgba(224, 231, 255, 1)",
    },
    {
      id: "001",
      name: "Ron_Jenson",
      title: "Senior Developer",
      bg: "rgba(224, 231, 255, 1)",
    },
    {
      id: "002",
      name: "Pete_Tompkins",
      title: "Web Developer",
      bg: "rgba(254, 226, 226, 1)",
    },
    {
      id: "003",
      name: "Kelly_Richards",
      title: "Sales Manager",
      bg: "rgba(219, 234, 254, 1)",
    },
    {
      id: "004",
      name: "Alexis_Jordan",
      title: "Affiliate Manager",
      bg: "rgba(209, 250, 229, 1)",
    },
  ];
  return (
    <section
      className="mx-4 mt-16 sm:w-11/12 sm:px-4 sm:mx-auto relative"
      id="team"
    >
      <p className="text-indigo-600 text-md sm:text-xl sm:mb-6">OUR TEAM</p>
      <h2 className="text-3xl font-semibold sm:text-5xl">
        An incredible team of <br className="hidden sm:block" /> amazing
        individuals
      </h2>
      <div className="hidden absolute top-0 rounded-tl-full rounded-bl-full -right-14 sm:block h-32 w-2/5 bg-blue-50"></div>
      <div className="flex mt-8 sm:mb-10 justify-center flex-wrap sm:justify-between sm:mt-16">
        {data1.map((i) => (
          <div className="flex">
            <TeamCard details={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
export { Team };
