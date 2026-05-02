import React from "react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-yellow-50 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Have questions? We'd love to hear from you. Choose your preferred way
          to reach us.
        </p>

      </div>
    </section>
  );
};

export default ContactHero;