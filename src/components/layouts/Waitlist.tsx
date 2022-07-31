/* eslint-disable @next/next/no-img-element */
import { classNames } from "@/utils/Classnames";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineScheduleSend } from "react-icons/md";
import useWindowDimensions, { Breakpoints } from "@/hooks/useWindowDimensions";

const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const { width } = useWindowDimensions();
  const isMobile = width < Breakpoints.md;

  const addUser = async (input: string) => {
    if (input.length === 0) {
      setIsEmpty(false);
    } else {
      try {
        const res = await Axios.put("/api/addUser", { email: input });
        console.log(res.data.result);
      } catch (e) {
        setUserExists(true);
        console.error("Conflict: User already exists");
      }
      // console.log(status.status);
    }
  };

  useEffect(() => {
    setUserExists(false);

    const interval = setInterval(() => {
      if (email.length != 0) {
        setIsEmpty(false);
        if (emailRegex.test(email)) {
          setValidEmail(true);
        } else {
          setValidEmail(false);
        }
      } else setValidEmail(true);
    }, 1000);
    return () => clearInterval(interval);
  }, [email]);

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
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className={classNames(
                      "text-sm w-72 py-2 px-3 rounded-lg border-2",
                      isEmpty ? "border-red-600" : "border-cyan-600"
                    )}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                  />
                  {userExists && (
                    <p className="block transition ease-in-out pt-[1px] text-xs">
                      User Already Exists!
                    </p>
                  )}
                  <p
                    className={
                      validEmail
                        ? "hidden"
                        : "block transition ease-in-out pt-[1px] text-xs text-red-500"
                    }
                  >
                    Please enter a valid email address.
                  </p>
                </div>

                <div className="">
                  <button
                    onClick={() => {
                      userExists && console.log("User Added: ", email);
                      addUser(email);
                    }}
                    className={`ring-2 ring-cyan-600 hover:bg-cyan-600/10 shadow-md text-sm font-semibold py-2 px-3 rounded-lg flex justify-between items-center`}
                  >
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
