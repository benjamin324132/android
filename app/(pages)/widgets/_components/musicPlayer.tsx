import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Heart, Volume2 } from "lucide-react";
import Image from "next/image";

const MusicPlayer = () => {
  return (
    <div className="w-full bg-purple-300 rounded-3xl p-4 shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className=" text-lg font-semibold">Speaker</h3>
          <p className="text-sm text-neutral-400">Playing</p>
        </div>
        <div>
          <Switch />
        </div>
      </div>
      <div className="flex gap-3 pt-10">
        <div className="relative w-16 h-16 overflow-hidden rounded-2xl">
          <Image
            src="https://i.pravatar.cc/200"
            fill
            className="object-cover"
            alt="image"
          />
        </div>
        <div>
          <h3 className="font-semibold">Dance of the Knights</h3>
          <p className="text-sm text-neutral-400">Prokofieb</p>
        </div>
      </div>
      <div className="flex flex-col pt-6 w-full">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[100%]")}
        />
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs">1:23</span>
          <span className="text-xs text-neutral-400">3:07</span>
        </div>
      </div>
      <div className="grid grid-cols-[1fr,2fr,1fr] pt-5 items-center">
        <div>
          <Button variant="secondary" size="icon">
            <Heart className=" fill-black" />
          </Button>
        </div>
        <div className="flex gap-2 items-center justify-center">
        <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.24 7.22v9.57c0 1.96-2.13 3.19-3.83 2.21l-4.15-2.39-4.15-2.4c-1.7-.98-1.7-3.43 0-4.41l4.15-2.4 4.15-2.39c1.7-.98 3.83.24 3.83 2.21ZM3.762 18.93c-.41 0-.75-.34-.75-.75V5.82c0-.41.34-.75.75-.75s.75.34.75.75v12.36c0 .41-.34.75-.75.75Z"
                fill="#000000"
              ></path>
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89ZM21.002 19.11V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z"
                fill="#000000"
              ></path>
            </svg>
          </Button>
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.762 7.22v9.57c0 1.96 2.13 3.19 3.83 2.21l4.15-2.39 4.15-2.4c1.7-.98 1.7-3.43 0-4.41l-4.15-2.4-4.15-2.39c-1.7-.98-3.83.24-3.83 2.21ZM20.238 18.93c-.41 0-.75-.34-.75-.75V5.82c0-.41.34-.75.75-.75s.75.34.75.75v12.36c0 .41-.33.75-.75.75Z"
                fill="#000000"
              ></path>
            </svg>
          </Button>
        </div>
        <div className="flex gap-2 items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 16.75a.75.75 0 0 1-.6-1.2 5.94 5.94 0 0 0 0-7.1.75.75 0 0 1 1.2-.9c1.96 2.62 1.96 6.28 0 8.9-.15.2-.37.3-.6.3Z"
              fill="#000000"
            ></path>
            <path
              d="M19.828 19.25a.75.75 0 0 1-.6-1.2c2.67-3.56 2.67-8.54 0-12.1a.75.75 0 0 1 1.2-.9c3.07 4.09 3.07 9.81 0 13.9-.14.2-.37.3-.6.3ZM14.02 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H6.43c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63v-9.18c0-1.72-.62-3.01-1.73-3.63Z"
              fill="#000000"
            ></path>
          </svg>
          <p className=" text-lg">45</p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
