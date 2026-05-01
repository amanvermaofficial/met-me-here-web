import React from "react";
import { Star } from "lucide-react";

const AboutStats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "50+", label: "Cities" },
    { value: "1M+", label: "QR Scans" },
    { value: "4.8", label: "User Rating", icon: true },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((item, index) => (
            
            <div key={index} className="flex flex-col items-center">
              
              {/* Value */}
              <div className="flex items-center gap-1 text-3xl md:text-4xl font-semibold">
                {item.value}
                {item.icon && <Star size={22} className="fill-white" />}
              </div>

              {/* Label */}
              <p className="mt-2 text-sm text-blue-100">
                {item.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutStats;