import React from "react";
import { Blogs, Brands, Features, Hero, Navbar, Team } from "./components";
import { Footer } from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Team />
      <div className="bg-gray-100 ">
        <Blogs />
        <Footer />
      </div>
    </>
  );
}
export { Home };
