import React from "react";
import Logo from "../image/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import Recent  from "../image/recent.svg";
import Treding  from "../image/trending.svg";
import Rated  from "../image/rated.svg";
import Subscribe  from "../image/subscribe.svg";
import Pics from "../file_components/Pic";

export default function Homepage() {
  return (
    <>
      <div className="bg-white sticky top-[-1rem] flex flex-row ml-[3rem]">
        <div className="flex flex-row w-[9rem] h-[5rem]  justify-center my-6  ">
          <img src={Logo} className="w-[5.7rem] h-16  my-1 " alt="logo" />
          <h1 className="mt-4  font-bold text-[21px] ">Ascend</h1>
        </div>
        <form className="w-1/2 h-16  mt-8 ml-[7.4rem] flex flex-row items-center ">
          <div className="border-[1px] border-[#616191] flex items-center justify-around w-full rounded-[10px]">
            <input
              className="p-4 rounded-lg w-[88%] h-full indent-1  outline-none text-[14px] font-sans  placeholder-gray-500  "
              type="search"
              placeholder="Search the product you want  "
              name="email"
            />
            <AiOutlineSearch className="w-8 h-8 fill-[#020255]  rotate-90" />
          </div>
        </form>

        <div className="flex flex-row items-center ml-[7rem] mb-4 ">
          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem] ">
            <BsMessenger className="mt-3 ml-3 w-6 h-6 fill-white" />
          </div>

          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem]">
            <MdNotificationsActive className="mt-3 ml-3 w-6 h-6 fill-white" />
          </div>
          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem]">
            <FaUserCircle className="mt-3 ml-3 w-6 h-6 fill-white" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-[#1a1a5a] w-[14.5%] h-[15rem]  left-[5rem] top-[15rem] rounded-[20px] flex flex-col fixed">
          <div className="flex flex-row  ml-4 pt-[4rem]">
            <img src={Recent} className="w-[1.4rem] h-[1.4rem] fill-white pointer " />
            <p className="text-white text-[14px] font-sans  ml-1">Recent</p>
          </div>

          <div className="flex flex-row  ml-4 pt-[1rem]">
            <img src={Treding} className="w-[1.5rem] h-[1.4rem] items-center  " />
            <p className="text-white text-[14px] font-sans  ml-1">Trending</p>
          </div>
          <div className="flex flex-row  ml-4 pt-[1rem] items-center">
            <img src={Rated} className="w-[1.5rem] h-[1.4rem]" />
            <p className="text-white text-[14px] font-sans  ml-1">
              Top-rated Whalesalers
            </p>
          </div>

          <div className="flex flex-row  ml-4 pt-[1rem] items-center">
            <img src={Subscribe} className="w-[1.5rem] h-[1.4rem]" />
            <p className="text-white text-[14px] font-sans  ml-1">Subscribes</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4   w-[66%] mx-[5rem] p-2 ">
          {Pics.data.picture.map((pic) => (
            <div key={pic.id} className=" w-full  h-[19rem] m-1  bg-slate-100 rounded-[13px] ">
              <img src={pic.src} alt="pic" className="h-[63%] rounded-[13px]" />
              <h2 className="font-bold mt-1 text-[14px] text-slate-800">{pic.name}</h2>
              <p className="text-[11px] text-slate-600">the leap into good electronic  typesetting....</p>
             <div className="flex flex-row items-center">
              <div className="w-7 h-7  rounded-[50%] mt-2 overflow-hidden ml-1 ">
                <img src={pic.wholesaler} alt='wholesaler' className="w-full " />
                
              </div>
              <p className="text-[11px] font-bold text-slate-700 ml-2 mt-2">Patrict Star</p>
             </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
