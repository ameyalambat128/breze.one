/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdOutlineScheduleSend } from "react-icons/md";

const Waitlist = () => {
  return (
    <section className="w-full">
      <div className="relative z-10 max-w-6xl my-0 mx-auto pt-10 md:pt-0 pb-20 flex justify-center">
        <div className="w-80 sm:w-3/4 sm:h-96 flex items-center justify-center rounded-lg shadow-4xl">
          {/* <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0"> */}
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2 p-5 md:p-0 flex flex-col items-start space-y-8">
              <div className="text-4xl sm:text-5xl font-bold tracking-tighter">
                Try out Breze!
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="text-sm w-72 py-2 px-3 rounded-lg ring-2 ring-cyan-600"
                />
                <div className="">
                  <button className="ring-2 ring-cyan-600 hover:bg-cyan-600/10 shadow-md text-sm font-semibold py-2 px-3 rounded-lg flex justify-between items-center">
                    <span className="pr-2">Join Waitlist</span>
                    <MdOutlineScheduleSend size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-40">
              <img src="/assets/breze-icon-test-black.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
