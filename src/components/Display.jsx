import AlbumItems from "./AlbumItems";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import SongItems from "./SongItems";

export default function Display() {
  return (
    <>
      <div className="h-[96.5%] w-full lg:w-[75%] bg-gradient-to-b from-[#242424] from-10% to-[#121212] lg:mr-3 lg:mt-3 m-3 rounded-lg select-none overflow-auto">
        <Navbar />

        <div className="p-3">
          <h1 className="text-2xl my-2 font-bold text-white">Featured Charts</h1>
          <div className="flex overflow-x-auto select-none scroll-smooth">
            {albumsData.map((items) => (
              <AlbumItems
                key={items.id}
                image={items.image}
                name={items.name}
                desc={items.desc.slice(0,20) + "..."}
              />
            ))}
          </div>
        </div>

        <div className="p-3 ">
          <h1 className="text-2xl my-2 font-bold text-white">Recent Biggest Hits</h1>
          <div className="flex overflow-x-auto select-none scroll-smooth">
            {songsData.map((items) => (
              <SongItems
                key={items.id}
                image={items.image}
                name={items.name}
                desc={items.desc.slice(0,20) + "..."}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
