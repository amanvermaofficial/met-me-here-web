import React, { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo.webp";
import Button from "./common/Button";

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const NavbarMenu = [
        { name: "Home", slug: "/" },
        { name: "Features", slug: "/features" },
        { name: "About", slug: "/about" },
        { name: "Contact", slug: "/contact" },
    ];

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LEFT - LOGO */}
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
                    <img src={logo} alt="Met Me Here" className="w-14 h-14 object-contain" />
                    <div>
                        <h1 className="text-lg font-semibold text-gray-800">MET ME HERE</h1>
                        <p className="text-xs text-gray-500">Connect. Contact. Convenience</p>
                    </div>
                </div>

                {/* RIGHT SIDE - MENU + BUTTON (same parent) */}
                <div className="hidden md:flex items-center space-x-10">

                    {/* MENU ITEMS */}
                    {NavbarMenu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(item.slug)}
                            className="text-gray-600 hover:text-blue-600 transition"
                        >
                            {item.name}
                        </button>
                    ))}

                    {/* CTA BUTTON */}
                    <Button variant="primary" size="md">
                        Download App
                    </Button>
                </div>

                {/* MOBILE HAMBURGER */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
                    {NavbarMenu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(item.slug)}
                            className="block text-gray-700 hover:text-blue-600"
                        >
                            {item.name}
                        </button>
                    ))}

                    <Button variant="primary" size="md" className="w-full">
                        Download App
                    </Button>
                </div>
            )}
        </header>
    );
};

export default Header;