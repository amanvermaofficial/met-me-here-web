import React from "react";

const FeatureHero = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-6">
          ⚡ Complete Feature Suite
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Everything You Need, <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            All in One Place
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Met Me Here revolutionizes how you connect with vehicle owners and manage
          parking spaces. Experience the future of urban mobility with complete
          privacy and security.
        </p>

      </div>
    </section>
  );
};

export default FeatureHero;