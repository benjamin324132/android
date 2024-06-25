const LevelWidget = () => {
  return (
    <div className="relative w-full rounded-3xl shadow-md overflow-hidden">
      <div className="h-[220px]">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,256L80,261.3C160,267,320,277,480,261.3C640,245,800,203,960,176C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="h-full w-full bg-[#0099ff] -mt-0.5" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <h2 className=" text-6xl font-extrabold">63%</h2>
        <p className=" font-bold">Power Mode</p>
        <p className=" text-neutral-100 font-semibold">7 Hours 36 minutes</p>
      </div>
    </div>
  );
};

export default LevelWidget;
