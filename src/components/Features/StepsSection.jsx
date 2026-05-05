import { QrCode, ParkingCircle, PhoneCall, DollarSign, ArrowRight } from "lucide-react";

export default function StepsSection() {
  const steps = [
    {
      id: "01",
      title: "Get Your QR Sticker",
      desc: "Order your personalized QR code sticker online. We'll deliver it to your doorstep within 2-3 days.",
      icon: <QrCode size={32} />,
    },
    {
      id: "02",
      title: "Apply to Your Vehicle",
      desc: "Stick it on your windshield or rear window. Takes just 30 seconds and works on any vehicle.",
      icon: <ParkingCircle size={32} />,
    },
    {
      id: "03",
      title: "Anyone Can Reach You",
      desc: "When someone needs to contact you, they scan the code and connect instantly via secure call.",
      icon: <PhoneCall size={32} />,
    },
    {
      id: "04",
      title: "List Your Parking (Optional)",
      desc: "Got extra parking? List it in the app and start earning passive income immediately.",
      icon: <DollarSign size={32} />,
    },
  ];

  return (
    <div className="w-full flex justify-center py-16 px-4 bg-[#F5F7FB]">
      <div className="bg-white max-w-6xl w-full rounded-3xl shadow p-10 md:p-14">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold">
          Getting Started is Simple
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Follow these 4 easy steps and you're ready to go
        </p>

        <div className="relative mt-16">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center group cursor-pointer"
              >

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                    {step.icon}
                  </div>

                  {/* Badge */}
                  <div className="absolute -top-2 -right-2 bg-yellow-400 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow">
                    {step.id}
                  </div>
                </div>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-9 right-[-28px] text-blue-500
               group-hover:[animation:arrowMove_0.8s_ease-in-out_infinite]"
                  >
                    <ArrowRight size={22} />
                  </div>
                )}

                {/* Text */}
                <h3 className="text-lg font-semibold mt-5 transition-colors duration-30">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 max-w-[220px]">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}