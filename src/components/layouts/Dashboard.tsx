/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { MdOutlineScheduleSend } from "react-icons/md";

const Dashboard = () => {
  const scrollToWaitlist = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-16 w-full overflow-x-hidden">
      <div className="relative my-0 mx-auto flex max-w-6xl justify-center py-10 px-10 lg:px-0">
        <div className="grid grid-rows-2 gap-5 sm:grid-cols-2 sm:grid-rows-1">
          <div className="flex h-80 flex-col items-start justify-center sm:h-[45rem] ">
            <h1 className="sm:text-black/85 py-10 text-5xl font-black tracking-tighter sm:text-7xl">
              Browse Through Your Emails in a Breze
            </h1>
            <p className="pr-20 text-gray-500">
              Breze is currently in development. Join the waitlist to be the
              first to try it out!
            </p>
            <div className="py-10">
              <button
                onClick={() => {
                  scrollToWaitlist();
                }}
                className="flex items-center justify-between rounded-lg py-2 px-3 text-sm font-semibold shadow-md ring-2 ring-gray-900 hover:bg-cyan-600/10"
              >
                <span className="pr-2">Join Waitlist</span>
                <MdOutlineScheduleSend size={20} />
              </button>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="absolute top-[28rem] overflow-x-hidden rounded-md bg-transparent shadow-3xl sm:top-14 sm:left-[35rem] md:w-[1080px] lg:left-[40rem] ">
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
