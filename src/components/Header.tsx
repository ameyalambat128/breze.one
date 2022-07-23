/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <section
      className={`fixed top-0 left-0 w-full transition duration-300 ease-in-out ${
        show && "bg-black/90 text-white"
      }`}
    >
      <div className="relative max-w-6xl mx-auto my-0">
        <div className="h-16 p-4 sm:p-0 flex justify-between items-center">
          <h1 className="font-black text-2xl md:text-3xl w-[5.5rem]">
            {show ? (
              <img src={"/assets/breze-logo-white.png"} alt="logo" />
            ) : (
              <img src={"/assets/breze-logo.png"} alt="logo" />
            )}
          </h1>
          {/* <div className="hidden sm:grid grid-flow-col gap-4 text-center"> */}
          <div className="hidden font-medium sm:flex items-center justify-between gap-4">
            <button className="py-1 px-3 hover:text-gray-100/70 rounded-md">
              Products
            </button>
            <button className="py-1 px-3 hover:text-gray-100/70 rounded-md">
              Features
            </button>
            <button className="py-1 px-3 hover:text-gray-100/70 rounded-md">
              About
            </button>
          </div>
          <div className="">
            <button className="ring-1 ring-cyan-600 shadow-md text-sm font-semibold py-1 px-3 rounded-xl">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
