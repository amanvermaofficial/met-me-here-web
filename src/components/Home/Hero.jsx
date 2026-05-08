import React from "react";
import { HiOutlineShieldCheck, HiOutlineChartBar } from "react-icons/hi2";
import { TbTrendingUp } from "react-icons/tb";
import logo from '../../assets/logo.webp';
import SeeItInAction from "./SeeItInAction";
import Button from "../common/Button";

const Hero = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-[#eef2f7] to-[#f6f1e8] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm px-4 py-1 rounded-full mb-6">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Secure & Private Communication
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                            Connect Without <br />
                            <span className="bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent">
                                Sharing Numbers
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 mt-6 max-w-lg">
                            Contact vehicle owners instantly via QR code. Rent or sell parking
                            spaces. All with complete privacy using secure internet calls.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 mt-8">
                            <Button variant="primary" size="lg" className="shadow hover:shadow-lg">
                                Get Started Free
                            </Button>

                            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"> Watch Demo </button>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-10 mt-10">
                            <div>
                                <h3 className="text-2xl  text-gray-900">50K+</h3>
                                <p className="text-sm text-gray-500">Active Users</p>
                            </div>
                            <div className="h-10 w-px bg-gray-300"></div>
                            <div>
                                <h3 className="text-2xl  text-gray-900">100%</h3>
                                <p className="text-sm text-gray-500">Private & Secure</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex justify-center group">

                        {/* IMAGE + SCANNER WRAPPER */}
                        <div className="relative overflow-hidden rounded-2xl">

                            {/* Image */}
                            <img
                                src={logo}
                                alt="Met Me Here"
                                className="
        w-[280px] md:w-[340px] relative z-10
        transition-all duration-500 ease-out
        group-hover:rotate-[3deg] group-hover:scale-105
      "
                            />

                            {/* Scanner Line (BEHIND CARDS) */}
                            <span className="
      absolute left-0 top-0 w-full h-full
      pointer-events-none z-0 opacity-0
      group-hover:opacity-100
    ">
                                <span className="
        absolute left-0 w-full h-[3px]
        bg-gradient-to-r from-transparent via-blue-500 to-transparent
        scan-line
      "></span>
                            </span>

                        </div>

                        {/* 🔵 Floating Card - Security */}
                        <div className="absolute top-0 left-0 z-20">
                            <div className="
      bg-white/90 backdrop-blur-md
      shadow-lg rounded-2xl px-5 py-3 flex items-center gap-3
      border border-blue-400
      transition-all duration-300
      hover:rotate-[5deg] hover:translate-x-2 hover:translate-y-2 hover:scale-105
    ">
                                <HiOutlineShieldCheck size={30} className="text-blue-600" />
                                <div className="text-sm">
                                    <p className="font-semibold text-gray-800">100% Secure</p>
                                    <p className="text-gray-500 text-xs">End-to-End</p>
                                </div>
                            </div>
                        </div>

                        {/* 🟡 Floating Card - Growth */}
                        <div className="absolute bottom-0 -right-10 z-20">
                            <div className="
      bg-white/90 backdrop-blur-md
      shadow-lg rounded-2xl px-5 py-3 flex items-center gap-3
      border border-yellow-400
      transition-all duration-300
      hover:rotate-[5deg] hover:translate-x-2 hover:translate-y-2 hover:scale-105
    ">
                                <TbTrendingUp size={30} className="text-yellow-500" />
                                <div className="text-sm">
                                    <p className="font-semibold text-gray-800">50K+ Users</p>
                                    <p className="text-gray-500 text-xs">Growing Fast</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;