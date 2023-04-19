import React, {useRef} from 'react'
import { SlClose } from 'react-icons/sl'


function Search() {

  const searchRemover = useRef(null);

  const removeSearch = () => {
    searchRemover.current.parentNode.classList.add("hidden");
    searchRemover.current.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("overflow-hidden");
    searchRemover.current.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("overflow-x-hidden");

    searchRemover.current.parentNode.parentNode.parentNode.childNodes[0].classList.add("z-10");
  }

  return (
    <div className=" w-[100%] h-[100%] top-0 bottom-0 flex  bg-[#1d1d1d] opacity-90 z-30">

      <div className=" absolute h-4 right-[3%] top-[7%]" onClick={removeSearch} ref={searchRemover}>
        <p className="bg-white rounded-full text-[29px] outline-none cursor-pointer"> <SlClose /></p>
      </div>


      <div class=" absolute bottom-12 bg-white h-[84%] w-[58%] left-[19%] rounded opacity-100">
        <p className="text-center py-12 font-bold">Search your product here</p>

        <div className="flex flex-col py-3 place-items-center m-4">
          <input className="border-2 border-blue-900 p-3 rounded-lg w-[70%] outline-none"  type="text" name="product-name" placeholder="product name"></input>

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





