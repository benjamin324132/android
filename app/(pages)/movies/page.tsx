import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { movies } from "./_data";

const Page = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Carousel className="w-full max-w-fit md:max-w-xl">
        <CarouselContent>
          {movies.map((movie, index) => (
            <CarouselItem key={index}>
              <Link href={`/movies/${movie.id}`}>
                <div className="flex aspect-auto items-center justify-center">
                  <img className="w-ful h-full" src={movie.img} />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Page;
