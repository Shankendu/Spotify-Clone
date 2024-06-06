import { assets, songsData } from "../assets/assets";

export default function Playbar() {
  return (
    <>
      <div className="w-full h-full flex">
        {/* Song Info */}
        <div className="lg:flex hidden ml-3 w-[23%] items-center ">
          <img draggable={false}
            className=" w-14 rounded-md"
            src={songsData[0].image}
            alt="song-image"
          />
          <div className="text-white pl-5">
            <p className="text-base font-semibold">{songsData[0].name}</p>
            <p className="text-sm font-normal">
              {songsData[0].desc.slice(0, 12) + "..."}
            </p>
          </div>
        </div>
        {/* Music Controls */}
        <div className="flex flex-col lg:w-[47%] w-full justify-center">
          <div className="flex justify-center gap-6 pt-3 pb-2">
            <img draggable={false} className="w-5" src={assets.shuffle_icon} alt="shuffle" />
            <img draggable={false} className="w-5" src={assets.prev_icon} alt="previous" />
            <img draggable={false} className="w-5" src={assets.play_icon} alt="play" />
            <img draggable={false} className="w-5" src={assets.next_icon} alt="next" />
            <img draggable={false} className="w-5" src={assets.loop_icon} alt="loop" />
          </div>

          <div className=" px-3 flex justify-center items-center gap-1">
            <p className="text-sm text-white">0.00</p>
            <div className="w-[80%] max-w-[544px] mx-2 h-1 bg-white rounded-full">
              <hr className="w-10 border-0 h-1 rounded-full bg-[#1ed760]" />
            </div>
            <p className="text-sm text-white">3.20</p>
          </div>
        </div>
        {/* Audio Controls */}
        <div className="lg:flex hidden items-center justify-center gap-5 w-[30%]">
          <img draggable={false} className="h-5" src={assets.plays_icon} alt="plays" />
          <img draggable={false} className="h-5" src={assets.mic_icon} alt="mic" />
          <img draggable={false} className="h-5" src={assets.queue_icon} alt="queue" />
          <img draggable={false} className="h-5" src={assets.speaker_icon} alt="speaker" />
          <div className="flex items-center justify-center gap-2">
            <img draggable={false} className="h-5" src={assets.volume_icon} alt="volume" />
            <div className="w-24 h-1 bg-white rounded-full">
              <hr className="w-[99%] border-0 h-1 rounded-full bg-[#1ed760]" />
            </div>
          </div>

          <img draggable={false} className="h-5" src={assets.mini_player_icon} alt="player" />
          <img draggable={false} className="h-5" src={assets.zoom_icon} alt="zoom" />
        </div>
      </div>
    </>
  );
}
