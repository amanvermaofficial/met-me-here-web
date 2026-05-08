import { FiSmartphone, FiPhoneCall, FiCheckCircle } from "react-icons/fi";
import { RiQrCodeLine } from "react-icons/ri";
import Button from "../common/Button";

const steps = [
    {
        id: "01",
        title: "Sign Up",
        desc: "Create your free account in seconds. No credit card required.",
        icon: <FiSmartphone size={40} className="text-blue-600" />,
        badgeColor: "bg-blue-500",
    },
    {
        id: "02",
        title: "Get Your QR Code",
        desc: "Receive your unique QR code sticker to place on your vehicle.",
        icon: <RiQrCodeLine size={40} className="text-blue-600" />,
        badgeColor: "bg-pink-500",
    },
    {
        id: "03",
        title: "Stay Connected",
        desc: "Anyone can scan your code to reach you via secure internet call.",
        icon: <FiPhoneCall size={40} className="text-blue-600" />,
        badgeColor: "bg-green-500",
    },
    {
        id: "04",
        title: "Manage Parking",
        desc: "List your parking spots for rent or sale through your dashboard.",
        icon: <FiCheckCircle size={40} className="text-blue-600" />,
        badgeColor: "bg-orange-500",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#eef3fb] to-[#f7f9ff]">

            {/* Heading */}
            <h2 className="text-center text-4xl font-semibold text-gray-800">
                How It Works
            </h2>
            <p className="text-center text-gray-500 mt-2 mb-16">
                Get started in minutes with our simple 4-step process
            </p>

            {/* Steps */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto px-6">
    {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center relative">

            {/* ICON WRAPPER */}
            <div className="relative group">
                <div
                    className="
                        w-28 h-28 rounded-full bg-white shadow-lg 
                        flex items-center justify-center 
                        relative transition-all duration-300 
                        group-hover:-translate-y-2
                        before:content-[''] before:absolute before:inset-0
                        before:rounded-full before:border before:border-[#ddecff]
                        before:scale-[1.22] before:-z-10
                    "
                >
                    {step.icon}
                </div>

                {/* Step Badge */}
                <div
                    className={`
                        absolute -top-3 -right-3 text-white text-sm font-semibold 
                        w-10 h-10 rounded-full flex items-center justify-center 
                        shadow-md ${step.badgeColor}
                    `}
                >
                    {step.id}
                </div>
            </div>

            {/* Title */}
            <p className="mt-6 text-lg font-semibold text-gray-800">
                {step.title}
            </p>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
                {step.desc}
            </p>

            {/* Arrow (Only show on desktop) */}
            {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute left-[120%] top-12 text-blue-500 text-4xl font-bold">
                    →
                </div>
            )}
        </div>
    ))}
</div>

            {/* Button */}
            <div className="flex justify-center mt-16">
                <div className="relative">

                    {/* BUTTON with arrow inside */}
                    <Button
                        text={
                            <span className="flex items-center gap-2">
                                Get Started Now
                                <span className="text-xl transform transition-all duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        }
                        variant="primary"
                        size="md"
                        className="
        group px-8 py-3 rounded-full shadow-lg
        bg-gradient-to-r from-purple-600 to-blue-600 
        text-white flex items-center gap-3
        hover:opacity-90 transition-all duration-300
      "
                    />

                    {/* 🔵 Blue glow shadow under button */}
                    <div
                        className="
        absolute left-1/2 -translate-x-1/2 
        w-44 h-4 rounded-full 
        bg-blue-400 blur-xl opacity-40
        top-full mt-3
      "
                    />
                </div>
            </div>

        </section>
    );
};

export default HowItWorks;