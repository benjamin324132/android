import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const StatusWidget = () => {
  return (
    <div className="w-full rounded-3xl p-8 shadow-md bg-stone-950">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-stone-50">Formation Status</h2>
        <h3 className=" text-stone-50">In progress</h3>
        <div className="py-4">
          <Progress value={68} indicatorColor="bg-blue-200" />
        </div>
        <h3 className=" text-stone-50 text-center">
          Estimated processing <br /> 4-5 bussines days
        </h3>
        <div className="pt-8">
          <Button
            size="lg"
            className="w-full text-stone-950 font-extrabold bg-blue-200 hover:bg-blue-200/90"
          >
            View status
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatusWidget;
