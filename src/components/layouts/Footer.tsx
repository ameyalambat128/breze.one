import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full bg-slate-200">
      <div className="relative h-auto max-w-6xl mx-auto my-0 px-2 sm:px-0 py-5 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-20">
          <div className="grid grid-flow-row gap-y-5 content-between">
            <div className="">
              <div className="w-16">
                <Image
                  src={"/assets/breze-logo.png"}
                  alt="logo"
                  layout="responsive"
                  objectFit="contain"
                  width={40}
                  height={40}
                />
              </div>
              <div className="">English (US)</div>
              <div className="">United States</div>
            </div>
            <div className="">©2022 Breze</div>
          </div>
          <div className="flex justify-center w-auto">2</div>
          <div className="flex justify-center w-auto">3</div>
          <div className="order-1 sm:order-4 flex justify-center w-auto">4</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
