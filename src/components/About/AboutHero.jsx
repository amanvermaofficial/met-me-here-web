import React from "react";
import logo from "../../assets/logo.webp";

const AboutHero = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent">
                Met Me Here
              </span>
            </h1>

            <p className=" w-full mt-6 text-gray-600 leading-relaxed text-left" >
              We're revolutionizing how vehicle owners connect with each other
              while maintaining complete privacy. Founded in 2024, Met Me Here
              has grown to serve over 50,000 users across India.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is simple: make vehicle communication effortless,
              private and secure. Whether you need to move a parked car or find
              a parking space, we've got you covered.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="">
              
              <img
                src={logo}
                alt="Met Me Here"
                className="w-72 md:w-80"
              />
            </div>
          </div>
        </div>

        {/* STORY SECTION */}
        <div className="mt-20 max-w-3xl mx-auto text-left">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Story
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Met Me Here was born out of a common frustration: finding a way to
            contact a vehicle owner without compromising privacy. Traditional
            methods of leaving phone numbers on windshields exposed personal
            information and led to unwanted calls.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our founders realized that QR code technology combined with secure
            internet calling could solve this problem elegantly. After months of
            development and testing with early adopters, we launched Met Me Here
            in January 2024.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            What started as a simple vehicle contact solution has evolved into a
            comprehensive platform that also helps people monetize their parking
            spaces. Today, we're proud to serve users in over 50 cities across
            India.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;