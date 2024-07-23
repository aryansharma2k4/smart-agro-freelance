'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
    const [activeLink, setActiveLink] = useState("/");

    const navLinks = [
        {
            link: "Home",
            href: "/"
        },
        {
            link: "About Us",
            href: "/about"
        },
        {
            link: "Our Products",
            href: "/products"
        },
        {
            link: "Services",
            href: "/services"
        },
        {
            link: "News",
            href: "/news"
        },
        {
            link: "Contact Us",
            href: "/contact"
        },
    ];

    const handleClick = (href) => {
        setActiveLink(href);
    };

    return (
        <div className='bg-[#334B35] py-6 h-full text-white flex items-center justify-around p-4'>
            <div>
                <h1 className='font-bold text-2xl'>Smart Agro</h1>
            </div>
            <div>
                <ul className='flex items-center space-x-6'>
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                onClick={() => handleClick(item.href)}
                                className={`${item.href === activeLink ? 'underline decoration-[#F7C35F] underline-offset-4' : ''}`}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
