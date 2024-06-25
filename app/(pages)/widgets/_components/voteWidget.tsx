import { Progress } from "@/components/ui/progress";

const VoteWidget = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <h2 className=" text-2xl">Whats your favorite Frank Ocena album?</h2>
      <div className="pt-10 flex flex-col gap-y-4">
        <div className="relative">
          <Progress
            value={20}
            indicatorColor="bg-pink-200"
            className="h-8 rounded-lg"
          />
          <div className="absolute top-0 bottom-0 w-full px-3 flex items-center justify-between">
            <h4 className=" text-sm text-neutral-700 font-medium">
              Nostalgia Ultra
            </h4>
            <h4 className=" text-sm text-neutral-700 font-medium">9%</h4>
          </div>
        </div>
        <div className="relative">
          <Progress
            value={47}
            indicatorColor="bg-purple-200"
            className="h-8 rounded-lg"
          />
          <div className="absolute top-0 bottom-0 w-full px-3 flex items-center justify-between">
            <h4 className=" text-sm text-neutral-700 font-medium">
              Channel Orange
            </h4>
            <h4 className=" text-sm text-neutral-700 font-medium">31%</h4>
          </div>
        </div>
        <div className="relative">
          <Progress
            value={60}
            indicatorColor="bg-blue-200"
            className="h-8 rounded-lg"
          />
          <div className="absolute top-0 bottom-0 w-full px-3 flex items-center justify-between">
            <h4 className=" text-sm text-neutral-700 font-medium">Blonde</h4>
            <h4 className=" text-sm text-neutral-700 font-medium">60%</h4>
          </div>
        </div>
        <div>
          <h3 className=" text-neutral-400 font-medium">87 results</h3>
        </div>
      </div>
    </div>
  );
};

export default VoteWidget;
