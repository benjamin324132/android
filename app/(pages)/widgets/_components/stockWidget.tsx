import { Apple, Banana } from "lucide-react";

const StockWidget = () => {
  return (
    <div className="w-full rounded-3xl p-6 shadow-md">
      <div className="flex gap-3">
        <div className="w-16 h-16 rounded-full bg-stone-950 flex items-center justify-center">
          <Banana className="text-white size-8" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-950">BNNA</h3>
          <span className="text-gray-950">Banana Inc.</span>
        </div>
      </div>
      <div className="pt-16 flex flex-col gap-y-3">
        <div className="w-fit py-1 px-3 rounded-xl bg-[#0EF8A9]">
          <span className=" text-slate-950 font-medium">ROI +4.5%</span>
        </div>
        <h3 className=" text-slate-950 font-semibold">My Total Funding</h3>
        <h2 className=" text-4xl text-[#0EF8A9] font-bold">+$348,374</h2>
      </div>
    </div>
  );
};

export default StockWidget;
