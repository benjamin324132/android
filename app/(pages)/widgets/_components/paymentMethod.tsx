import { Button } from "@/components/ui/button";
import { CheckIcon, PlusIcon, CreditCardIcon } from "lucide-react";

const PaymentMethod = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <h3 className="font-semibold">Choose payment method</h3>
      <div className="py-8 flex flex-col gap-y-2">
        <div className="w-full p-3 flex items-start justify-between bg-blue-50 rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="w-14 h-10 bg-primary px-2 flex items-center justify-center rounded-md">
              <CreditCardIcon className="text-white" />
            </div>
            <div className="pl-2">
              <h3 className="font-semibold">Alex Doe</h3>
              <p className=" text-neutral-300 text-xs">**** 6767</p>
            </div>
          </div>
          <div className="self-center">
            <div className="flex items-center justify-center size-6 rounded-full bg-blue-600">
              <CheckIcon className="size-4 text-white" />
            </div>
          </div>
        </div>
        <div className="w-full p-3 flex items-start justify-between rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="w-14 h-10 bg-primary px-2 flex items-center justify-center rounded-md">
              <CreditCardIcon className="text-white" />
            </div>
            <div className="pl-2">
              <h3 className="font-semibold">Alex Doe</h3>
              <p className=" text-neutral-300 text-xs">**** 2323</p>
            </div>
          </div>
        </div>
        <div className="w-full p-3 flex items-start justify-between rounded-lg cursor-pointer">
          <div className="flex items-center">
            <div className="w-14 h-10 bg-primary px-2 flex items-center justify-center rounded-md">
              <CreditCardIcon className="text-white" />
            </div>
            <div className="pl-2">
              <h3 className="font-semibold">Alex Doe</h3>
              <p className=" text-neutral-300 text-xs">**** 1216</p>
            </div>
          </div>
        </div>
        <div>
          <Button variant="ghost">
            <PlusIcon className="size-5 pr-1" /> Add new card
          </Button>
        </div>
      </div>
      <div>
        <Button className="w-full" size="lg" variant="blue">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethod;
