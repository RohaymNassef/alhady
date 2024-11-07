import React, { useEffect, useState } from 'react';
import "./Explain.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Expalin = () => {
    const {id} = useParams();
    const [exp , setExp] = useState([])
    const [info , setInfo] = useState("");
    async function explain(){
        const response = await axios.get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${id}`);
        setExp(response.data.result);
    }
    async function getQuran(){
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${id}`);  
          const info = response.data.data;
          setInfo(info)
        }
    useEffect(()=>{
        explain();
        getQuran();
    },[id])
  return (
    <>
     <div className='start'>
        <h3>عدد الايات :{info.numberOfAyahs}</h3>
        <h3>{info.name}</h3>
        <h3>رقم السوره :{info.number}</h3>
        </div>
    <div className='explain'>
        {exp.map((expl) =>{
            return(
                <>
                <div className="expl">
                    <h2>{`(${expl.aya})${expl.arabic_text}`}</h2>
                    <h3>{`${expl.translation}`}</h3>
                </div>
                </>
            )
        })}
    </div>
    </>
  );
}

export default Expalin;
