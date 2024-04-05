import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser, ShoppingCart, Zap } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hypernova Headphones"
}

export function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="h-16 w-full flex items-center justify-between border-b px-4">
        <Link href="#" className="bg-black h-12 w-12 rounded-lg grid place-items-center text-white text-2xl font-bold">
          Ca
        </Link>
        <nav className="hidden md:flex  gap-x-4">
          <Link
            href="#"
            className="text-lg font-extralight text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-lg font-extralight text-muted-foreground transition-colors hover:text-foreground"
          >
            Collections
          </Link>
          <Link
            href="#"
            className="text-lg font-extralight text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Orders</DropdownMenuItem>
            <DropdownMenuItem>Favourites</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="py-8 md:py-16 px-4 md:px-0 max-w-screen-xl mx-auto w-full">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Trending</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Hypernova Headphones</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-1 md:grid-cols-2 py-4">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src="/placeholder.svg"
                        alt="Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className=" pt-4 hidden md:flex justify-between">
              <div className="relative h-36 w-36 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 w-36 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 w-36 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 w-36 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:pl-6 pt-4 md:pt-0 flex flex-col gap-y-4">
            <h1 className="text-3xl font-bold">Hypernova Headphones</h1>
            <p className="text-neutral-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc,
              nec ultricies nunc nisl nec nunc.
            </p>
            <h3 className=" text-2xl font-bold">$25.00</h3>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a quantity" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Quantity</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-4">
              <Button size="lg">
                <Zap className="w-6 h-6 pr-2" /> Buy now
              </Button>
              <Button size="lg" variant="outline">
                <ShoppingCart className="w-6 h-6 pr-2" /> Add to cart
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Design</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nisl nec ultricies ultricies, nunc nisl
                  ultricies nunc, nec ultricies nunc nisl nec nunc.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Delivery</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nisl nec ultricies ultricies, nunc nisl
                  ultricies nunc, nec ultricies nunc nisl nec nunc.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Warranty</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor, nisl nec ultricies ultricies, nunc nisl
                  ultricies nunc, nec ultricies nunc nisl nec nunc.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
