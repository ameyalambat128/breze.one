import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "@/components/layouts/Dashboard";
import { Features1, Features2 } from "@/components/layouts/Features";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Waitlist from "@/components/layouts/Waitlist";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Breze</title>
        <meta
          name="description"
          content="Browse Through Your Emails in a Breze"
        />
        <link rel="icon" href="/breze-favicon.png" />
      </Head>
      <Header />
      {/* <div className="absolute z-1 bottom-[40rem] -skew-y-[16deg] bg-gradient-to-r from-cyan-600 to-slate-200 w-[calc(100vw-10rem)] h-full"></div> */}
      <Dashboard />
      <Features1 />
      <Features2 />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Home;
