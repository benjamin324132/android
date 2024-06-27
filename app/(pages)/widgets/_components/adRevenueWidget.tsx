import { FlowerIcon } from "lucide-react";
import Image from "next/image";

const AdRevenueWidget = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md bg-stone-950">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div className="w-16 h-16 rounded-2xl bg-pink-200 flex items-center justify-center">
            <FlowerIcon className="text-black size-10" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-50">Organic Ads</h3>
            <span className="text-gray-50">$25,199</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-red-500">4.32%</h3>
        </div>
      </div>
    </div>
  );
};

export default AdRevenueWidget;
