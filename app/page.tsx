"use client";

import React from "react";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Hero1";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";

const Home = () => {
  return (
    <div className="text-white h-full w-full">
      <Hero1 />
      <Hero
        title="Enjoy on your TV"
        content="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more."
        img="\images\img.png"
      />
      <Hero
        title="Watch everywhere"
        content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img="\images\laptop.png"
        reverse={true}
      />
      <Hero
        title="Create profiles for kids"
        content="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img="\images\kids.png"
      />
      <Hero
        title="Download your shows to watch offline"
        content="Watch on a plane, train, or submarine..."
        img="\images\phone.png"
        reverse={true}
      />
      <Hero2 />
      <Footer />
    </div>
  );
};

export default Home;
