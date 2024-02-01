import React from "react";

interface MyButtonProps {
  content: string;
  onClick?: () => void;
}

const RedButton: React.FC<MyButtonProps> = ({ content, onClick }) => {
  return (
    <button
      className="text-white bg-red-600 p-1 p-2 sm:p-3 hover:bg-red-800 transition rounded-md font-bold mt-2 sm:mt-0"
      onClick={onClick}
    >
      {" "}
      {content}
    </button>
  );
};

export default RedButton;
