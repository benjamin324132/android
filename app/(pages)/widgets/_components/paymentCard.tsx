import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const PaymentCard = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div className="flex gap-3">
        <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
          <Image
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/116906a9b40a49049b0406b850d78718_9366/Tenis_Originals_Country_OG_Blanco_ID2961_01_standard.jpg"
            fill
            className="object-cover"
            alt="image"
          />
        </div>
        <div>
          <h3 className="font-semibold">TENIS ORIGINALS COUNTRY OG</h3>
          <p className="text-sm text-neutral-400">US 7</p>
          <span className="font-semibold">$2,199</span>
        </div>
      </div>
      <div className="py-6">
        <Separator />
      </div>
      <div className="flex flex-col gap-y-1 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium  text-gray-400">Subtotal</h3>
          <h3 className="font-medium text-neutral-800">$2,199</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium  text-gray-400">Shipping</h3>
          <h3 className="font-medium text-neutral-800">$200</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">Total</h3>
          <h3 className="font-medium text-neutral-800">$2,399</h3>
        </div>
      </div>
      <div className="pt-6">
        <Button className="w-full" variant="purple">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
