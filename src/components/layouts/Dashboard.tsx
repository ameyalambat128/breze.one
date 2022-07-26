/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { MdOutlineScheduleSend } from "react-icons/md";

const Dashboard = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-16 w-full overflow-x-hidden">
      <div className="relative max-w-6xl my-0 mx-auto py-10 px-10 lg:px-0 flex justify-center">
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-5">
          <div className="h-80 sm:h-[45rem] flex flex-col items-start justify-center ">
            <h1 className="font-black tracking-tighter text-5xl sm:text-7xl sm:text-black/85 py-10">
              Browse Through Your Emails in a Breze
            </h1>
            <p className="text-gray-500 pr-20">
              Breze is currently in development. Join the waitlist to be the
              first to try it out!
            </p>
            <div className="py-10">
              <button
                onClick={() => {
                  scrollToBottom();
                }}
                className="ring-2 ring-gray-900 hover:bg-cyan-600/10 shadow-md text-sm font-semibold py-2 px-3 rounded-lg flex justify-between items-center"
              >
                <span className="pr-2">Join Waitlist</span>
                <MdOutlineScheduleSend size={20} />
              </button>
            </div>
          </div>
          <div className="">
            {/* {isMobile && (
              <div className="relative w-80 bg-transparent shadow-3xl rounded-md ">
                <img src={"/assets/breze-hd.png"} alt="logo" />
              </div>
            )} */}
          </div>
        </div>
        <div className="absolute top-[28rem] sm:top-14 sm:left-[35rem] lg:left-[40rem] md:w-[1080px] overflow-x-hidden bg-transparent shadow-3xl rounded-md ">
          <img
            src={"/assets/breze-hd.png"}
            alt="logo"
            className="w-80 sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
