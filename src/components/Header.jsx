import React from "react";
import { useNavigate } from "react-router";
import logo from '../assets/logo.webp'
import Button from "./common/Button";
const Header = () => {

    const navigate = useNavigate();

    const NavbarMenu = [
        { name: "Home", slug: "/", active: true },
        { name: "Features", slug: "/features", active: true },
        { name: "About", slug: "/about", active: true },
        { name: "Contact", slug: "/contact", active: true },
    ];

    return (
        <header className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] sticky top-0 z-50">
            <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo + Brand */}
                <div className="flex items-center space-x-3">
                    <img
                        src={logo}
                        alt="Met Me Here"
                        className="w-14 h-14 object-contain"
                    />
                    <div>
                        <h1 className="text-lg text-gray-800">
                            MET ME HERE
                        </h1>
                        <p className="text-xs text-gray-500">
                            Connect. Contact. Convenience
                        </p>
                    </div>
                </div>


                <div className="flex gap-7">
                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {NavbarMenu.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => navigate(item.slug)}
                                className="transition  text-gray-600 hover:text-blue-600 cursor-pointer"
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div>
                        <Button variant="primary" size="md">
                            Download App
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;