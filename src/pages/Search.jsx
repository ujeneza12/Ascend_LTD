import React from 'react'
import Logo from '../image/logo.png';
import { SlClose } from 'react-icons/sl'


function Search() {
  return (
    <div className=" relative h-screen  flex  bg-[#2E2D2D] opacity-70">


      <div className='flex flex-row w-[9rem] h-[5rem]  justify-center my-2 mx-2'>
        <img src={Logo} className="w-[3.3rem] h-9  my-1 " alt='logo' />
        <h1 className='mt-2  text-white font-bold text-[14px]'>Ascend</h1>
      </div>

      <div className=" absolute h-4 right-[3%] top-[7%]">
        <p className="bg-white rounded-full text-[29px] outline-none"> <SlClose /></p>
      </div>

      <div class="absolute bottom-0 left-[12%] h-[35rem] rounded-tl-lg w-[8%] bg-black 900 opacity-90">

      </div>


      <div class=" absolute bottom-12 bg-white h-[84%] w-[58%] left-[19%] rounded">
        <p className="text-center py-12 font-bold">Search your product here</p>

        <div className="flex flex-col py-3 place-items-center m-4">
          <input className="border-2 border-blue-900 p-3 rounded-lg w-[70%] outline-none border" type="text" name="product-name" placeholder="product name"></input>

        </div>
        <div className="flex flex-col py-3 place-items-center m-4">
          <input className="border-2 border-blue-900 p-3  rounded-lg w-[70%] outline-none" type="text" name="location" placeholder="Your current location"></input>
        </div>
        <div className="flex flex-col py-3 px-[15%] m-4">
          <select className="border-2 border-blue-900 rounded-lg py-3 w-[40%] px-[2.9%] outline-none ">
            <option value="orange">Orange</option>
            <option value="orange">Mango</option>
            <option value="orange">Orange</option>
          </select>
        </div>
        <div className="flex flex-col place-items-center py-3 m-4">
          <button className="border py-3 rounded-lg w-[70%] bg-blue-800">Search</button>
        </div>

      </div>






    </div>

  )
}

export default Search

// 





