import Image from "next/image";
import React from "react";
import { MdLanguage, MdLocationPin } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="w-full bg-slate-200 dark:bg-black border-t-slate-400 border-[1px]">
      <div className="relative h-auto max-w-6xl mx-auto my-0 px-2 sm:px-0 py-5 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 lg:gap-x-20">
          <div className="col-span-2 sm:col-span-1 grid grid-flow-row gap-y-5 sm:content-between">
            <div className="">
              <div className="w-20">
                <Image
                  src={"/assets/breze-logo.png"}
                  alt="logo"
                  layout="responsive"
                  objectFit="contain"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center">
                <MdLanguage />
                <span className="px-2">English (US)</span>
              </div>
              <div className="flex items-center">
                <MdLocationPin />
                <span className="px-2">United States</span>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start py-5 space-x-2">
                <a href="https://www.linkedin.com/company/breze/">
                  <AiOutlineLinkedin
                    size={28}
                    onClick={() => {}}
                    className="hover:text-cyan-600"
                  />
                </a>
                <a href="https://github.com/ameyalambat128/breze.one">
                  <AiOutlineGithub
                    size={28}
                    onClick={() => {}}
                    className="hover:text-cyan-600"
                  />
                </a>
              </div>
              ©2022 Breze
            </div>
          </div>

          <div className="flex justify-start">
            <ul>
              <li className="font-semibold py-2">Coming Soon</li>
              <li className="cursor-pointer hover:text-cyan-600">Mail</li>
            </ul>
          </div>

          <div className="flex justify-start">
            <ul>
              <li className="font-semibold py-2">Resources</li>
              <li className="cursor-pointer hover:text-cyan-600">About</li>
              <li className="cursor-pointer hover:text-cyan-600">Support</li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 flex justify-start">
            <ul>
              <p className="font-semibold py-4">Contact</p>
              <div className="flex flex-col space-y-2 justify-start">
                <input
                  type="text"
                  className="text-sm w-[calc(100vw-4rem)] sm:w-64 py-2 px-3 rounded-lg"
                  placeholder="Enter Name"
                />
                <input
                  type="text"
                  className="text-sm w-[calc(100vw-4rem)] sm:w-64 py-2 px-3 rounded-lg"
                  placeholder="Enter Email"
                />
                <input
                  type="text"
                  className="text-sm w-[calc(100vw-4rem)] sm:w-64 h-28 py-2 px-3 rounded-lg"
                  placeholder="Enter Message"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
