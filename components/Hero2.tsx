import React, { useState } from "react";
import Input from "./Input";
import RedButton from "./RedButton";
import { useRouter } from "next/navigation";
import FaqList from "./FaqList";

export default function Hero2() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <div className=" text-white text-center border-b-8 border-solid border-greey mb-6 p-8 ">
      <h3 className="text-3xl sm:text-5xl font-black mb-6 p-15 p-4 my-6">
        Frequently Asked Questions
      </h3>
      <div className=" mb-16">
        <FaqList />
      </div>
      <p className="text-xl  font-normal text-base">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="block sm:flex justify-center mt-4 mx-10 gap-2 mb-8">
        <Input
          label="Email address"
          onChange={(e: any) => setEmail(e.target.value)}
          id="email"
          type="email"
          value={email}
        />

        <RedButton content="Get Started >" />
      </div>
    </div>
  );
}
