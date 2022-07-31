/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import { MdOutlineScheduleSend } from "react-icons/md";

export const Features1 = () => {
  return (
    <section className="w-full">
      <div className="relative max-w-6xl my-0 mx-auto py-10 px-10 lg:px-0 flex justify-center">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="absolute top-[35rem] sm:top-20 right-[2.25rem] sm:right-[35rem] lg:right-[50rem] w-80 md:w-[1024px] overflow-x-hidden bg-transparent shadow-4xl rounded-md">
            <Image
              src={"/assets/breze3-hd.png"}
              alt="logo"
              layout="responsive"
              width={1920}
              height={1080}
              className="object-contain h-auto"
            />
          </div>
          <div className=""></div>
          <div className="h-auto sm:h-[45rem] flex flex-col items-start justify-center">
            <div className="font-bold tracking-tighter text-5xl sm:text-6xl sm:text-black/85 py-10  ">
              Access All Your Email Accounts Using One App
            </div>
            <p className="text-gray-500 pr-20">
              You can sign in using multiple accounts and access all your emails
              in one place.
            </p>

            <p className="text-gray-500 text-xs pt-10">
              *Currently supports Gmail only.
            </p>
            <div className="h-64 py-10">
              {/* <button className="ring-2 ring-gray-900 hover:bg-cyan-600/10 shadow-md text-sm font-semibold py-2 px-3 rounded-lg flex justify-between items-center">
                <span className="pr-2">Join Waitlist</span>
                <MdOutlineScheduleSend size={20} />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Features2 = () => {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative max-w-6xl my-0 mx-auto py-10 px-10 lg:px-0 flex justify-center">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="h-auto sm:h-[45rem] flex flex-col items-start justify-center ">
            <div className="font-bold tracking-tighter text-5xl sm:text-6xl sm:text-black/85 py-10">
              Quick Sorting and Filtering
            </div>
            <p className="text-gray-500 pr-20">
              Filtering through flagged emails, unread emails and sent emails
              with ease.
            </p>
            <div className="py-10"></div>
          </div>
          <div className="bg-transparent flex items-center">
            <img
              src="/assets/breze-sort-cut.png"
              alt="sort"
              className="rounded-md shadow-4xl z-10"
            />
            <img
              src="/assets/breze-sort.png"
              alt="sort"
              className="hidden sm:block rounded-md shadow-2xl -translate-x-64 -translate-y-20 blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
