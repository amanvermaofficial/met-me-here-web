import InputField from "../common/InputField";
import TextAreaField from "../common/TextAreaField";
import InfoCard from "./InfoCard";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";
import Button from "../common/Button";

const ContactSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div>
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-gray-500 mb-6">
                    Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-4">

                    <InfoCard
                        icon={Mail}
                        title="Email"
                        value="support@metmehhere.com"
                    />

                    <InfoCard
                        icon={Phone}
                        title="Phone"
                        value="+91 7626993537"
                    />

                    <InfoCard
                        icon={MapPin}
                        title="Office"
                        value="3337 1st floor Sector 66B IT city Mohali Punjab india (140308)"
                    />

                    <InfoCard
                        icon={Clock}
                        title="Business Hours"
                        value="Mon–Sat, 24 Hours"
                    />

                </div>

                {/* Bottom Email Box */}
                <div className="
        mt-6 
        p-6 
        border border-blue-200 
        bg-blue-50 
        rounded-xl 
        text-center
        flex 
        flex-col
        items-center
      ">
                    <div className="flex justify-center mb-2 text-blue-600">
                        <Mail size={28} />
                    </div>

                    <p className="font-medium text-gray-700">Prefer Email?</p>
                    <p className="text-sm text-gray-500 mb-3">
                        Click below to open your email client
                    </p>

                    <Button size="md" className="gap-2">
                        <Mail size={16} />
                        Email Us Directly
                    </Button>
                </div>
                {/* Follow Us */}
                <div className="mt-6">
                    <p className="text-sm font-medium text-black mb-3">Follow Us</p>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
                        >
                            <FaTwitter size={16} />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                        >
                            <FaInstagram size={16} />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
                        >
                            <FaLinkedinIn size={16} />
                        </a>
                    </div>
                </div>
            </div>



            {/* RIGHT SIDE FORM */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold mb-1">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Fill out the form below and we'll get back to you soon
                </p>

                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField label="First Name" placeholder="John" required />
                        <InputField label="Last Name" placeholder="Doe" required />
                    </div>

                    <InputField
                        label="Email"
                        type="email"
                        placeholder="john@example.com"
                        required
                    />

                    <InputField
                        label="Phone Number"
                        type="tel"
                        placeholder="+91 98765 43210"
                    />

                    <InputField
                        label="Subject"
                        placeholder="How can we help?"
                        required
                    />

                    <TextAreaField
                        label="Message"
                        placeholder="Tell us more about your inquiry..."
                        required
                    />

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full mt-4 flex items-center justify-center gap-2"
                    >
                        <Send size={18} />
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;