import InputField from "../common/InputField";
import Button from "../common/Button";
import { HiArrowRight } from "react-icons/hi";

const ReadySection = () => {
    return (
        <section className="w-full text-white py-24 bg-[radial-gradient(circle_at_top_left,_#0d5bff,_#0047bb,_#003aa0)]">

            {/* Heading */}
            <h2 className="text-center text-4xl md:text-5xl font-semibold mb-6">
                Ready to Get Started?
            </h2>

            {/* Sub-text */}
            <p className="text-center text-lg max-w-3xl mx-auto text-blue-100">
                Join thousands of users already enjoying private, secure vehicle communication and parking management.
            </p>

            {/* Input + Button */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto w-full px-4">

                {/* Email Input */}
                <div className="w-full">
                    <InputField
                        placeholder="Enter your email address"
                        type="email"
                    />
                </div>

                 {/* Button using your component */}
                <Button
                    variant="primary"
                    size="md"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:from-yellow-600 hover:to-yellow-700 shadow-md hover:shadow-xl px-4 py-3 whitespace-nowrap gap-1 mb-4"
                >
                    <span>Get Started Free</span>
                    <HiArrowRight size={18} />
                </Button>
            </div>

            {/* Features under Input */}
            <p className="text-center text-blue-100 mt-4 text-sm">
                No credit card required • Free forever plan • Cancel anytime
            </p>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">

                {/* 24/7 Support */}
                <div className="text-center">
                    <p className="text-3xl font-semibold">24/7</p>
                    <p className="text-blue-100 text-sm">Support</p>
                </div>

                {/* Uptime */}
                <div className="text-center">
                    <p className="text-3xl font-semibold">99.9%</p>
                    <p className="text-blue-100 text-sm">Uptime</p>
                </div>

                {/* Free Setup */}
                <div className="text-center">
                    <p className="text-3xl font-semibold">Free</p>
                    <p className="text-blue-100 text-sm">Setup</p>
                </div>
            </div>
        </section>
    );
};

export default ReadySection;