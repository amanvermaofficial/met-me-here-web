import React from 'react'

const ZoomCard = ({ image, title, description }) => {
  return (
    <div className="group relative w-full h-60 overflow-hidden rounded-xl cursor-pointer">

      {/* Image */}
      <img
        src={image}
        alt="card"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Corner Design */}
      <div
        className="
          absolute top-2 right-2
          w-10 h-10 
          border-t-3 border-r-3 border-white 
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        "
      ></div>

      {/* Dark overlay */}
      <div
        className="
          absolute inset-0 bg-black/40
          opacity-0 group-hover:opacity-100
          transition-all duration-300
        "
      ></div>

      {/* Text */}
      <div
        className="
          absolute bottom-4 left-4 text-white 
          opacity-0 group-hover:opacity-100 
          transition-all duration-300
        "
      >
        <h3 className="text-lg font-semibold text-start">{title}</h3>
        <p className="text-sm mt-1 text-start">{description}</p>
      </div>
    </div>
  );
};


export default ZoomCard