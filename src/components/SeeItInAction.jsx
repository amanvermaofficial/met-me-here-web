import React from "react";
import SeeItInActionImage from "../assets/SeeItInAction.webp";
import ZoomCard from "./ZoomCard";

const SeeItInAction = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          See It In Action
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Join thousands of users already using our QR code stickers for seamless
          vehicle communication
        </p>

        {/* Card */}
        <div className="mt-12 bg-gradient-to-br from-gray-100 to-yellow-50 rounded-2xl p-8 shadow-sm">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group overflow-hidden rounded-xl">

              {/* Image */}
              <img
                src={SeeItInActionImage}
                alt="QR Sticker"
                className="
          w-64 md:w-80 rounded-xl shadow-lg
          transition-transform duration-500
          group-hover:scale-110
        "
              />

              {/* Scanner Overlay */}
              <span className="absolute inset-0 pointer-events-none">

                <span className="
          absolute left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-blue-500 to-transparent
          scan-line opacity-0 group-hover:opacity-100
        "></span>

              </span>

            </div>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg font-semibold text-gray-800">
            Our Premium QR Sticker
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
            Weatherproof, durable, and easy to apply. Place it on your windshield
            and stay connected.
          </p>
        </div>

         <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">

          <ZoomCard
            image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
            title="Scan & Connect"
            description="Simply scan the QR code to reach the vehicle owner"
          />

          <ZoomCard
            image="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=600&q=80"
            title="Easy Access"
            description="Quick and contactless communication"
          />

          <ZoomCard
            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
            title="Parking Solutions"
            description="Manage parking spaces effortlessly"
          />

          <ZoomCard
            image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=600&q=80"
            title="Mobile First"
            description="Works on any smartphone without app download"
          />

        </div>
      </div>
      

    
    </section >
  );
};

export default SeeItInAction;