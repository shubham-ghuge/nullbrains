import React from "react";
import styles from "./components.module.css";

function Blogs() {
  const data = [
    {
      heading: "Best Workstations of the Year",
      text: "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
      badge: "INSPIRATION",
      color: "indigo",
      id: "4",
    },
    {
      heading: "Eating for productivity",
      text: "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
      badge: "FOOD",
      color: "red",
      id: "5",
    },
    {
      heading: "A Design Mind-set",
      text: "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
      badge: "RESOURCES",
      color: "purple",
      id: "6",
    },
  ];
  return (
    <section id="blogs">
      <div className="w-11/12 mx-auto pt-8 sm:pt-16">
        <h2 className="text-4xl font-black sm:text-7xl">The Project Blog</h2>
        <p className="text-lg text-gray-500 mt-2">
          Designs and layouts to help you with your app.
        </p>
        <section className="mt-10 sm:mb-6 flex flex-wrap sm:flex-nowrap">
          <div className={styles.blog_lg_card}>
            <div className={styles.blog_card_img}>
              <img src="/assets/blog/1.jpg" alt="cup on purple background" />
            </div>
            <div
              className="text-white rounded-b-lg"
              style={{ background: "#e508c3" }}
            >
              <div className={styles.blog_details}>
                <span
                  className="bg-white absolute -top-4 font-bold rounded-full text-xs px-4 py-2"
                  style={{ color: "#ff5fe7" }}
                >
                  RESOURCES
                </span>
                <h2>Refreshing Designs</h2>
                <p>
                  Quench satisfying designs to help you stir up emotion and tell
                  a story.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.blog_lg_card}>
            <div className={styles.blog_card_img2}>
              <img src="/assets/blog/2.jpg" alt="cup on purple background" />
            </div>
            <div
              className="text-white rounded-b-lg"
              style={{ background: "#6e82fe" }}
            >
              <div className={styles.blog_details}>
                <span className="bg-white absolute -top-4 font-bold rounded-full text-blue-800 text-xs px-4 py-2">
                  LIFESTYLE
                </span>
                <h2>Healthier Lifestyle</h2>
                <p>
                  Living a healthier lifestyle will help with your productivity
                  and your mind-set.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.blog_lg_card}>
            <div className={styles.blog_card_img}>
              <img src="/assets/blog/3.jpg" alt="cup on purple background" />
            </div>
            <div className="text-white rounded-b-lg bg-yellow-400">
              <div className={styles.blog_details}>
                <span className="bg-white absolute -top-4 font-bold rounded-full text-yellow-800 text-xs px-4 py-2">
                  ENTERTAINMENT
                </span>
                <h2>Gaming Evolution</h2>
                <p>
                  Learn about the evolution of gaming and how it started a
                  revolution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-4 sm:flex justify-between flex-row">
          {data.map(({ id, heading, text, color, badge }) => (
            <div className="flex flex-col hover:shadow-lg transition duration-300 mb-6 sm:mx-4" key={id}>
              <img
                src={`/assets/blog/${id}.jpg`}
                className="h-48 rounded-t-lg object-cover"
                alt=""
              />
              <div className="flex rounded-b-lg bg-white flex-col border border-gray-300 px-4 py-6 box-border relative">
                <span
                  className={`text-white absolute -top-4 bg-${color}-700 font-bold rounded-full text-xs px-4 py-2`}
                >
                  {badge}
                </span>
                <h4 className="text-lg font-extrabold">{heading}</h4>
                <p className="text-md text-gray-700">{text}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
export { Blogs };
