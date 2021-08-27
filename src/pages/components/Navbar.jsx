import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import styles from "./components.module.css";

function Navbar() {
  const [showMenu, setMenu] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 600) {
      setMenu(true);
    }
  }, []);
  return (
    <>
      <nav className="flex sticky top-0 bg-white z-10 sm:items-center sm:justify-between sm:mx-auto sm:w-11/12 sm:h-20">
        <div className="flex justify-between box-border mt-2 px-2 w-full sm:w-auto h-10 items-center">
          <a href="#" className="font-extrabold text-2xl">
            nullBrains<span className="text-indigo-600">.</span>
          </a>
          <button
            className="sm:hidden text-2xl focus:outline-none focus:ring-2 ring-indigo-600 p-1 ring-opacity-50 text-gray-800"
            onClick={() => setMenu((curr) => !curr)}
          >
            {showMenu ? <VscChromeClose /> : <FiMenu />}
          </button>
        </div>
        <div
          className={`absolute p-2 inset-x-0 top-14 h-56 flex flex-col justify-center bg-gray-900 text-white sm:static sm:flex-row sm:h-auto sm:bg-white sm:text-gray-700 sm:w-4/6 sm:items-center sm:justify-between ${
            showMenu ? "block" : " hidden"
          }`}
        >
          <ul className={styles.nav}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#blogs">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#">
                <HiOutlineSearch />
              </a>
            </li>
          </ul>
          <div className="sm:flex items-center">
            <button>Sign In</button>
            <button className="btn-primary px-4 py-2 rounded-full ml-2">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="h-px bg-gray-300 mt-1 w-11/12 mx-auto"></div>
    </>
  );
}
export { Navbar };
