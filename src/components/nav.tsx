import React from "react";
import { Button } from "./ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="w-auto ">
        <div className="flex space-x-4  ml-10 pt-2 ">
          <div className="text-customBlack">mail: info@gmail.com</div>
          <div className="text-customBlack">phone: +755555555</div>
        </div>
        <section className="bg-zinc-50 flex justify-center justify-items-center mt-4 p-10  ml-5 mr-5 space-x-10  text-customBlack">
          <div className="space-x-10 hover:underline underline-offset-4">
            <Link href="/Doctor">DoctorTouch</Link>
          </div>
          <div className="space-x-10 hover:underline underline-offset-4">
            <Link href="/Home">HOME</Link>
          </div>
          <div className="space-x-10 hover:underline underline-offset-4">
            {" "}
            DEPARTMENTS{" "}
          </div>
          <div className="space-x-10 hover:underline underline-offset-4">
            <Link href="/Contacts">CONTACTS</Link>
          </div>
          <div className="space-x-10 hover:underline underline-offset-4">
            <Link href="/Blog">TIMETABLE</Link>
          </div>
          <div className="space-x-10 hover:underline underline-offset-4">
            <Link href="/Shop">SHOP</Link>
          </div>
          <div className="pl-20 flex space-x-4 ">
            <div className="h-10 w-10">
              <CiSearch className="text-2xl" />
            </div>
            <div className="h-10 w-10">
              <MdMessage className="text-2xl" />
            </div>
            <div className="">
              <Button className="rounded bg-customBlue text-customBlack">
                BOOK NOW
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
