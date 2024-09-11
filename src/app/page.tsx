//import { Button } from "@/components/ui/button"
"use client";

import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { MdMessage } from "react-icons/md";
import { CarouselDemo } from "@/components/landing";


export default function Home() {
  return (
    <>
      <div className="w-auto  p-10">
        
        
        <CarouselDemo/>
        

        <section className="relative font- text-lg p-20 bg-color text-customBlack bg-emergency-image bg-cover bg-center bg-moving">
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-45"></div>
  <div className="relative flex justify-between p-4 rounded-lg text-customBlack  text-moving font-extrabold">
    <div>
      <div className="text-2xl font-extrabold mb-4 text-customRed">In case of emergency call (+256) 755555555</div>
      <div className="text-xl text-customRed">Any time, any day at your service</div>
    </div>
    <div>
      <Button className="rounded bg-customBlue text-customBlack">BOOK NOW</Button>
    </div>
  </div>
</section>

      </div>
    </>
  );
}
