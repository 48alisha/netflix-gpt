import {useState,React} from 'react';
import Header from './Header';


const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);


  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  }
  return (
    <div>
    <div><Header/></div>
    <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_small.jpg" alt="logo" />
    </div>

    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" >
    <h1 className="font-bold  text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
      <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700  "/>
      {!isSignInForm && (
      <input type="text" placeholder=" Full Name" className="p-4 my-4 w-full bg-gray-700  "/>
  )}

      <input type="password" placeholder="Password" className="p-4 my-4 w-full  bg-gray-700"/>
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className="py-4 "onClick={toggleSignInForm}>{isSignInForm?" New to Netflix ? Sign Up Now ":"Already registered? Sign In   Now...."} </p>
    </form>
    </div>
    
  )
}

export default Login
 