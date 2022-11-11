import React from 'react';
import  {useState} from "react";
import Validation from './validationSignup';
// import {FcGoogle} from 'react-icons/fc'
// import {SiFacebook} from 'react-icons/si'
// import {GrLinkedin} from 'react-icons/gr'
 function SignUp(){
     const[values, setValues] = useState({
         email:"",
         password:"",

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
      <div className=" grid gri-cols-1 sm:grid-cols-2 h-screen w-[100%] mx-auto overflow-hidden ">
          <div className="hidden sm:block bg-blue-900 h-screen">
              hy
          </div>
          <div className="w-[100%] mx-auto ">
              <form className="max-w-[100%] w-full max-auto bg-white p-20  h-screen gb-red-300">
                  <h2 className="text-4xl font-bold text-center py-6">Create new account</h2>
                  <p className=" text-center">No more wasting of time and product</p>
                  <div className="flex flex-col py-3">
                      <input className="border p-2 rounded-lg  w-[100%] outline-none" type="text" placeholder="Enter your Email/phone number " name="email" value={values.email} onChange={handleChange }/>
                      {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="flex flex-col py-3">
                      <input className="border p-2 rounded-lg outline-none" type="password" placeholder="Enter your password " name="password" value={values.password} onChange={handleChange}/>
                      {errors.password && <p className="error">{errors.password}</p>}
                  </div>
                  <div className="p-3">
                <select className="border p-2 rounded-lg" value="role">
                    <option value="Orange">Orange</option>
                    <option value="Radish">Radish</option>
                    <option value="Cherry">Cherry</option>
                </select>
                      
                  </div>
                  <button className="border w-full my-6 py-2 bg-blue-800 rounded-lg text-white hover:bg-blue-500 relative" onClick={handleFormSubmit}>Sign up</button>
                  <div className="p-3">
                      <p className="text-center">Or sign in using</p>
                      <div className="flex space-x-12 py-4 justify-center">
                        

                      </div>
                      <p className="text-center">Already have an account? <strong className="text-blue-800">Login</strong></p>
                  </div>
              </form>

          </div>

      </div>
    )
 }
export default SignUp

