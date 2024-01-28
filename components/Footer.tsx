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
            <p className="mb-5">Des questions ? Appelez le (+33) 06-00-00-00-00</p>
            <div className="flex justify-between">
                <List items={['FAQ', 'Confidentialité']} />
                <List items={[`Centre d'aide`, 'Préférences de cookies']} />
                <List items={['Boutique Netflix', 'Mentions légales']} />
                <List items={[`Conditions d'utilisation`, 'Choix liés à la pub']} />
            </div>
        </div>
    );
};

export default Footer;
