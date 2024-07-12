import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const PostWidget = () => {
  return (
    <div className="w-full rounded-3xl p-4 shadow-md">
      <div className="flex flex-col gap-y-5">
        <div className="relative w-full h-60 overflow-hidden rounded-2xl">
          <Image
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/116906a9b40a49049b0406b850d78718_9366/Tenis_Originals_Country_OG_Blanco_ID2961_01_standard.jpg"
            fill
            className="object-cover"
            alt="image"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold -tracking-tight text-stone-900">
            How to make perfect coffee, according to the science
          </h2>
        </div>
        <div className="flex gap-x-4">
          <div>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/200" alt="user" />
              <AvatarFallback>TG</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h3 className="font-semibold">Tara Gray</h3>
            <p className="text-xs font-medium text-stone-500">June 13, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
