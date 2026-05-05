import { Users, MapPin, TrendingUp } from "lucide-react";

export default function WhyFuture() {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div
        className="w-full max-w-6xl rounded-3xl text-white text-center px-6 py-16"
        style={{
          background: "linear-gradient(90deg, #1152FF 0%, #B216FF 100%)",
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Met Me Here is the Future
        </h2>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-lg opacity-90 leading-relaxed">
          We're solving real urban problems: parking scarcity, privacy concerns,
          and vehicle communication. <br />
          Our dual-sided marketplace connects parking owners with seekers while
          maintaining complete privacy for vehicle owners. It's a win-win for everyone.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14">

          {/* Active Users */}
          <div className="flex flex-col items-center">
            <Users size={48} className="mb-3" />
            <h3 className="text-3xl font-bold">50,000+</h3>
            <p className="opacity-80 mt-1">Active Users</p>
          </div>

          {/* Parking Spots Listed */}
          <div className="flex flex-col items-center">
            <MapPin size={48} className="mb-3" />
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p className="opacity-80 mt-1">Parking Spots Listed</p>
          </div>

          {/* Earned by Owners */}
          <div className="flex flex-col items-center">
            <TrendingUp size={48} className="mb-3" />
            <h3 className="text-3xl font-bold">₹50L+</h3>
            <p className="opacity-80 mt-1">Earned by Owners</p>
          </div>

        </div>
      </div>
    </div>
  );
}