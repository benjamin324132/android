import prismaDb from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageParams {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageParams) => {
  const movie = await prismaDb.movie.findUnique({ where: { id: params.id } });

  if (!movie) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
        <Image
            src={movie.img}
            fill
            alt={movie.name}
            className=" object-contain blur-[400px] z-0 "
          />
      <div className=" max-w-screen-md h-96 w-full rounded-lg grid grid-cols-1 md:grid-cols-2 z-50 p-2">
        <div className="relative md:h-full md:w-full h-72 overflow-hidden">
          <Image
            src={movie.img}
            fill
            alt={movie.name}
            className=" object-contain"
          />
        </div>
        <div className="py-8 ">
          <h1 className=" text-3xl font-bold">{movie.name}</h1>
          <h3 className=" font-semibold">{movie.year}</h3>
          <p className=" text-neutral-600">{movie.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
