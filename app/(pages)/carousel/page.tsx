"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";

const links = [
  {
    title: "Inbox",
    label: "128",
    icon: Inbox,
    variant: "default",
  },
  {
    title: "Drafts",
    label: "9",
    icon: File,
    variant: "ghost",
  },
  {
    title: "Sent",
    label: "",
    icon: Send,
    variant: "ghost",
  },
  {
    title: "Junk",
    label: "23",
    icon: ArchiveX,
    variant: "ghost",
  },
  {
    title: "Trash",
    label: "",
    icon: Trash2,
    variant: "ghost",
  },
  {
    title: "Archive",
    label: "",
    icon: Archive,
    variant: "ghost",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between px-2 py-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="group flex flex-col gap-4 py-2 pt-10 data-[collapsed=true]:py-2">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className={cn(
                    //@ts-ignore
                    buttonVariants({ variant: link.variant, size: "sm" }),
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                    "justify-start"
                  )}
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.title}
                  {link.label && (
                    <span
                      className={cn(
                        "ml-auto",
                        link.variant === "default" &&
                          "text-background dark:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex-1 flex items-center justify-center bg-green-400">
        <Carousel className="w-full max-w-fit md:max-w-xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="flex aspect-auto items-center justify-center">
                  <img
                    className="w-ful h-full"
                    src="https://cdn.dribbble.com/userupload/13414388/file/original-98447d032b5ab67345aaa4eccb4b0359.jpg?resize=500x500&vertical=center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Page;
