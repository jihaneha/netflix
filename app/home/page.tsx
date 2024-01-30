"use client";
import Input from "@/components/Input";
import RedButton from "@/components/RedButton";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <div className="">
      <div className="h-screen relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover text-white bg-opacity-50">
        <nav className="px-12 py-5 flex justify-between">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
          <RedButton content="Sign in" onClick={() => router.push("/auth")} />
        </nav>
        <div className="text-center mt-20">
          <h1 className="lg:text-5xl md:text-4xl sm:text-4xl font-black my-6 ">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl font-normal text-base my-6">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-xl  font-normal text-base">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="sm:block md:flex justify-center mt-4 mx-10">
            <div className="mr-2 max-w-screen-sm mb-6 md:mb-0">
              <Input
                label="Email address"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
            </div>

            <RedButton content="Get Started >" />
          </div>
        </div>
        <div className="flex justify-center bg-gradient-radial from-rose-600 to-indigo-900 via-rgb-88-21-58 via-opacity-0 absolute -bottom-12 w-11/12 left-1/2 transform -translate-x-1/2 p-3">
          {/* <span>
          <img src="\images\pop.png" alt="pop corn" width="100px"/>
        </span> */}
          <div className="ml-8">
            <h2 className="text-lg font-medium leading-9 m-0">
              The Netflix you love for just EUR 5.99.
            </h2>
            <p className="text-base leading-6 mt-1 mb-1">
              Get the Standard with ads plan.
            </p>
            <a
              href="#"
              className="cursor-pointer underline text-sky-400/100 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-screen text-white relative">
        <div className="absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-2/4 md:flex items-center justify-center w-full gap-8 p-24 border-b-8 border-solid border-gray-600">
          <div className="w-full p-10">
            <h3 className="text-5xl font-black mb-6">Enjoy on your TV</h3>
            <p className="text-2xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="w-full">
            <img src="\images\img.png" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen text-white relative">
        <div className="absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-2/4 md:flex items-center justify-center w-full gap-8 p-20 border-b-8 border-solid border-gray-600 ">
          <div className="w-full">
            <img src="\images\laptop.png" />
          </div>
          <div className="w-full p-10">
            <h3 className="text-5xl font-black mb-6">Watch everywhere</h3>
            <p className="text-2xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-screen text-white relative">
        <div className="absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-2/4 md:flex items-center justify-center w-full gap-8 p-20 border-b-8 border-solid border-gray-600">
          <div className="w-full p-10">
            <h3 className="text-5xl font-black mb-6">
              Create profiles for kids
            </h3>
            <p className="text-2xl">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <div className="w-full">
            <img src="\images\kids.png" />
          </div>
        </div>
      </div>
      <div className="w-full h-screen text-white relative">
        <div className="absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-2/4 md:flex items-center justify-center w-full gap-8 p-20 border-b-8 border-solid border-gray-600">
          <div className="w-full ">
            <img src="\images\phone.png" width="80%" />
          </div>
          <div className="w-full p-10">
            <h3 className="text-5xl font-black mb-6">Watch everywhere</h3>
            <p className="text-2xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full text-white text-center">
        <h3 className="text-5xl font-black mb-6 py-20">
          Frequently Asked Questions
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
