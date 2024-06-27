import { Button } from "@/components/ui/button";
import { Apple, MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";

const ContactUser = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
            <Image
              src="https://i.pravatar.cc/200"
              fill
              className="object-cover"
              alt="image"
            />
          </div>
          <div>
            <h3 className="font-semibold">Mark Doe</h3>
            <p className="text-sm text-neutral-400">Courier</p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <Button className="rounded-full" variant="outline" size="icon">
            <MessageCircle className="size-5" />
          </Button>
          <Button className="rounded-full" variant="outline" size="icon">
            <PhoneCall className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUser;
