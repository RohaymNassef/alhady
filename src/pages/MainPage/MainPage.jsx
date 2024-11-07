import React from 'react';
import "./MainPage.css";
import { IoDocumentText } from "react-icons/io5";
import { FaMosque , FaBookQuran } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="mainss">
      <div className='mains'>
      <div className='main'>
        <Link to={"/ahades"} className='main-link'>
        <h2>الاحاديث</h2>
        </Link>
        <IoDocumentText className='main-icon'/>
      </div>
      <div className='main'>
        <Link to={"/quran"} className='main-link' >
        <h2>القرآن الكريم</h2>
        </Link>
        <FaBookQuran className='main-icon'/>
      </div>
      <div className='main'>
        <Link to={"/time"} className='main-link'>
        <h2>مواقيت الصلاه</h2>
        </Link>
        <FaMosque className='main-icon'/>
      </div>
    </div>
    </div>
  );
}

export default MainPage;
