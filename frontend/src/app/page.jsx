"use client"
import Slider from "../../components/Slider/Slider";
// import Image from "next/image";
import Header from "../../components/UI/Header/Header";
// import CollapsibleExample from "../../components/UI/Header/Header";
 
export default function Home() {
  return (
     <>
          <div className="relative w-full h-full">
      <video className="w-full h-full object-cover"  src="video1.mp4" autoPlay loop muted />
      <div></div>
    </div>
    <Slider/>
 
     </>
  );
}
