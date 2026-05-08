import { MapPin, Clock, DollarSign } from "lucide-react";
import Button from "../common/Button";

const stats = [
    { value: "1000+", label: "Listed Spaces", gradient: "from-blue-100 to-white", color: 'text-blue-500' },
    { value: "50+", label: "Cities", gradient: "from-yellow-100 to-white", color: 'text-yellow-700' },
    { value: "₹5K+", label: "Avg Monthly Earning", gradient: "from-blue-100 to-white", color: 'text-blue-500' },
    { value: "100%", label: "Secure Payments", gradient: "from-yellow-100 to-white", color: 'text-yellow-700' },
];

const parkingData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a",
        tag: "Covered Parking",
        location: "Downtown, Mumbai",
        price: "$150/day",
        time: "24/7"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1528150177504-0f4e2120c3e7",
        tag: "Secure Parking",
        location: "Koramangala, Bangalore",
        price: "$200/day",
        time: "6 AM - 10 PM"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1558403194-611308249627",
        tag: "Covered Parking",
        location: "Cyber City, Gurgaon",
        price: "$180/day",
        time: "24/7"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c",
        tag: "Open Parking",
        location: "Banjara Hills, Hyderabad",
        price: "$120/day",
        time: "7 AM - 9 PM"
    }
];

export default function ParkingMarketplace() {
    return (
        <section className="py-16">

            {/* HEADER */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h1 className="text-4xl font-semibold">Parking Marketplace</h1>
                <p className="text-gray-600 mt-3">
                    Rent out your empty parking space or find parking near you.
                    Monetize unused spaces with ease.
                </p>
            </div>

            {/* STATS */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 mb-14 px-5">

                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className={`p-5 rounded-xl shadow bg-gradient-to-b ${item.gradient} text-center`}
                    >
                        <h2 className={`text-2xl ${item.color}`}>{item.value}</h2>
                        <p className="text-gray-500 text-sm">{item.label}</p>
                    </div>
                ))}

            </div>

            {/* PARKING CARDS */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">

                {parkingData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border-2 border-solid border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all"
                    >
                        {/* IMAGE */}
                        <div className="relative w-full h-40 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.location}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />

                            {/* TAG */}
                            <span className="absolute top-2 right-2 bg-white text-[10px] px-2 py-1 rounded shadow">
                                {item.tag}
                            </span>
                        </div>

                        {/* CONTENT */}
                        <div className="px-4 py-4">
                            <div className="flex items-start gap-2">
                                <MapPin size={14} className="text-blue-600" />
                                <p className="text-sm">{item.location}</p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <DollarSign size={14} className="text-green-600" />
                                <p className="text-sm font-semibold">{item.price}</p>
                            </div>

                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                                <Clock size={12} />
                                <span>{item.time}</span>
                            </div>

                            <Button
                                text="Book Now"
                                size="md"
                                variant="primary"
                                className="w-full mt-4"
                            />
                        </div>
                    </div>
                ))}

            </div>


 <div className="px-4 py-16">
      <div
        className="
          max-w-6xl mx-auto 
          rounded-3xl 
          bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500
          text-white 
          p-12 
          shadow-xl 
          relative 
          overflow-hidden
        "
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Glow Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full blur-2xl opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Have a Parking Space to Rent?
          </h2>

          <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base">
            Turn your empty parking spot into a source of income.
            List it today and start earning.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">

            <button className="btn btn-primary bg-yellow-500 px-4 py-2 text-black rounded-lg">List Your Space</button>
            <button className="btn btn-primary bg-transparent px-4 py-2 rounded-lg border border-white">Learn More</button>
          </div>
        </div>
      </div>
    </div>
        </section>
    );
}