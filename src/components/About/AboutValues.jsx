import React from "react";
import { ShieldCheck, Users, Target, Award } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Privacy First",
      desc: "We never share your personal information. Your mobile number stays completely private.",
    },
    {
      icon: <Users size={28} />,
      title: "Customer Centric",
      desc: "Built for users by users. We listen to feedback and continuously improve.",
    },
    {
      icon: <Target size={28} />,
      title: "Innovation",
      desc: "Using cutting-edge technology to solve real-world communication challenges.",
    },
    {
      icon: <Award size={28} />,
      title: "Excellence",
      desc: "Committed to delivering the highest quality service and support.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Values
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Icon Box */}
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-yellow-100 text-blue-600">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutValues;