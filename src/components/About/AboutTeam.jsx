import React from "react";

const AboutTeam = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Head of Product",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Amit Patel",
      role: "Chief Technology Officer",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Sneha Reddy",
      role: "Head of Operations",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Meet Our Team
        </h2>
        <p className="mt-2 text-gray-600">
          The people behind Met Me Here
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-center"
            >
              
              {/* Image Wrapper */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-64 h-64 object-cover rounded-xl transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-600">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;