import React from "react";
import styles from "./components.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero_container}>
      <h2>Start Crafting Your</h2>
      <h2 className="text-indigo-600">Next Great Idea</h2>
      <p>
        Simplifying the creation of landing pages, blog pages, application pages
        and so much more!
      </p>
      <div className="relative mt-8 inline-block mx-auto">
        <span className="absolute -right-6 bg-green-400 -top-2 text-white text-xs px-2 rounded-full sm:text-md sm:px-3 sm:py-1 sm:-top-3">
          only $15/mo
        </span>
        <button className="btn-primary font-extrabold px-6 py-2 rounded-full sm:text-xl sm:py-4 sm:px-8">
          Purchase Now
        </button>
      </div>
      <a href="#" className="text-purple-600 text-sm sm:text-lg mt-2 inline mx-auto">Learn More</a>
    </section>
  );
}
export { Hero };
