import React from "react";
import { Lock, Star, Clock, Smartphone } from "lucide-react";
import { TbTrendingUp } from "react-icons/tb"; // ← BLUE TAG ICON

const features = [
  {
    icon: <Lock size={32} />,
    title: "Privacy First Design",
    desc: "Your personal information is sacred. We use end-to-end encryption and never share your contact details with anyone.",
    tag: "256-bit Encryption",
  },
  {
    icon: <Star size={32} />,
    title: "Premium Quality Stickers",
    desc: "Our QR code stickers are weatherproof, UV-resistant, and designed to enhance your vehicle’s look, not ruin it.",
    tag: "5+ Year Durability",
  },
  {
    icon: <Clock size={32} />,
    title: "Flexible Hourly Rentals",
    desc: "Rent out your home parking or driveway by the hour. Perfect for events, appointments, or whenever you're away.",
    tag: "Starting ₹20/hour",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Incredibly Easy to Use",
    desc: "No complicated setup. Just scan, connect, and manage everything from your smartphone with our intuitive app.",
    tag: "4.8★ App Rating",
  },
];

const ReasonsToLoveUs = () => {
  return (
    <section className="bg-[#eef5ff] py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Even More Reasons to Love Us
        </h2>
        <p className="text-gray-600 mt-2">
          We've thought of everything to make your experience perfect
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="
              group relative bg-white p-7 rounded-2xl shadow-md 
              hover:border-blue-500 border border-transparent
            "
          >
            {/* ICON */}
            <div
              className="
                w-14 h-14 flex items-center justify-center 
                rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white
                transition-all duration-300
                group-hover:scale-100      
                  group-hover:[animation:shake-horizontal_0.4s_ease-in-out_forwards]
              "
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              {item.desc}
            </p>

            {/* TAG ROW */}
            <div
              className="
                inline-flex items-center gap-2 px-3 py-1 mt-4
                text-sm bg-blue-100 text-blue-700 rounded-full 
              "
            >
              <TbTrendingUp size={18} className="text-blue-600" />
              {item.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsToLoveUs;