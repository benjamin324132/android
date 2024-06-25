import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckIcon } from "lucide-react";

const PricingWidget = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div>
        <h3 className="text-3xl font-bold text-blue-500">Pro</h3>
        <p className="font-bold">More advanced AI capabilities</p>
      </div>
      <div className="py-4">
        <h2 className=" text-4xl font-extrabold">
          $89 <span className=" text-2xl text-stone-300">/ mo</span>
        </h2>
        <p className="font-medium text-stone-500 pt-2">
          Per month, per team members
        </p>
      </div>
      <Separator />
      <div className="py-4 flex flex-col gap-y-5">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center justify-center size-6 rounded-full bg-neutral-300">
            <CheckIcon className="size-4 text-white" />
          </div>
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Email support
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center justify-center size-6 rounded-full bg-neutral-300">
            <CheckIcon className="size-4 text-white" />
          </div>
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Unlimited messages
          </Label>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center justify-center size-6 rounded-full bg-neutral-300">
            <CheckIcon className="size-4 text-white" />
          </div>
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Acces to AI capabilities
          </Label>
        </div>
      </div>
      <div className="pt-4"> 
        <Button className="w-full" variant="outline">Get started</Button>
      </div>
    </div>
  );
};

export default PricingWidget;
