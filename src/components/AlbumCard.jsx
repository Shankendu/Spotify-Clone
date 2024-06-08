/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import { albumsData } from "../assets/assets";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";

export default function AlbumCard() {
  const { id } = useParams();
  let albumData = albumsData[id];

  const displayRef = useRef();
  const color = albumData.bgColor;
  useEffect(() => {
    
    displayRef.current.style.background = `linear-gradient(${color} 10%, #121212)`;
  });

  return (
    <>
      <div
        ref={displayRef}
        className="h-[96.5%] w-full lg:w-[75%]  lg:mr-3 lg:mt-3 m-3 rounded-lg select-none overflow-auto"
      >
        <Navbar />
        <div>
          <img src={albumData.image} alt="" />
        </div>
      </div>
    </>
  );
}
