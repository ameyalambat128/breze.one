import Image from "next/image";
import React from "react";
import { MdLanguage, MdLocationPin } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="w-full border-[1px] border-t-slate-400 bg-slate-200 dark:bg-black">
      <div className="relative mx-auto my-0 flex h-auto max-w-6xl justify-center px-2 py-5 sm:px-0">
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:gap-x-20">
          <div className="col-span-2 grid grid-flow-row gap-y-5 sm:col-span-1 sm:content-between">
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
              <div className="flex justify-start space-x-2 py-5">
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
              <li className="py-2 font-semibold">Coming Soon</li>
              <li className="cursor-pointer hover:text-cyan-600">Mail</li>
            </ul>
          </div>

          <div className="flex justify-start">
            <ul>
              <li className="py-2 font-semibold">Resources</li>
              <li className="cursor-pointer hover:text-cyan-600">About</li>
              <li className="cursor-pointer hover:text-cyan-600">Support</li>
            </ul>
          </div>

          <div className="col-span-2 flex justify-start sm:col-span-1">
            <ul>
              <p className="py-4 font-semibold">Contact</p>
              <div className="flex flex-col justify-start space-y-2">
                <input
                  type="text"
                  className="w-[calc(100vw-4rem)] rounded-lg py-2 px-3 text-sm sm:w-64"
                  placeholder="Enter Name"
                />
                <input
                  type="text"
                  className="w-[calc(100vw-4rem)] rounded-lg py-2 px-3 text-sm sm:w-64"
                  placeholder="Enter Email"
                />
                <input
                  type="text"
                  className="h-28 w-[calc(100vw-4rem)] rounded-lg py-2 px-3 text-sm sm:w-64"
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
