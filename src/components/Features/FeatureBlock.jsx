import React from "react";
import { Check } from "lucide-react";
import Button from "../common/Button";

const FeatureBlock = ({
    badge = "Core Feature",
    title,
    description,
    features = [],
    buttonText = "Learn More",
    image,
    reverse = false,
    icon,
    tickColor,
    badgeDotColor = "bg-gray-400",
    buttonVariant = "primary", 
}) => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20">
            <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-1`}>

                {/* Image */}
                <div className="w-full lg:max-w-1/2 flex justify-center">
                    <div className="group relative max-w-md w-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105">
                        <img src={image} alt={title} className="w-full h-[300px] object-cover" />

                        {icon && (
                            <div className="absolute top-7 right-4 bg-white/90 backdrop-blur p-2 rounded-xl shadow-md 
                                transition-all duration-500 group-hover:-translate-y group-hover:scale-110 group-hover:animate-bounce">
                                {icon}
                            </div>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="justify-center">
                    {/* Badge with dot */}
                    <span className="inline-flex items-center gap-2 text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full mb-4">
                        <span className={`w-2 h-2 rounded-full ${badgeDotColor}`}></span>
                        {badge}
                    </span>

                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">{title}</h2>

                    <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">{description}</p>

                    <ul className="space-y-3 mb-6">
                        {features.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className={tickColor} size={14} />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Button Component */}
                    <Button
                        text={`${buttonText} →`}
                        variant={buttonVariant}
                        size="md"
                    />
                </div>
            </div>
        </section>
    );
};


export default FeatureBlock;