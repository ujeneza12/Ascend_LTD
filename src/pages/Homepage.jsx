import React, { useRef } from "react";
import Logo from "../image/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import {ReactComponent as Recent}  from "../image/recent.svg";
import Treding  from "../image/trending.svg";
import Rated  from "../image/rated.svg";
import Subscribe  from "../image/subscribe.svg";
import Pics from "../file_components/Pic";
import Search from "./Search.jsx";
export default function Homepage() {

  const searchRef = useRef(null);
  const navRef = useRef(null);
  const container = useRef(null);

  const search = () => {
    container.current.parentNode.parentNode.classList.add("overflow-hidden");
    searchRef.current.classList.remove("hidden");
    navRef.current.classList.remove("z-10");
  }

  return (
    <div ref={container}>
      <div className="bg-white sticky top-[-1rem] flex flex-row ml-[3rem] z-10" ref={navRef}>
        <div className="flex flex-row w-[9rem] h-[5rem]  justify-center my-6  ">
          <img src={Logo} className="w-[5.7rem] h-16  my-1 " alt="logo" />
          <h1 className="mt-4  font-bold text-[21px] ">Ascend</h1>
        </div>
        <form className="w-1/2 h-16  mt-8 ml-[7.4rem] flex flex-row  items-center ">
          <div className="border-[1px] border-[#616191] flex items-center justify-around w-full rounded-[10px]">
            <div          
              className="p-4 rounded-lg w-[88%] h-full indent-1  outline-none text-[14px] font-sans  text-gray-500 cursor-text"
              onClick={search}
            > Search the product you want</div>
            <AiOutlineSearch className="w-8 h-8 fill-[#020255]  rotate-90 cursor-pointer" />
          </div>
        </form>

        <div className="flex flex-row items-center ml-[7rem] mb-4 ">
          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem] cursor-pointer ">
            <BsMessenger className="mt-3 ml-3 w-6 h-6 fill-white " />
          </div>

          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem] cursor-pointer">
            <MdNotificationsActive className="mt-3 ml-3 w-6 h-6 fill-white " />
          </div>
          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem] cursor-pointer">
            <FaUserCircle className="mt-3 ml-3 w-6 h-6 fill-white " />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-[#1a1a5a] w-[14.5%] h-[15rem]  left-[4rem] top-[15rem] rounded-[20px] flex flex-col fixed">
          <div className="flex flex-row  ml-4 pt-[4rem] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-103 duration-30">
            <Recent className="w-[1.4rem] h-[1.4rem] fill-white pointer " />
            <p className="text-white text-[14px] font-sans  ml-1">Recent</p>
          </div>

          <div className="flex flex-row  ml-4 pt-[1rem] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-103 duration-30">
            <img src={Treding} className="w-[1.5rem] h-[1.4rem] items-center  " alt="tred" />
            <p className="text-white text-[14px] font-sans  ml-1">Trending</p>
          </div>
          <div className="flex flex-row  ml-4 pt-[1rem] items-center transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-103 duration-30">
            <img src={Rated} className="w-[1.5rem] h-[1.4rem]" alt="rated" />
            <p className="text-white text-[14px] font-sans  ml-1">
              Top-rated Whalesalers
            </p>
          </div>

          <div className="flex flex-row  ml-4 pt-[1rem] items-center transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-103 duration-30">
            <img src={Subscribe} className="w-[1.5rem] h-[1.4rem]"  alt="subscribe"/>
            <p className="text-white text-[14px] font-sans  ml-1">Subscribes</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4  w-[66%] mx-[6rem] p-2">
          {Pics.data.picture.map((pic) => (
            <div key={pic.id} className=" w-full  h-[19rem] m-1  bg-slate-100 rounded-[13px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30">
              <img src={pic.src} alt="pic" className="h-[63%] rounded-[13px]" />
              <h2 className="font-bold mt-1 text-[14px] text-slate-800">{pic.name}</h2>
              <p className="text-[11px] text-slate-600">the leap into good electronic  typesetting....</p>
             <div className="flex flex-row items-center">
              <div className="w-7 h-7  rounded-[50%] mt-3 overflow-hidden ml-2 ">
                <img src={pic.wholesaler} alt='wholesaler' className="w-full " />
                
              </div>
              <p className="text-[11px] font-bold text-slate-700 ml-2 mt-3">Patrict Star</p>
             </div>
            </div>
          ))}

        </div>
      </div>
      <div className="hidden w-[100vw] h-[100vh] absolute top-0 bottom-0" ref={searchRef}>
        <Search />
      </div>
    </div>
  );
}
