/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
// import { MdOutlineScheduleSend } from "react-icons/md";

export const Features1 = () => {
  return (
    <section className="w-full">
      <div className="relative my-0 mx-auto flex max-w-6xl justify-center py-10 px-10 lg:px-0">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="absolute top-[35rem] right-[2.25rem] w-80 overflow-x-hidden rounded-md bg-transparent shadow-4xl sm:top-20 sm:right-[35rem] md:w-[1024px] lg:right-[50rem]">
            <Image
              src={"/assets/breze3-hd.png"}
              alt="logo"
              layout="responsive"
              width={1920}
              height={1080}
              className="h-auto object-contain"
            />
          </div>
          <div className=""></div>
          <div className="flex h-auto flex-col items-start justify-center sm:h-[45rem]">
            <div className="sm:text-black/85 py-10 text-5xl font-bold tracking-tighter sm:text-6xl  ">
              Access All Your Email Accounts Using One App
            </div>
            <p className="pr-20 text-gray-500">
              You can sign in using multiple accounts and access all your emails
              in one place.
            </p>

            <p className="pt-10 text-xs text-gray-500">
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
      <div className="relative my-0 mx-auto flex max-w-6xl justify-center py-10 px-10 lg:px-0">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex h-auto flex-col items-start justify-center sm:h-[45rem] ">
            <div className="sm:text-black/85 py-10 text-5xl font-bold tracking-tighter sm:text-6xl">
              Quick Sorting and Filtering
            </div>
            <p className="pr-20 text-gray-500">
              Filtering through flagged emails, unread emails and sent emails
              with ease.
            </p>
            <div className="py-10"></div>
          </div>
          <div className="flex items-center bg-transparent">
            <img
              src="/assets/breze-sort-cut.png"
              alt="sort"
              className="z-10 rounded-md shadow-4xl"
            />
            <img
              src="/assets/breze-sort.png"
              alt="sort"
              className="hidden -translate-x-64 -translate-y-20 rounded-md shadow-2xl blur-sm sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
