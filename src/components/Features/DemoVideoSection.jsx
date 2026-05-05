import { Play ,CheckCircle} from "lucide-react";

export default function DemoVideoSection() {
  return (
    <div className="w-full bg-[#F5F7FB] flex flex-col items-center py-16 px-4">
      {/* Button */}
      <button className="flex items-center gap-2 bg-red-100 shadow px-4 py-2 rounded-full text-sm font-medium">
        <span className="bg-red-500 w-6 h-6 flex items-center justify-center text-white rounded"><Play size={14} /></span>
        Watch Our Demo
      </button>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mt-6">
        See How It Works in Action
      </h2>

      <p className="text-center text-gray-600 mt-3 max-w-2xl">
        Watch this quick demo to understand how Met Me Here makes vehicle communication
        and parking management effortless
      </p>

      {/* Video container */}
      <div className="relative mt-10">
        {/* Corner Yellow Borders */}
        <div className="pointer-events-none absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-yellow-400 rounded-tl-xl"></div>
        <div className="pointer-events-none absolute -top-3 -right-3 w-10 h-10 border-t-4 border-r-4 border-yellow-400 rounded-tr-xl"></div>
        <div className="pointer-events-none absolute -bottom-3 -left-3 w-10 h-10 border-b-4 border-l-4 border-yellow-400 rounded-bl-xl"></div>
        <div className="pointer-events-none absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-yellow-400 rounded-br-xl"></div>

        <div className="rounded-xl overflow-hidden border-4 border-purple-600">
        <div className="rounded-xl overflow-hidden border-4 border-purple-600">
          <iframe
            className="w-[900px] max-w-full h-[500px]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      </div>

        {/* Bottom icons row */}
    <div className="flex items-center gap-8 mt-6 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
        <CheckCircle className="text-green-500" size={18} /> Step-by-step guide
        </div>
        <div className="flex items-center gap-2">
         <CheckCircle className="text-green-500" size={18} /> Real user examples
        </div>
        <div className="flex items-center gap-2">
           <CheckCircle className="text-green-500" size={18} /> Quick 3-minute demo
        </div>
      </div>
    </div>
  );
}
