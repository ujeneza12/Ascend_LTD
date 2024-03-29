import React from 'react';
import Logo from '../image/logo.png';
import Business from '../image/business.svg';
import  { useState } from "react";
import Validation from './validationSignup';
import {AiFillGoogleCircle} from 'react-icons/ai'
import {SiFacebook} from 'react-icons/si'
import {GrLinkedin} from 'react-icons/gr'


export default function Login(){

    
        const[values, setValues] = useState({
            email:"",
            password:"",
            slide:""

   
        })
        const [errors, setErrors] = useState({})
      
        const handleChange = (event) => {
            
            setValues({
                values,
                [event.target.name]:event.target.value,
            })
           }
       
        const handleFormSubmit = (event) =>{
            event.preventDefault();
            setErrors(Validation(values))
           
        }
    return(
        <div className ="h-screen bg-gray-400 flex"> 
            <div className="w-[50%] h-full bg-blue-900 flex flex-col items-start">
                    <div className='flex flex-row w-[9rem] h-[5rem]  justify-center my-2 mx-2'>
                        <img src={Logo}  className="w-[3.3rem] h-9  my-1 " alt='logo'/>
                        <h1 className='mt-2  text-white font-bold text-[14px]'>Ascend</h1>
                    </div>
                    <div className='bg-white w-[90%] h-[71.48%] self-center flex items-center justify-center rounded-[25px] mt-[-23px] overflow-hidden '>
                        <img src={Business}  alt='business' className='h-auto w-auto '/>
                    </div>

                    <div className='text-white text-sm ml-6 mt-6 flex flex-col justify-center text-center '>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. eos Officia  obcaecati quod culpa illum sit </p> 
                        <p className="text-center ">debitis iure, obcaecati quod culpa illum sit tempore ipsa.</p>  
                       <div className='flex flex-row justify-center items-center mt-5'>
                       <input type="radio" value="slide1" name="slide" /> 
                       <input type="radio" value="slide2" name="slide" /> 
                       <input type="radio" value="slide3" name="slide" /> 
                       <input type="radio" value="slide3" name="slide" /> 


                        </div>  
                    </div>
            </div>
            <div className="w-1/2 mx-auto ">
              <form className="max-w-[100%] w-full max-auto bg-white p-20  h-screen gb-red-300">
                  <h2 className="text-4xl font-bold text-center py-6">Create an account</h2>
                  <p className=" text-center">No more wasting of time and product</p>
                  <div className="flex flex-col py-3">
                      <input className="border p-3 rounded-lg  w-[100%] outline-none" type="text" placeholder="Enter your Email/phone number " name="email" value={values.email} onChange={handleChange }/>
                      {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="flex flex-col py-3">
                      <input className="border p-3 rounded-lg outline-none " type="password" placeholder="Enter your password " name="password" value={values.password} onChange={handleChange}/>
                      {errors.password && <p className="error"> {errors.password}</p>}
                  </div>
                  <div className="p-3">
                 <select className="border p-2 rounded-lg otline-none">
                     <option value="Orange">country</option>
                     <option value="Radish">sector</option>
                     <option value="Cherry">district</option>
                </select>
                      
                  </div>
                  <button className="border w-full my-6 py-2 bg-blue-800 rounded-lg text-white font-bold  text-[18px]  hover:bg-blue-700 relative" onClick={handleFormSubmit}>Sign up</button>
                  <div className="flex space-x-12 py-4 justify-center ">

                  <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem] cursor-pointer ">
                      <AiFillGoogleCircle className="mt-3 ml-3 w-[50%] h-6 fill-white " />
                   </div> 

          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem] cursor-pointer">
            <SiFacebook className="mt-3 ml-3 w-[50%] h-6 fill-white" />
          </div>
          <div className="bg-[#1a1a5a] w-12 h-12 rounded-[50%] m-[0.5rem] cursor-pointer ">
            <GrLinkedin className="mt-3 ml-3 w-[50%] h-6 fill-white" />
          </div>
                        
                    </div>
                  <div className="p-3 flex ml-[8rem]">
                      <p className="text-center"> Already have an account? </p>
                      <strong><a className='text-blue-700  hover:text-blue-900 ml-2' href='/Login'>Login</a></strong>
                  </div>
              </form>

          </div>

    
        </div>
    )
}
