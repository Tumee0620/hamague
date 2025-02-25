import { Radius } from "@/components/Radius";
import { Weatherbg } from "@/components/Weatherbg";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex w-full h-[100vh] relative ">
      <div>
        <div className="flex absolute left-10 top-2 px-4 py-6 items-center gap-4 shadow-md border-2 border-solid rounded-[48px]">
          <IoIosSearch className="w-[48px] h-[48px] decoration-none" />
          <input className="text-black text-[32px] w-[500px] min-w-[320px]  px-4 py-1 outline-none "></input>
        </div>
        <Radius />
        <Radius className={"w-[340px] h-[340px]"} />
        <Radius className={"w-[540px] h-[540px]"} />
        <Radius className={"w-[940px] h-[940px]"} />
        <Radius className={"w-[1340px] h-[1340px]"} />
      </div>
      <div className="w-[139px] h-[139px] rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white"></div>
      <div className="flex absolute gap-4 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img className="w-[43.289px] h-[86px]" src="/gg.svg"></img>
        <img className="w-[43.289px] h-[86px]" src="/Vector.svg"></img>
      </div>
      <div className="flex bg-white w-full h-full items-center justify-center">
        <Weatherbg
          className={
            " w-[414px] h-[832px] z-50 border-2 border-black  border-solid rounded-[42px]  absolute flex-col backdrop-blur-lg text-[#FF8E27]"
          }
          Calendar={"September 10,2021"}
          City={"Krakow"}
          Src="nar.png"
          temp={"26"}
          number={true}
          isDay={true}
          citycol={true}
        ></Weatherbg>
      </div>
      <div className="flex bg-[#0F141E] w-full h-full items-center justify-center ">
        <Weatherbg
          Calendar={"September 10,2021"}
          City={"Krakow"}
          Src="Icon.png"
          temp={"17"}
          number={false}
          isDay={false}
          citycol={false}
        ></Weatherbg>
        <img
          className="w-[128px] h-[128px] absolute bottom-20 right-[200px] "
          src="eclipse.svg"
        ></img>
      </div>
    </div>
  );
}
