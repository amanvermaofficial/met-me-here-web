import { Mail, Phone, MapPin, Clock } from "lucide-react";

const InfoCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="
      flex items-start gap-4 
      p-4 
      rounded-xl 
      border border-gray-200 
      bg-white 
      shadow-sm 
      hover:shadow-md 
      transition-all duration-300 
      cursor-pointer
    ">
      {/* Icon Box */}
      <div className="
        w-10 h-10 
        flex items-center justify-center 
        rounded-lg 
        bg-gradient-to-br from-yellow-100 to-blue-100
        text-blue-600
      ">
        <Icon size={20} />
      </div>

      {/* Text */}
      <div>
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-sm text-gray-500">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;