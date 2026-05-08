import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Button from "../common/Button";

export default function PricingSection() {
    return (
        <div className="py-20 px-4 bg-gradient-to-b from-[#E8F1FF] via-[#F4F8FF] to-white">
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-600 mt-2 font-medium">
                    Choose the plan that works best for you. No hidden fees, cancel anytime.
                </p>
            </div>

            {/* Cards Container */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* 6 MONTHS PLAN */}
                <div className="bg-white rounded-2xl p-10 border border-gray-200 transition-all hover:shadow-xl">
                    <h3 className="text-xl font-medium text-center">6 Months Plan</h3>

                    <p className="text-blue-600 text-4xl font-semibold text-center mt-3">
                        ₹299 <span className="text-sm text-gray-500 font-medium">/ 6 months</span>
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-700 font-medium">
                        {[
                            "Premium QR Code Sticker",
                            "Unlimited Scans",
                            "Private Internet Calls",
                            "List 2 Parking Spaces",
                            "Basic Support",
                            "Mobile Dashboard Access",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <Check size={18} className="text-green-500" /> {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 text-center">
                        <Button
                            text="Get Started"
                            variant="outline"
                            size="lg"
                            className="w-full bg-black text-white hover:bg-gray-900"
                        />
                    </div>
                </div>

                {/* YEARLY PLAN */}
                <div className="relative bg-white rounded-2xl p-10 border border-blue-500 transition-all hover:shadow-xl">

                    {/* MOST POPULAR BADGE */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-amber-400 text-white text-sm font-medium px-4 py-1 rounded-full shadow flex items-center gap-1">
                            <FaStar size={14} /> Most Popular
                        </span>
                    </div>

                    <h3 className="text-xl font-medium text-center">Yearly Plan</h3>

                    <p className="text-blue-600 text-4xl font-semibold text-center mt-3">
                        ₹499 <span className="text-sm text-gray-500 font-medium">/ 12 months</span>
                    </p>

                    {/* SAVE BADGE */}
                    <div className="flex justify-center mt-2">
                        <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full font-medium">
                            Save ₹100
                        </span>
                    </div>

                    <ul className="mt-6 space-y-3 text-gray-700 font-medium">
                        {[
                            "Premium QR Code Sticker",
                            "Unlimited Scans",
                            "Private Internet Calls",
                            "List Unlimited Parking Spaces",
                            "Priority Support 24/7",
                            "Mobile Dashboard Access",
                            "Advanced Analytics",
                            "Free Sticker Replacement",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <Check size={18} className="text-green-500" /> {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 text-center">
                        <Button
                            text="Get Started"
                            variant="primary"
                            size="lg"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Features Section */}
            <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                {/* Secure Payments */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/891/891399.png"
                        alt="Secure Payments"
                        className="w-12 h-12 mb-3"
                    />
                    <h4 className="font-semibold text-gray-900">Secure Payments</h4>
                    <p className="text-sm text-gray-500 mt-1">
                        Bank-grade encryption for all transactions
                    </p>
                </div>

                {/* Free Delivery */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
                        alt="Free Delivery"
                        className="w-12 h-12 mb-3"
                    />
                    <h4 className="font-semibold text-gray-900">Free Delivery</h4>
                    <p className="text-sm text-gray-500 mt-1">
                        Sticker delivered to your doorstep
                    </p>
                </div>

                {/* Money Back Guarantee */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/992/992703.png"
                        alt="Money Back Guarantee"
                        className="w-12 h-12 mb-3"
                    />
                    <h4 className="font-semibold text-gray-900">Money-Back Guarantee</h4>
                    <p className="text-sm text-gray-500 mt-1">
                        30-day full refund if not satisfied
                    </p>
                </div>
            </div>
        </div>
    );
}