import Air from "./_components/air";
import MusicPlayer from "./_components/musicPlayer";
import Weather from "./_components/weather";

const Page = () => {
  return (
    <div className=" max-w-[450px] mx-auto flex flex-col py-8 gap-8 px-2">
      <MusicPlayer />
      <Air />
      <Weather />
    </div>
  );
};

export default Page;
