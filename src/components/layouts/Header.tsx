/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdOutlineScheduleSend } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    // DetectMobile() ? setIsMobile(true) : setIsMobile(false);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <section
      className={`fixed top-0 left-0 w-full transition duration-300 ease-in-out ${
        show ? "bg-black/90 text-white" : "bg-transparent"
      }`}
    >
      <div className="relative max-w-6xl mx-auto my-0">
        <div className="h-16 p-4 sm:p-0 flex justify-between items-center">
          <div className="">
            <h1 className="font-black text-2xl md:text-3xl w-[5.5rem]">
              {isMobile ? (
                show ? (
                  <img
                    src={"/assets/breze-icon-test.png"}
                    alt="icon"
                    width={40}
                  />
                ) : (
                  <img
                    src={"/assets/breze-icon-test-black.png"}
                    alt="icon"
                    width={40}
                  />
                )
              ) : show ? (
                <img src={"/assets/breze-logo-white.png"} alt="logo" />
              ) : (
                <img src={"/assets/breze-logo.png"} alt="logo" />
                // <Image
                //   src={"/assets/breze-logo.png"}
                //   alt="logo"
                //   layout="fill"
                //   objectFit="contain"
                // />
              )}
            </h1>
          </div>
          <div className="hidden font-medium sm:flex items-center justify-between gap-4">
            <button className="py-1 px-3 hover:bg-cyan-600/10 rounded-md">
              Products
            </button>
            <button className="py-1 px-3 hover:bg-cyan-600/10 rounded-md">
              Features
            </button>
            <button className="py-1 px-3 hover:bg-cyan-600/10 rounded-md">
              About
            </button>
          </div>
          <div className="">
            <button className="ring-2 ring-cyan-600 shadow-md text-sm font-semibold py-1 px-3 rounded-lg flex justify-between items-center">
              <span className="pr-2">Join Waitlist</span>
              <MdOutlineScheduleSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
