import { DataTable } from "@/components/DataTable";
import prismaDb from "@/lib/db";
import { MoviesColumns } from "./_components/tableColumns";
import MovieForm from "./_components/movieForm";
import SearchForm from "./_components/searchForm";

interface PageParams {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: PageParams) => {
  const query = searchParams.search ?? "";
  const movies = await prismaDb.movie.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
  });

  return (
    <div className="flex flex-col gap-y-5 p-4 relative max-w-screen-lg mx-auto">
      <div className="flex items-center justify-between">
      <SearchForm />
      <MovieForm />
      
      </div>
      
      <DataTable searchKey="name" data={movies} columns={MoviesColumns} />
    </div>
  );
};

export default Page;
