import React from "react";
import Url from 'url-parse';
import Logo from "../image/logo.png";
import { AiOutlineSearch ,AiOutlineShoppingCart,AiOutlineSwapRight} from "react-icons/ai";
import Message from "../image/Group2.png" ;
import Favorite from "../image/Group3.png";
import Cart from "../image/Group4.png";
import Notification from "../image/Group5.png";
import Pic from "../file_components/Pic";
import Pics from "../file_components/Pic2";

 function Product(){
    const data = Pic
    console.log(data.data.picture)


    const url = new Url(window.location.href, {
        parse: true
    });
    console.log(url.query);
    const queryParams = new URLSearchParams(window.location.search)
    const id = queryParams.get("id")
    console.log("this",id);
    const product = data.data.picture.filter((picture) => picture.id === Number(id))
    console.log("this is image",product[0].src);

 

    return(
        <div>
            <div className="bg-[#E1E1E1] w-full h-[158vh] flex flex-col ">
                <div className="w-[100%] h-[80px]  flex flex-row bg-white ">
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
                    
                            <img src={Message} className=" ml-4 w-11 cursor-pointer" alt="pic" />
                            <img src={Favorite} className=" ml-4 w-11 cursor-pointer" alt="pic" />
                            <img  src={Cart} className=" ml-4 w-11 cursor-pointer" alt="pic"/>
                            <img  src={Notification} className=" ml-4 w-11 cursor-pointer" alt="pic"/>
                        
                    </div>

                </div>
            
                
                <div className="bg-white w-[93%] h-[30rem] mx-9 my-4 rounded-t-[6px]">
                    <div className=" flex flex-row w-[90%] h-[23rem] flex justify-center gap-[2.3rem] ml-[3.4rem] mt-[2rem]">
                        <div className="flex flex-col ">
                        <div className="bg-red-300 w-10  h-10 mt-[7rem] rounded-[50%]">2</div>
                        <div className="bg-red-300 w-10  h-10 mt-[0.5rem] rounded-[50%]"></div>
                        <div className="bg-red-300 w-10  h-10 mt-[0.5rem] rounded-[50%]"></div>
                        <div className="bg-red-300 w-10  h-10 mt-[0.5rem] rounded-[50%]"></div>
                     </div>

                    <div className="bg-gray-400 basis-1/3  h-[23rem] mt-8">
                            <img src={product[0].src} className="w-full h-full" alt="pic" />
                    </div>
                        <div className=" basis-1/2  h-[23rem] mt-8 ">
                            <div className="flex flex-col m-4">
                                <div className="flex flex-col  " >
                                    <p className="font-bold text-[1.2rem]">Plus High Waist Skinny Jeans</p>
                                    <p className="font-bold text-[1.2rem]">$24.0</p>
                                    <p className="text-gray-400">Retail price: 42.00 </p>
                                </div>

                                <div className="mt-3 ">
                                    <p>Quantity</p>

                                    <select className="border p-1 rounded-[6px] otline-none w-full bg-gray-300 text-[14px] outline-none">
                                        <option value="Orange">4($23.4)</option>
                                        <option value="Radish">6($30.0)</option>
                                        <option value="Cherry">7($32.2)</option>
                                        <option value="Cherry">8($34.9)</option>
                                        <option value="Cherry">9($35.2)</option>
                                        <option value="Cherry">10($37.9)</option>
                                        <option value="Cherry">11($39.2)</option>
                                        <option value="Cherry">12($45.2)</option>
                                     </select>

                                     <button type="submit" className="w-full h-9 bg-[#1a1a5a] mt-4 rounded-[6px] text-white content-center ">Add cart</button>
                                    <div className="flex flex-row gap-3 mt-5">
                                         <AiOutlineShoppingCart className="w-6 h-6 ml-3 fill-gray-600" /> 
                                        <p className="text-gray-600"> 4 items minimum</p>
                                    </div>
                                        <p className="mt-5 text-gray-400">For more explanation</p>
                                        <button className="bg-[#1a1a5a] w-[20rem] h-8 rounded-[6px] mt-3 text-white content-center ">Contact Us</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" w-full h-[430px] ">

                    <p className="text-center text-[18px] font-medium mt-4">More information Us</p> 
                         <div className="flex flex-row gap-2 content-center justify-end mr-6 font-medium  ">
                                <p className="text-blue-900">View all product </p>
                                <AiOutlineSwapRight className="mt-1 fill-blue-900"/>
                        </div>
                    <div className="grid grid-cols-4 m-4 ml-[4rem] align-center ">
                        {Pics.data.picture.map((pic) => (
                        <div className="w-[16rem] h-[22rem] bg-white rounded-t-lg flex flex-col  ">
                                <div key={pic.id} className="w-[100%] h-[11rem] bg-gray-400  rounded-t-lg">
                                    <img src={pic.src} alt="pic" className="h-full w-full rounded-t-lg "/>
                                </div>
                                <div className="m-2">
                                    <h1 className="font-bold text-[14px] text-gray-800">Clothes medium size for women and man</h1>
                                    <p className="font-bold text-[14px] text-gray-800 mt-1">Price :$23</p>
                                    <p className="font-bold text-[14px] text-gray-600 mt-2">Retailer :$23</p>
                                    <button className="bg-[#1a1a5a] text-[14px] w-[13rem] h-[1.6rem] rounded text-white justify-center m-3 ml-4">Add to cart</button>
                                    
                                    <div className='flex flex-row gap-3'>
                                        <p className='text-gray-500 font-bold'>View more</p>
                                        <AiOutlineSwapRight className="mt-1 fill-gray-500 stroke-[3rem] h-4 bg-blue-300"/>


                                    </div>


                                </div>     

                        </div>

                        ))}
                       
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product;