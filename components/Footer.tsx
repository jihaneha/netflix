import React from 'react';

interface ListProps {
    items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li className="mt-4 underline cursor-pointer" key={index}>{item}</li>
            ))}
        </ul>
    );
};

const Footer = () => {
    return (
        <div className="bg-black bg-opacity-70 px-16 py-16 self-center rounded-md w-full text-white mt-10">
            <p className="mb-5">Questions? Contact us.</p>
            <div className="flex justify-between">
                <List items={['FAQ', 'Privacy']} />
                <List items={[`Help Center`, 'Cookie Preferences']} />
                <List items={['Netflix Shop', 'Corporate Information']} />
                <List items={[`Terms of Use`, 'Ad Choices']} />
            </div>
        </div>
    );
};

export default Footer;
