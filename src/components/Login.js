import React, { useState,useRef  } from 'react';
import Header from './Header';
import '../index.css';
import { checkValidData } from '../utils/validate';

import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate=useNavigate();

   
    // const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleButtonClick=()=>{

        // checkValidData(email, password);
        console.log(email.current.value);
        console.log(password.current.value);


        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
         if (message) return;


         if (!isSignInForm) {
            // Sign Up Logic
           
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                            .then((userCredential) => {
                                // Signed up 
                                const user = userCredential.user;
                                console.log(user)
                                navigate("/browse")
                                // ...
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                setErrorMessage(errorCode + "-" + errorMessage);
                                // ..
                            });
                }           

            else{
                
                //signIn logic
                signInWithEmailAndPassword(auth, email.current.value,
                    password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });


            }


      };




    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
      };

     


  return (
    <div>
      <Header />


        <div className=' absolute'>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Netflix"
      />
      </div>



      <form onSubmit={(e) => e.preventDefault()}
       className="w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input

        //   ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
          )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}

            </button>

        <p className=' p-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>



      </form>

      
    </div>
  );
};

export default Login;

