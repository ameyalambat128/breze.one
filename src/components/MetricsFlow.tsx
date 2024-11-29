import { Database, Star, MessageSquare, Brain, BarChart } from "lucide-react";

export default function MetricsFlow() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="relative grid grid-cols-5 gap-8 items-center justify-center w-full max-w-5xl">
        {[
          { icon: Database, text: "Gather Reviews" },
          { icon: Star, text: "Analyze Ratings" },
          { icon: MessageSquare, text: "Generate Responses" },
          { icon: Brain, text: "AI Processing" },
          { icon: BarChart, text: "Generate Insights" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-4 p-6 rounded-lg ${
              index === 2
                ? "bg-gradient-to-br from-blue-600 to-green-500 shadow-lg"
                : "bg-neutral-800"
            }`}
          >
            <item.icon
              className={`w-10 h-10 ${
                index === 2 ? "text-white" : "text-blue-400"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                index === 2 ? "text-white" : "text-gray-300"
              }`}
            >
              {item.text}
            </span>
          </div>
        ))}

        {/* Connecting Lines */}
        <div className="absolute w-full h-1 bg-gray-700/50 top-1/2 -z-10 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
}
