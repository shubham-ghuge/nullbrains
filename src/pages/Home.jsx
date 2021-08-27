import React from "react";
import { Brands } from "./components/Brands";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
    </>
  );
}
export { Home };
