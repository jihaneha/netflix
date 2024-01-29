"use client";

import React, { useState } from 'react';
import RedButton from './RedButton';
import Input from './Input';

const Hero1 = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="h-screen relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover text-white bg-opacity-50">
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
              <div className="mr-2">
            <Input
              label="Email address"
              onChange={(e: any) => setEmail(e.target.value)}
              id="email"
              type="email"
              value={email}
            
            /></div>
            
            <RedButton content="Get Started >" />
           
          </div>
        </div> 
        <div className="flex justify-center bg-gradient-radial from-rose-600 to-indigo-900 via-rgb-88-21-58 via-opacity-0 absolute -bottom-12 w-9/12 left-1/2 transform -translate-x-1/2 p-3">
          {/* <span>
            <img src="\images\pop.png" alt="pop corn" width="100px"/>
          </span> */}
          <div className="ml-8"> <h2 className="text-lg font-medium leading-9 m-0">The Netflix you love for just EUR 5.99.</h2>
        <p className="text-base leading-6 mt-1 mb-1">Get the Standard with ads plan.</p>
        <a href="#" className="cursor-pointer underline text-sky-400/100 font-medium">Learn More</a></div>
       
      </div>
      </div>
    );
};

export default Hero1;