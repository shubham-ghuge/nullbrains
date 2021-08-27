import React from "react";
import {
  SiFacebook,
  SiGithub,
  SiTwitter,
  SiInstagram,
  SiDribbble,
} from "react-icons/si";

function Footer() {
  return (
    <section
      className="py-10 flex text-gray-400 flex-col items-center justify-cente"
      id="contact"
    >
      <ul className="flex mt-6 text-sm sm:text-lg">
        <li className="mr-4 sm:mr-8">
          <a href="#">About</a>
        </li>
        <li className="mr-4 sm:mr-8">
          <a href="#blogs">Blog</a>
        </li>
        <li className="mr-4 sm:mr-8">
          <a href="#team">Team</a>
        </li>
        <li className="mr-4 sm:mr-8">
          <a href="#">Pricing</a>
        </li>
        <li className="mr-4 sm:mr-8">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
      </ul>
      <ul className="flex mt-6 text-xl sm:text-2xl transition duration-300">
        <li className="mr-4 hover:text-gray-500">
          <SiFacebook />
        </li>
        <li className="mr-4 hover:text-gray-500">
          <SiGithub />
        </li>
        <li className="mr-4 hover:text-gray-500">
          <SiTwitter />
        </li>
        <li className="mr-4 hover:text-gray-500">
          <SiInstagram />
        </li>
        <li>
          <SiDribbble />
        </li>
      </ul>
      <p className="mt-6 flex items-center"><span className="text-xl mr-2">©</span> 2021 SomeCompany, Inc. All rights reserved.</p>
    </section>
  );
}
export { Footer };
