'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
    const [activeLink, setActiveLink] = useState("/");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        setIsMenuOpen(false); // Close menu on link click
    };

    return (
        <div className='bg-[#334B35] py-6 h-full overflow-hidden text-white flex items-center justify-between p-4 relative'>
            <div>
                <h1 className='font-bold text-2xl'>Smart Agro</h1>
            </div>
            <div className='md:hidden'>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                    </svg>
                </button>
            </div>
            <div className='hidden md:flex items-center space-x-4 lg:space-x-6'>
                {navLinks.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        onClick={() => handleClick(item.href)}
                        className={`${item.href === activeLink ? 'underline decoration-[#F7C35F] underline-offset-4' : ''}`}
                    >
                        {item.link}
                    </Link>
                ))}
            </div>
            <div className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#334B35] text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <button onClick={() => setIsMenuOpen(false)} className='absolute top-4 right-4 focus:outline-none'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                    </svg>
                </button>
                <ul className='flex flex-col items-start p-4 space-y-4'>
                    {navLinks.map((item, index) => (
                        <li key={index} className='w-full'>
                            <Link
                                href={item.href}
                                onClick={() => handleClick(item.href)}
                                className={`${item.href === activeLink ? 'underline decoration-[#F7C35F] underline-offset-4' : ''} block py-2`}
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
