import React, { useEffect, useState } from 'react';
import "./Ahades.css";
import img1 from "../../images/2.jpg";
import img3 from "../../images/4.jpg";
import img4 from "../../images/5.jpg";
import img5 from "../../images/6.jpg";
import img6 from "../../images/7.jpg";
import img7 from "../../images/8.jpg";
import img8 from "../../images/9.jpg";
import img9 from "../../images/12.png";
import img10 from "../../images/10.jpeg";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Ahades = () => {

    
    const [data , setData] = useState([]);
    async function getHades(){
        const response = await axios.get(`https://hadis-api-id.vercel.app/hadith`);
        setData(response.data)
     }
     useEffect(()=>{
        getHades();
     },[])



  return (
    <div className="ahadess">
        <h1>اختر القسم الذى تريده</h1>
        <div className='ahades'>
            <div className="ahad">
               <Link to={`/singlehades/bukhari`}> <img src={img1} alt="" /></Link>
                <h2>البخارى</h2>
            </div>
            <div className="ahad">
                <Link to={`/singlehades/ahmad`}><img src={img3} alt="" /></Link>
                <h2>الامام احمد</h2>
            </div>
            <div className="ahad">
               <Link to={`/singlehades/muslim`}> <img src={img4} alt="" /></Link>
                <h2>مسلم</h2>
            </div>
            <div className="ahad">
            <Link to={`/singlehades/tirmidzi`}> <img src={img5} alt="" /></Link>
                <h2>الترميزى</h2>
            </div>
            <div className="ahad">
            <Link to={`/singlehades/abu-dawud`}> <img src={img6} alt="" /></Link>
                <h2>ابو داود</h2>
            </div>
            <div className="ahad">
            <Link to={`/singlehades/ibnu-majah`}> <img src={img7} alt="" /></Link>
                <h2>ابن ماجه</h2>
            </div>
            <div className="ahad">
            <Link to={`/singlehades/malik`}> <img src={img8} alt="" /></Link>
                <h2>الامام مالك</h2>
            </div>
            <div className="ahad">
            <Link to={`/singlehades/darimi`}> <img src={img9} alt="" /></Link>
                <h2>الدارمى</h2>
            </div>
            <div className="ahad">
            <Link to={`/singlehades/nasai`}> <img src={img10} alt="" /></Link>
                <h2>النسائى</h2>
            </div>
        </div>
    </div>
  );
}

export default Ahades;
