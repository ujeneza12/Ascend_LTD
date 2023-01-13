import React from "react";
import Url from 'url-parse';
import Logo from "../image/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import Message from "../image/Group2.png" ;
import Favorite from "../image/Group3.png";
import Cart from "../image/Group4.png";
import Notification from "../image/Group5.png";

 function Product({id , name}){

    const url = new Url(window.location.href, {
        parse: true
    });

    let filteredUrl = url.query.replace('?','').split('&');
    // console.log(filteredUrl);

    return(
        <div>
            <div className="bg-[#E1E1E1] w-screen h-screen flex flex-col">
                <div className="w-[100%] h-[80px]  flex flex-row bg-white">
                    <div className="flex flex-row w-[9rem] h-[5rem]  justify-center  ">
                        <img src={Logo} className="w-[5rem] h-[3.4rem]  my-2 ml-4 " alt="logo" />
                        <h1 className="mt-6  font-bold text-[19px]  ">Ascend</h1>
                    </div>

                    <form className="w-1/2 h-14  mt-3 ml-[7.4rem] flex flex-row  items-center ">
                        <div className="border-[1px] border-[#616191] flex items-center justify-around w-full rounded-[10px]">
                            <div  className="p-3 rounded-lg w-[88%] h-full indent-1  outline-none text-[14px] font-sans  text-gray-500 cursor-text"> Search for the products or brands</div>
                            <AiOutlineSearch className="w-8 h-8 fill-[#020255] cursor-pointer" />
                        </div>
                    </form>

                    <div className="flex flex-row items-center ml-[3rem] mb-4 mt-3 ">
                    
                            <img src={Message} className=" ml-4 w-11" alt="pic" />
                            <img src={Favorite} className=" ml-4 w-11" alt="pic" />
                            <img  src={Cart} className=" ml-4 w-11" alt="pic"/>
                            <img  src={Notification} className=" ml-4 w-11" alt="pic"/>
                        
                    </div>

                </div>
            
                
                 <div className="bg-white w-[93%] h-[10rem] mx-9 my-4 rounded-t-[6px]">
                    <div className="bg-blue-300 flex flex-row h-20 flex justify-center">
                        <div className="bg-red-300 basis-1/6 w-10 h-10">1</div>
                        <div className="bg-gray-400 basis-1/4 w-10 h-10">2</div>
                        <div className="bg-blue-400 basis-1/2 w-10 h-10">3</div>
                    </div>
                 </div>
            </div>

         
            
        </div>
    )
}

export default Product;