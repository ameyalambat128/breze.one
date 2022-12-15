/* eslint-disable @next/next/no-img-element */
import { classNames } from "@/utils/Classnames";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineScheduleSend } from "react-icons/md";

const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

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
      <div className="relative z-10 my-0 mx-auto flex max-w-6xl justify-center pt-10 pb-20 md:pt-0">
        <div className="flex w-80 items-center justify-center rounded-lg shadow-4xl sm:h-96 sm:w-3/4">
          {/* <div className="flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0"> */}
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2 flex flex-col items-start space-y-8 p-5 md:p-0">
              <div className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Try out Breze!
              </div>
              <div className="space-y-4">
                <div className="">
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className={classNames(
                      "w-72 rounded-lg border-2 py-2 px-3 text-sm",
                      isEmpty ? "border-red-600" : "border-cyan-600"
                    )}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                  />
                  {userExists && (
                    <p className="block pt-[1px] text-xs transition ease-in-out">
                      User Already Exists!
                    </p>
                  )}
                  <p
                    className={
                      validEmail
                        ? "hidden"
                        : "block pt-[1px] text-xs text-red-500 transition ease-in-out"
                    }
                  >
                    Please enter a valid email address.
                  </p>
                </div>

                <div className="">
                  <button
                    onClick={() => {
                      !userExists && console.log("Email Entered: ", email);
                      addUser(email);
                      addUser(email); // Adding User twice since one call doesn't seem to work
                    }}
                    className={`flex items-center justify-between rounded-lg py-2 px-3 text-sm font-semibold shadow-md ring-2 ring-cyan-600 hover:bg-cyan-600/10`}
                  >
                    <span className="pr-2">Join Waitlist</span>
                    <MdOutlineScheduleSend size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden w-40 sm:block">
              <img src="/assets/breze-icon-test-black.png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
