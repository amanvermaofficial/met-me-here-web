import React from "react";
import { MessageCircle, Mail, FileText } from "lucide-react";
import Button from "../common/Button";

const ContactOptions = () => {
    const options = [
        {
            icon: <MessageCircle size={28} className="text-blue-600" />,
            title: "Live Chat",
            desc: "Get instant answers to your questions",
            btnText: "Start Chat",
            variant: "primary",
        },
        {
            icon: <Mail size={28} className="text-green-600" />,
            title: "Send Email",
            desc: "Email us and we'll respond within 24 hours",
            btnText: "Send Email",
            variant: "secondary",
        },
        {
            icon: <FileText size={28} className="text-gray-700" />,
            title: "Submit Query",
            desc: "Fill out a form with your detailed inquiry",
            btnText: "Submit",
            variant: "outline"
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    How Would You Like to Contact Us?
                </h2>

                <p className="mt-2 text-gray-600">
                    Choose the method that works best for you
                </p>

                {/* Cards */}
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {options.map((item, index) => (

                        <div
                            key={index}
                            className="flex flex-col items-center  p-6 
  rounded-xl 
  border 
  border-gray-200
  transition-all duration-300 
  cursor-pointer 
  hover:scale-105 
  hover:shadow-xl 
  focus:outline-none"
                        >

                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-100">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-lg text-gray-600">
                                {item.desc}
                            </p>

                            {/* Button (optional) */}
                            {item.btnText && (
                                <div className="mt-5 w-full">
                                    <Button
                                        text={item.btnText}
                                        variant={item.variant}
                                        className="w-full"
                                    />
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ContactOptions;