import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center font-semibold">
          <div className="p-3 flex gap-2">
            <img draggable={false} className="h-8 p-2 rounded-full bg-[#0a0a0a]" src={assets.arrow_left} alt="left-arrow" />
            <img draggable={false} className="h-8 p-2 rounded-full bg-[#0a0a0a]" src={assets.arrow_right} alt="right-arrow" />
          </div>
          <div className="flex gap-3 justify-center items-center p-3 text-white text-sm">
            <p className="w-fit h-fit px-3 py-1.5 bg-white rounded-full text-black hover:scale-105 cursor-pointer">Explore Premium</p>
            <div className="flex justify-center items-center gap-1 w-fit h-fit px-3 py-1.5 bg-black rounded-full hover:scale-105 cursor-pointer">
            <img draggable={false} className="h-4 rounded-full border-2 border-white bg-transparent" src={assets.d_arrow} alt="bell" />
            <p className="">Install App</p></div>
            <img draggable={false} className="h-8 p-2 rounded-full bg-[#0a0a0a] hover:scale-105 cursor-pointer" src={assets.bell_icon} alt="bell" />
            <p className="h-8 w-8 flex items-center justify-center font-bold rounded-full bg-[#ff6437] border-4 border-black text-black hover:scale-105 cursor-pointer">S</p>
          </div>
        </div>
        <div className="flex gap-2 p-3 font-medium text-sm">
            <p className="w-fit h-fit px-4 py-1.5 bg-white rounded-full text-center">All</p>
            <p className="w-fit h-fit px-4 py-1.5 bg-[#2e2e2e] rounded-full text-center text-white">Music</p>
            <p className="w-fit h-fit px-4 py-1.5 bg-[#2e2e2e] rounded-full text-center text-white">Podcasts</p>
        </div>
      </div>
    </>
  );
}
