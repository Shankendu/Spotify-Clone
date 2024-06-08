import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Sidebar() {
  return (
    <>
      <div className="h-full w-[25%] lg:flex lg:flex-col hidden gap-3 pl-3 py-3">
        {/* Top Card */}
        <div className="flex flex-col items-start pl-6 justify-center gap-6 h-[20%] bg-[#121212] rounded-lg">
          <Link to={"/"}>
            <div className="flex items-center gap-5">
              <img
                draggable={false}
                className="w-6"
                src={assets.home_icon}
                alt="home"
              />
              <p className="font-bold text-white md:text-base lg:text-lg cursor-pointer hover:underline hover:transition hover:delay-100 hover:ease-in hover:duration-100">
                Home
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-5">
            <img
              draggable={false}
              className="w-6"
              src={assets.search_icon}
              alt="search"
            />
            <p className="font-bold text-white md:text-base lg:text-lg  cursor-pointer hover:underline hover:transition hover:delay-100 hover:ease-in hover:duration-100">
              Search
            </p>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="flex flex-col items-start  h-[80%] bg-[#121212] rounded-lg">
          <div className="flex w-full pl-6 justify-between">
            <div className="flex items-center gap-5">
              <img
                draggable={false}
                className="w-6"
                src={assets.stack_icon}
                alt="playlist"
              />
              <p className="font-bold text-white text-lg cursor-pointer">
                Your Library
              </p>
            </div>

            <div className="flex gap-4 pr-6 py-6">
              <div className="h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#ffffff13] transition-all duration-300 ease-in-out">
                <img
                  draggable={false}
                  className="w-4"
                  src={assets.plus_icon}
                  alt="playlist"
                />
              </div>
              <div className="h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#ffffff13] transition-all duration-300 ease-in-out">
                <img
                  draggable={false}
                  className="w-4"
                  src={assets.arrow_icon}
                  alt="playlist"
                />
              </div>
            </div>
          </div>

          {/* Playlist Card */}
          <div className="w-[calc(100%-16px)] max-h-fit bg-[#242424] text-white rounded-lg mx-2 py-5 mb-6">
            <h1 className="text-lg font-bold pl-4 pb-2">
              Create your first playlist
            </h1>
            <p className="text-sm font-medium pl-4 pb-4">
              It&apos;s easy, we&apos;ll help you
            </p>
            <button className="ml-4 w-fit h-fit px-5 py-1.5 bg-white rounded-full text-black font-semibold hover:scale-105 cursor-pointer">
              Create playlist
            </button>
          </div>

          {/* Podcast Card */}
          <div className="w-[calc(100%-16px)] max-h-fit bg-[#242424] text-white rounded-lg mx-2 py-5">
            <h1 className="text-lg font-bold pl-4 pb-2">
              Let&apos;s find some podcasts to follow
            </h1>
            <p className="text-sm font-medium pl-4 pb-4">
              We&apos;ll keep you updated on new episodes
            </p>
            <button className="ml-4 w-fit h-fit px-5 py-1.5 bg-white rounded-full text-black font-semibold hover:scale-105 cursor-pointer">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
