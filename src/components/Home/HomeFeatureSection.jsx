import React from "react";
import {
  Shield,
  Phone,
  DollarSign,
  LockKeyhole,
} from "lucide-react";

import { BsQrCodeScan } from "react-icons/bs";
import { FaParking } from "react-icons/fa";

const features = [
  {
    title: "QR Code Contact",
    description:
      "Simply scan the QR code on any vehicle to connect with the owner instantly. No apps to download, no numbers to dial.",
    icon: <BsQrCodeScan size={34} className="text-blue-500" />,
    iconBg: "bg-[#FFF4D6]",
    helper: "✨ Hover to see animation",
    helperColor: "text-orange-400",
  },
  {
    title: "Complete Privacy",
    description:
      "Your mobile number stays completely private. We never share your personal contact information with anyone.",
    icon: <Shield className="text-amber-500 w-8 h-8" />,
    iconBg: "bg-[#FFF4D6]",
    helper: "🔒 How to see privacy",
    helperColor: "text-orange-400",
  },
  {
    title: "Internet Calls",
    description:
      "Connect through secure internet calls. Crystal clear audio without revealing your phone number.",
    icon: <Phone className="text-blue-500 w-8 h-8" />,
    iconBg: "bg-[#DDEEFF]",
    helper: "📞 Hover for call demo",
    helperColor: "text-pink-400",
  },
  {
    title: "Rent Parking Spaces",
    description:
      "Have an empty parking spot? List it for rent and earn passive income from unused spaces.",
    icon: <FaParking size={32} className="text-amber-500" />,
    iconBg: "bg-[#FFF4D6]",
    helper: "🏠 Hover to earn",
    helperColor: "text-orange-400",
    specialHover: true,
  },
  {
    title: "Sell Parking Spots",
    description:
      "Sell your parking space to interested buyers. Simple, secure transactions through our platform.",
    icon: <DollarSign className="text-blue-500 w-8 h-8" />,
    iconBg: "bg-[#DDEEFF]",
    helper: "💵 Hover to sell",
    helperColor: "text-green-400",
  },
  {
    title: "Secure Platform",
    description:
      "Enterprise-grade security ensures your data and communications are always protected.",
    icon: <LockKeyhole className="text-amber-500 w-8 h-8" />,
    iconBg: "bg-[#FFF4D6]",
    helper: "🔐 Hover for security",
    helperColor: "text-orange-400",
  },
];

export default function HomeFeatureSection() {
  return (
    <section className="bg-[#FAFAFA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-[#0B1320]">
            Everything You Need
          </h2>

          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            A comprehensive solution for vehicle communication and parking
            management
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((item, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl
                border border-gray-200 bg-white
                p-8 min-h-[310px]
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                group
                ${
                  item.specialHover
                    ? "hover:border-blue-500"
                    : "hover:border-gray-300"
                }
              `}
            >
              {/* Blue animated border for 4th card */}
              {item.specialHover && (
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              )}

              {/* Icon */}
              <div
              className="py-16 flex items-center justify-center "
              >
                <span   className={`
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  ${item.iconBg}
                `}>{item.icon}</span>
                
              </div>

              {/* Helper Text */}
              <p
                className={`text-[11px] mt-7 font-medium ${item.helperColor}`}
              >
                {item.helper}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-[22px] font-semibold text-[#0B1320]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}