import Image from "next/image";
import React from "react";
import { MdLanguage, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <section className="w-full bg-slate-200 border-t-slate-400 border-[1px]">
      <div className="relative h-auto max-w-6xl mx-auto my-0 px-2 sm:px-0 py-5 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-20">
          <div className="grid grid-flow-row gap-y-5 sm:content-between">
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
            <div className="">©2022 Breze</div>
          </div>
          <div className="flex justify-center w-auto">
            <ul>
              <li className="font-semibold py-2">Coming Soon</li>
              <li>Mail</li>
            </ul>
          </div>
          <div className="flex justify-center w-auto">
            <ul>
              <li className="font-semibold py-2">Resources</li>
              <li>About</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="order-1 sm:order-4 flex justify-center w-auto">
            <p className="font-semibold py-2">Contact</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
