import React from "react";
import styles from "./components.module.css";

function Brands() {
  const data = ["1.svg", "2.png", "3.svg", "4.png", "5.png", "6.png"];
  return (
    <section>
      <div className="mb-16">
        <p className="text-gray-900 text-center text-xs font-bold sm:text-sm">
          TRUSTED BY TOP-LEADING COMPANIES.
        </p>
        <div className="flex mt-4 flex-wrap justify-center">
          {data.map((image) => (
            <img
              src={`/assets/logo/${image}`}
              className="h-16 mr-2 w-30 sm:mr-12 sm:h-20"
              alt="logo"
            />
          ))}
        </div>
      </div>
      <section className="mb-16 sm:mx-auto sm:w-4/5">
        <div className="flex flex-col items-center mb-8 sm:flex-row sm:justify-between">
          <div className={styles.illustration}>
            <img src="/assets/astro.png" alt="astronaut illustration" />
          </div>
          <div className="sm:ml-64">
            <div className={styles.details}>
              <h2>Boost Productivity</h2>
              <p>
                Build an atmosphere that creates productivity in your
                organization and your company culture.
              </p>
              <ul className={styles.list}>
                <li>Maximize productivity and growth</li>
                <li>Speed past your competition</li>
                <li>Learn the top techniques</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8 sm:flex-row-reverse sm:justify-between">
          <div className={styles.illustration}>
            <img
              src="/assets/robo.png"
              height="100%"
              width="100%"
              alt="robot illustration"
            />
          </div>
          <div className={styles.details}>
            <h2>Automated Tasks</h2>
            <p>
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </p>
            <ul className={styles.list}>
              <li>Automated task management workflow</li>
              <li>Detailed analytics for your data</li>
              <li>Some awesome integrations</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
export { Brands };
