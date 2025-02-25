import { Radius } from "@/components/Radius";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-[100vh] relative ">
      <div>
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

      <div className="flex bg-white w-full h-full"></div>
      <div className="flex bg-[#0F141E] w-full h-full"></div>
    </div>
  );
}
