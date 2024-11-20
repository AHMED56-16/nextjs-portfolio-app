'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#001F3F] to-[#3A6D8C] text-white shadow-lg z-50">
            <div className="container mx-auto p-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-extrabold text-[#EAD8B1]">
                    Muhammad Ahmed Raza
                </div>

                {/* Hamburger Button for mobile view */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-3xl p-2 rounded-lg focus:outline-none hover:bg-[#EAD8B1] hover:text-[#001F3F] transition-all"
                >
                    {isMobileMenuOpen ? '×' : '☰'}
                </button>

                {/* Navigation links */}
                <ul
                    className={`lg:flex gap-8 items-center ${isMobileMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-gradient-to-r from-[#3A6D8C] to-[#6A9AB0] p-4 shadow-lg' : 'hidden'} lg:block`}
                >
                    <Link href="#home">
                        <li className="text-2xl p-2 hover:text-[#EAD8B1] cursor-pointer transition-colors">Home</li>
                    </Link>
                    <Link href="#about">
                        <li className="text-2xl p-2 hover:text-[#EAD8B1] cursor-pointer transition-colors">About Us</li>
                    </Link>
                    <Link href="#projects">
                        <li className="text-2xl p-2 hover:text-[#EAD8B1] cursor-pointer transition-colors">Projects</li>
                    </Link>
                    <Link href="#skills">
                        <li className="text-2xl p-2 hover:text-[#EAD8B1] cursor-pointer transition-colors">Skills</li>
                    </Link>
                    <Link href="#contact">
                        <li className="text-2xl p-2 hover:text-[#EAD8B1] cursor-pointer transition-colors">Contact</li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}
