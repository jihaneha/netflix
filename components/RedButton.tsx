import React from 'react';

interface MyButtonProps {
    content: string;
    onClick?: () => void;
}


const RedButton: React.FC<MyButtonProps>  = ( {content, onClick}) => {
    return (
        <button className="text-white bg-red-600 px-3 hover:bg-red-800 transition rounded-md font-bold "  onClick={onClick}> {content}</button>
    );
};

export default RedButton;