import { movies } from "../_data";

interface IParams {
    id: string;
  }
  

const Page = ({ params }: { params: IParams}) => {
  const movie = movies.filter(i => i.id == params.id)[0];
  return (
    <div className=" min-h-screen grid place-items-center">
      <div className="grid grid-cols-2  p-10">
        <div className="flex items-center justify-center">
          <iframe
            width="640"
            height="360"
            src={movie.url}
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 flex flex-col">
          <h1 className="text-3xl font-bold">{movie.name}</h1>
          <p>
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
