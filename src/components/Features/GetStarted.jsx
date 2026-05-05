import { Download, QrCode } from "lucide-react";
import Button from "../common/Button";


export default function GetStarted() {
    return (
        <section className="w-full py-20 flex flex-col items-center text-center px-4 bg-[#F5F9FF]">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Ready to Get Started?
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl">
                Join thousands of users who are already enjoying seamless vehicle
                communication and parking management
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">

                {/* Download App Now Button */}
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                    <Download size={18} />
                    Download App Now
                </Button>

                {/* Order QR Sticker Button */}
                <button
                    className="
  cursor-pointer
    flex items-center gap-2 
    border-2 border-blue-600 text-blue-600
    hover:bg-blue-50 
    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
    transition-all font-medium px-8 py-3 
    rounded-xl shadow-md
  "
                >
                    <QrCode size={18} />
                    Order QR Sticker
                </button>

            </div>
        </section>
    );
}