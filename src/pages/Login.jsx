import React from 'react';
import Logo from '../image/logo.png';

export default function Login(){
    return(
        <div className ="h-full bg-gray-400 flex flex-row justify-around "> 
        <div className="w-[50%] h-[43.45rem] bg-blue-900">
            <div className='flex flex-row w-[9rem] h-[5rem]  justify-center my-6 mx-6'>
            <img src={Logo}  className="w-[5rem] h-14  my-2 " alt='logo'/>
                <h1 className='mt-4 ml-2 text-white font-bold text-[20px]'>Ascend</h1>
            </div>
        </div>
        <div className="w-[50%] h-[43.45rem] bg-white "></div>
    
        </div>
    )
}