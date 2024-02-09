import React, { useState } from "react";

interface Faq {
  question: string;
  answer: string | JSX.Element;
}

const FaqList: React.FC = () => {
  const faqData: Faq[] = [
    {
      question: "What is Netflix ?",
      answer: (
        <>
          <p className="mb-4">
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
          </p>
          <p className="mb-4">
            You can watch as much as you want, whenever you want – all for one
            low monthly price. There s always something new to discover and new
            TV shows and movies are added every week!
          </p>
        </>
      ),
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 5.99 to EUR 19.99 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can i watch ?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      question: "How do i cancel ?",
      answer:
        " Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can i watch on Netflix ?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is netflix good for kids?",
      answer: (
        <>
          <p className="mb-4">
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space.
          </p>
          <p className="mb-4">
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </p>
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-5/6 mx-auto mt-8 text-white h-1/2">
      {faqData.map((faq, index: number) => (
        <div key={index} className="mb-3 ">
          <button
            className="flex items-center justify-between w-full p-6 bg-greeey cursor-pointer mb-1 "
            onClick={() => toggleAnswer(index)}
          >
            <p className="text-lg ">{faq.question}</p>
            <span className="text-white text-2xl">
              {openIndex === index ? "_" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-6 bg-greeey text-white text-left text-lg">
              <p className="">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqList;
