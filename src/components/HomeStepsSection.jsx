import React from "react";
import { Package, Car, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Order Your Sticker",
    desc: "Get your personalized QR code sticker delivered to your doorstep",
    icon: Package,
    bg: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
    iconColor: "text-blue-600",
    hoverIcon: "group-hover:text-blue-800",
  },
  {
    id: 2,
    title: "Apply to Vehicle",
    desc: "Stick it on your windshield or rear window for easy visibility",
    icon: Car,
    bg: "bg-yellow-50",
    hoverBg: "group-hover:bg-yellow-100",
    iconColor: "text-yellow-600",
    hoverIcon: "group-hover:text-yellow-800",
  },
  {
    id: 3,
    title: "Stay Connected",
    desc: "Anyone can scan and reach you instantly without sharing numbers",
    icon: CheckCircle,
    bg: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
    iconColor: "text-blue-600",
    hoverIcon: "group-hover:text-blue-800",
  },
];

const HomeStepsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start justify-between gap-10">

        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex flex-col items-center text-center group relative">

              {/* Icon Circle */}
              <div
                className={`
                  ${step.bg} ${step.hoverBg}
                  w-24 h-24 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${step.bg.includes("yellow") ? "shadow-yellow-100" : "shadow-blue-100"}
                  shadow-md
                  group-hover:scale-105
                  animate-floating
                `}
              >
                <Icon size={40} className={`transition-all duration-300 ${step.iconColor} ${step.hoverIcon}`} />
              </div>

              {/* Step Number */}
              <span className="text-blue-600 font-semibold mt-3">{step.id}</span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mt-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 mt-2 max-w-xs">{step.desc}</p>

              {/* Arrow except last */}
              {i < steps.length - 1 && (
                <ArrowRight
                  size={28}
                  className="absolute top-12 -right-10 text-blue-300 md:block hidden"
                />
              )}

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default HomeStepsSection;