import React from "react";

interface HeroProps {
  title: string;
  content: string;
  img: string;
  reverse?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, content, img, reverse }) => {
  const orderClass = reverse ? "sm:flex-row-reverse" : "";
  return (
    <div className={`w-full border-b-8 border-solid border-gray-600 p-20`}>
      <div className="w-full h-full   container max-w-5xl mx-auto">
        <div
          className={`flex flex-wrap justify-center items-center mx-auto pt-10 ${orderClass} `}
        >
          <div className=" text-center sm:text-left sm:w-1/2 ">
            <h2 className="lg:text-5xl sm:text-4xl font-black my-6 text-3xl">
              {title}
            </h2>
            <p className="md:text-2xl">{content}</p>
          </div>
          <div className="p-10 w-full sm:w-1/2 ">
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
