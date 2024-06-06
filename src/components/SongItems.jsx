import { assets } from "../assets/assets";

/* eslint-disable react/prop-types */
export default function SongItems({ name, image, desc }) {
  return (
    <>
      <div className="min-w-[210px] rounded py-2 px-3 cursor-pointer hover:bg-gradient-to-br from-transparent from-30% to-[#ffffff0f] select-none relative">
        <img draggable={false} className="rounded" src={image} alt="" />
        <p className="text-white font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200/30 text-sm font-medium">{desc}</p>
        <div className=" min-w-[210px] absolute top-0 right-0 h-full opacity-0 translate-y-5 hover:-translate-y-0 hover:opacity-100 transition duration-300 ease-in-out">
          <img
            className="max-h-10 p-2 bg-[#1ed760] rounded-full flex items-center justify-center absolute top-36 right-5 shadow-lg shadow-black/25"
            src={assets.play_black}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
