/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
import { MdOutlineScheduleSend } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  const scrollToWaitlist = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    window.addEventListener("top", scrollToTop);
    window.addEventListener("top", scrollToFeatures);
    window.addEventListener("bottom", scrollToWaitlist);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
      window.removeEventListener("top", scrollToTop);
      window.removeEventListener("top", scrollToFeatures);
      window.removeEventListener("bottom", scrollToWaitlist);
    };
  }, []);
  return (
    <section
      className={`fixed top-0 left-0 z-50 w-full transition duration-300 ease-in-out ${
        show ? "bg-gray-900/95 text-white" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto my-0 max-w-6xl">
        <div className="flex h-16 items-center justify-between p-4 sm:p-0">
          <div
            className=""
            onClick={() => {
              scrollToTop();
            }}
          >
            <h1 className="w-[5.5rem] text-2xl font-black md:text-3xl">
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
          <div className="hidden items-center justify-between gap-4 font-medium sm:flex">
            <button
              onClick={() => {
                scrollToTop();
              }}
              className="rounded-md py-1 px-3 hover:bg-cyan-600/10"
            >
              Coming Soon
            </button>
            <button
              onClick={() => scrollToFeatures()}
              className="rounded-md py-1 px-3 hover:bg-cyan-600/10"
            >
              Features
            </button>
            <button className="rounded-md py-1 px-3 hover:bg-cyan-600/10">
              About
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <MdOutlineDarkMode size={25} />
            </button> */}
            <button
              onClick={() => scrollToWaitlist()}
              className="flex items-center justify-between rounded-lg py-2 px-3 text-sm font-semibold shadow-md ring-2 ring-cyan-600 hover:bg-cyan-600/10"
            >
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
