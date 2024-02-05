import React from 'react'
import '../index.css';
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";




const Header = () => {

  const navigate = useNavigate();
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");

      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex flex-col md:flex-row justify-between'> 


<img className=' w-44 bg-origin-padding'  
src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
" alt='logo'/>


<div className='flex p-2'> 
<img className='w-12 h-12' src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="" />
<button onClick={handleSignOut} className="font-bold text-white "> (Sign Out)</button>
</div>



</div>
  )
}

export default Header