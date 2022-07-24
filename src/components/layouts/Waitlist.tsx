import React from "react";
import { MdOutlineScheduleSend } from "react-icons/md";

const Waitlist = () => {
  return (
    <section className="w-full">
      <div className="relative max-w-6xl my-0 mx-auto py-5 flex justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-8">
          <div className="text-4xl sm:text-5xl font-bold tracking-tighter">
            Try out Breze!
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-72 py-2 px-3 rounded-lg ring-2 ring-cyan-600"
            />
          </div>
          <div className="">
            <button className="ring-2 ring-cyan-600 hover:bg-cyan-600/10 shadow-md text-sm font-semibold py-2 px-3 rounded-lg flex justify-between items-center">
              <span className="pr-2">Join Waitlist</span>
              <MdOutlineScheduleSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
