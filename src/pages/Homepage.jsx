import React from 'react';

export default function Homepage(){
    return (
            <div className='flex flex-column'>

                <div className='bg-blue-400'>
                    <h1>Welcome To Ascend</h1>
                </div>

                <div className='flex flex-row w-[50%] h-[18rem]  ml-[18rem] mt-[8rem]  justify-between '>
                    <div className='bg-blue-300 w-[45%] h-full flex items-center justify-center font-bold  text-[21px] cursor-pointer'>
                        <h1>WholeSaler</h1>
                    </div>
                    <div className='bg-blue-400 w-[45%] h-full flex items-center justify-center  font-bold text-[21px]  cursor-pointer'>
                        <h1>Retailer</h1>
                    </div>
                    
                </div>
            </div>

    );
}

