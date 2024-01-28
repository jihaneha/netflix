"use client";
import Input from "@/components/Input";
import RedButton from "@/components/RedButton";
import React, { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover text-white bg-opacity-50">
      <nav className="px-12 py-5 flex justify-between">
        <img src="/images/logo.png" alt="Logo" className="h-12" />
        <RedButton content="Sign in" />
      </nav>
      <div className="text-center mt-20" >
        <h1 className="text-5xl font-black my-6">Unlimited movies, TV shows, and more</h1>
        <p className="text-xl font-normal text-base my-6">Watch anywhere. Cancel anytime.</p>
        <p className="text-xl  font-normal text-base">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center mt-4">
            <div>
          <Input
            label="Email"
            onChange={(e: any) => setEmail(e.target.value)}
            id="email"
            type="email"
            value={email}
          
          /></div>
          <RedButton content="Get Started >" />
        </div>
      </div>
    </div>
  );
};

export default Home;
