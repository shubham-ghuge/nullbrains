import React from "react";
import { Brands, Features, Hero, Navbar, Team } from "./components";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Team />
    </>
  );
}
export { Home };
