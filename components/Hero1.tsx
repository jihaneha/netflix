import React, { useState } from "react";
import Input from "./Input";
import RedButton from "./RedButton";
import { useRouter } from "next/navigation";

export default function Hero1() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <div className="bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover h-full">
      <div className=" h-full w-full  bg-black  bg-opacity-50">
        <nav className="px-12 py-5 flex justify-between">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-20 h-6 sm:w-40 sm:h-12"
          />
          <RedButton content="Sign in" onClick={() => router.push("/auth")} />
        </nav>
        <div className="text-center md:mt-20 p-6">
          <div className="">
            <h1 className="lg:text-5xl sm:text-4xl font-black my-6 text-3xl">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-base sm:text-xl font-normal text-base my-6">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-base sm:text-xl font-normal text-base px-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
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
        <div className="flex justify-center bg-gradient-radial from-rose-600 to-indigo-900 via-rgb-88-21-58 via-opacity-0 absolute -bottom-20 w-11/12 left-1/2 transform -translate-x-1/2 p-8">
          <div className="">
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
    </div>
  );
}
