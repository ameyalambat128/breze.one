"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const transitionNavbar = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  const scrollToSection = (top: number) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

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
              scrollToSection(0);
            }}
          >
            <h1 className="w-[5.5rem] text-2xl font-black md:text-3xl">
              <Image
                src={
                  show
                    ? "/images/breze-logo-white.png"
                    : "/images/breze-logo.png"
                }
                alt="logo"
                width={150}
                height={50}
              />
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden items-center justify-between gap-4 font-medium sm:flex">
              <button
                onClick={() => scrollToSection(800)}
                className="rounded-md py-1 px-3 hover:bg-cyan-600/10"
              >
                Features
              </button>
            </div>
            <Button onClick={() => scrollToSection(0)} className="bg-blue-600">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
