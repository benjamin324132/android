import { Button } from "@/components/ui/button";

const CheckoutWidget = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <h3 className=" text-lg font-bold">Checkout</h3>
      <div className="flex flex-col gap-y-1 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-neutral-300">Subtotal</h3>
          <h3 className="font-medium text-neutral-800">$300.00</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-neutral-300">Shipping</h3>
          <h3 className="font-medium text-neutral-800">$30.00</h3>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-neutral-300">Total</h3>
          <h3 className="font-medium text-neutral-800">$330.00</h3>
        </div>
      </div>
      <div className="pt-4 w-full">
      <Button className="w-full" variant="yellow">Pay Now</Button>
      </div>
    </div>
  );
};

export default CheckoutWidget;
