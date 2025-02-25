export const Weatherbg = ({
  Calendar,
  City,
  Src,
  temp,
  number,
  isDay,
  className,
  citycol,
}) => {
  return (
    <div
      className={`w-[414px] h-[832px] z-50 border-2 border-black  border-solid rounded-[42px]  absolute flex-col backdrop-blur-lg ${className}`}
    >
      <div className="flex justify-between px-10 pt-[58px] ">
        <div className="flex flex-col ">
          <p className="text-[18px] font-500 text-[#9CA3AF]">{Calendar}</p>
          <h1
            className="font-800 text-[48px] text-[#FFF]"
            style={{ color: citycol ? "black" : "" }}
          >
            {City}
          </h1>
        </div>
        <img src="Pin.svg" alt="" />
      </div>
      <div className="flex justify-center">
        <div className="w-[264.891px] h-[264.891px] flex ">
          <img src={Src} alt="" />
        </div>
      </div>
      <div className="flex flex-col pl-[48px]">
        <p
          className="font-800 text-[144px] p-0 "
          style={{
            color: number ? "#111827" : "#F9FAFBk",
          }}
        >
          {temp}°
        </p>
        <p
          className="font-800 text-[24px] text-[#777CCE] pl-4"
          style={{
            color: isDay ? "#FF8E27" : "",
          }}
        >
          Clear
        </p>
      </div>
      <div className="flex justify-around px-12 pt-[48px]">
        <img src="Home.svg" alt="" />
        <img src="Pin.svg" alt="" />
        <img src="Heart.svg" alt="" />
        <img src="User.svg" alt="" />
      </div>
    </div>
  );
};
