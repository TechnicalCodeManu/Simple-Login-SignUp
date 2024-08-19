import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkvaliddata } from '../utils/validate';


const Login = () => {
  const [isSignInForm , SetIsSignInForm ] = useState(true);
  const [errorMessage , SetErrorMessage] = useState(null);

  const email=useRef(null);
  const password=useRef(null);


  const handleButtonClick =()=>{
    //Validate the form data
    const message = checkvaliddata(email.current.value , password.current.value);
     SetErrorMessage(message);  
  }
 

  const toggleSignUpForm = ()=>{
    SetIsSignInForm(!isSignInForm);
  }

  
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='bg-auto'  src='./bg.jpeg' alt='BG '/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">

          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up " } </h1>

          {!isSignInForm && ( <input   type='text' placeholder='Enter Full Name ' className='p-4 my-4 w-full bg-gray-700'/> )}
     

            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>


            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            {!isSignInForm && ( <input   type='password' placeholder='Confirm Password ' className='p-4 my-4 w-full bg-gray-700'/> )} 
          

            <p className='font-bold text-lg text-red-500 py-2'>{errorMessage}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up " } </button>

            <p className='py-4 cursor-pointer ' onClick={toggleSignUpForm} > {isSignInForm ? " New to this Platform  ? SignUP now" : "Already registered User ? Sign In Now  " }</p>
        </form>
    </div>

  )
}

export default Login