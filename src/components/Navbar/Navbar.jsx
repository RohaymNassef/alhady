import React, { useState } from 'react';
import "./Navbar.css";
import { FaMoon } from "react-icons/fa6"
import { FaSun } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
const Navbar = ({isDark , dark}) => {


  function click(){
    document.querySelector(".ul").classList.toggle("open")
  }
  function close(){
    document.querySelector(".ul").classList.remove("open")
  }


  return (
    <>
   <div className="nav">
   <div className="navbar">
      <div className="menu-nav">
        <FiMenu onClick={click}/>
      </div>
        <div className="left-nav">
            
            <ul className='ul'>
                <div>
                  {dark ? <li><FaSun className='nav-icon sun' onClick={()=>{isDark() , close()}}/></li>
                    :<li><FaMoon className='nav-icon' onClick={()=>{isDark() , close()}}/></li>
                  }
                
                
                </div>
                <li><Link to={"/ahades"} onClick={close}>أحاديث</Link></li>
                <li><Link to={"/quran"} onClick={close}>القرآن الكريم</Link></li>
                <li><Link to={"/time"} onClick={close}>أوقات الصلاه</Link></li>
                <li><Link to={"/main"} onClick={close}>الصفحه الرئسيه</Link></li>
            </ul>
        </div>
        <div className="right-nav">
            <Link to={"/"} className='gana'>
              <h2>الفوز بالجنه</h2>
            </Link>
        </div>
    </div>
   </div>
    
    </>
  );
}

export default Navbar;
