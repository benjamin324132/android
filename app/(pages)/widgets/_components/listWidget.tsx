import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";

const ListWidget = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h3 className=" font-semibold">Weekly Work done</h3>
          <Button size="icon" className=" rounded-full">
            <PlusIcon />
          </Button>
        </div>
        <div className=" bg-neutral-100 py-4 px-2 flex items-center gap-x-2 rounded-lg">
          <Checkbox id="1" />
          <Label
            htmlFor="1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Feedback on website!
          </Label>
        </div>
        <div className=" bg-neutral-100 py-4 px-2 flex items-center gap-x-2 rounded-lg">
          <Checkbox id="2" />
          <Label
            htmlFor="2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Designing Landing page
          </Label>
        </div>
        <div className=" bg-neutral-100 py-4 px-2 flex items-center gap-x-2 rounded-lg">
          <Checkbox id="3" />
          <Label
            htmlFor="3"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Aurora Prototyping
          </Label>
        </div>
        <div className=" bg-neutral-100 py-4 px-2 flex items-center gap-x-2 rounded-lg">
          <Checkbox id="4" />
          <Label
            htmlFor="4"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Smiths Project Discussion
          </Label>
        </div>
      </div>
    </div>
  );
};

export default ListWidget;
