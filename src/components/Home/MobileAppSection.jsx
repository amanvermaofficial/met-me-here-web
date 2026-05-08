import { Smartphone, CheckCircle, Star } from "lucide-react";
import appMockup from "../../assets/MobileApp.webp"; // replace with your own image

export default function MobileAppSection() {
  return (
    <section className="w-full py-20 
      bg-gradient-to-br from-[#0A3BFF] via-[#002FCC] to-[#001A99] text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT */}
        <div>
          {/* iOS + Android Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
            <Smartphone size={18} />
            <span>Available on iOS & Android</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Download Our <br /> Mobile App
          </h2>

          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Get the full experience with our mobile app. Manage your QR codes,
            parking spaces, and connections all in one place.
          </p>

          {/* FEATURE LIST */}
          <div className="space-y-6">
            {[
              {
                title: "Instant Notifications",
                text: "Get alerted when someone scans your QR code",
              },
              {
                title: "Manage Parking Spaces",
                text: "List, rent, and sell parking spots effortlessly",
              },
              {
                title: "Call History & Analytics",
                text: "Track all your connections and interactions",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-yellow-400/20 p-1 rounded-full">
                  <CheckCircle size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* STORE BUTTONS */}
          <div className="flex items-center gap-4 mt-10">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
          </div>

          {/* STAR RATING */}
          <div className="flex items-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-300 fill-yellow-300" />
            ))}
            <span className="text-white/70">4.8/5 from 15,000+ reviews</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={appMockup}
            alt="App"
            className="w-[320px] md:w-[380px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}