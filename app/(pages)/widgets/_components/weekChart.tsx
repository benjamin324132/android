"use client";
import { Progress, VerticalProgress } from "@/components/ui/progress";
import { TimerIcon } from "lucide-react";

const WeekChart = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md bg-gray-900">
      <div className="flex gap-3 pb-6">
        <TimerIcon className="text-white size-6" />
        <div>
          <span className="text-gray-200">Total time</span>
          <h3 className="text-2xl font-semibold text-gray-200">2h 45m</h3>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <VerticalProgress
            value={50}
            indicatorColor="bg-pink-200"
            className="rounded-lg"
          />
          <span className=" text-sm text-neutral-500">Mon</span>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <VerticalProgress
            value={70}
            indicatorColor="bg-pink-200"
            className="rounded-lg"
          />
          <span className=" text-sm text-neutral-500">Tue</span>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <VerticalProgress
            value={23}
            indicatorColor="bg-pink-200"
            className="rounded-lg"
          />
          <span className=" text-sm text-neutral-500">Wen</span>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <VerticalProgress
            value={35}
            indicatorColor="bg-pink-200"
            className="rounded-lg"
          />
          <span className=" text-sm text-neutral-500">Thr</span>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <VerticalProgress
            value={65}
            indicatorColor="bg-pink-200"
            className="rounded-lg"
          />
          <span className=" text-sm text-neutral-500">Fri</span>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <VerticalProgress
            value={48}
            indicatorColor="bg-pink-200"
            className="rounded-lg"
          />
          <span className=" text-sm text-neutral-500">Sat</span>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center">
          <VerticalProgress
            value={85}
            indicatorColor="bg-pink-200"
            className="rounded-lg"
          />
          <span className=" text-sm text-neutral-500">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default WeekChart;
