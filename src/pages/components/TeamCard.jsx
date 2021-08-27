import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

function TeamCard({ details }) {
  const { name, title, bg } = details;
  return (
    <div className="flex flex-col mx-1 items-center mb-6 sm:mb-12">
      <div className={`bg-${bg}-100 p-3 sm:p-5 mx-2 rounded-tl-full rounded-b-full`}>
        <img src={`assets/team/${name}.png`} className="h-28 sm:h-52" alt="" />
      </div>
      <p className="text-md mt-2 sm:text-xl sm:mt-6">{name.split("_").join(" ")}</p>
      <p className="text-indigo-600 text-md sm:text-xl">{title}</p>
      <div className="flex justify-center mt-2 text-gray-400 text-xl">
        <FaTwitter className="mr-2" />
        <FaGithub />
      </div>
    </div>
  );
}
export { TeamCard };
