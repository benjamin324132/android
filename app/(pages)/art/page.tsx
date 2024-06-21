import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className=" min-h-screen max-w-[1400px] mx-auto absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="pt-12">
        <div className="relative">
          <span className="absolute top-0 text-2xl leading-[-10rem] font-semibold">
            BENJAMIN
          </span>
          <span className="text-2xl absolute top-5 leading-[-10rem] font-semibold">
            LANDAVAZO
          </span>
        </div>
        <div className="pt-20 flex flex-col gap-y-5">
          <Link href="#">RECENT</Link>
          <Link href="#">ONE</Link>
          <Link href="#">TWO</Link>
          <Link href="#">WILD ROSE</Link>
        </div>
      </div>
      <div className=" flex gap-4">
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
          Next.js Blue
        </button>
        <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          Next White
        </button>
        <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Figma
        </button>
        <button className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
          Favourite
        </button>
        <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
          Brutal
        </button>
        <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
          Sketch
        </button>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
       <ChevronLeft className=" size-4" />
        <span>Aceternity UI</span>
      </HoverBorderGradient>
  
      </div>
    </div>
  );
};

export default Page;
