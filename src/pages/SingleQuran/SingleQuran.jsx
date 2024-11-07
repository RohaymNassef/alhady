import React, { useEffect, useState } from 'react';
import "./SingleQuran.css";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const SingleQuran = () => {
   
   const {number} = useParams();
    const [data,setData] = useState([]);
    const [info , setInfo] = useState("");
    async function getQuran(){
    const response = await axios.get(`https://api.alquran.cloud/v1/surah/${number}`);  
    setData(response.data.data.ayahs);
      const info = response.data.data;
      setInfo(info)
    }
    const [numm, setnumm] = useState("1");

    let num = [
        "1",
        "7",
        "9",
        "12",
        "14"
    ]
    function handelnumChang(event){
        const cityObject = num.find((nu)=>{
          return nu == event.target.value;
        })
        setnumm(cityObject)
    }

    const [audio, setAudio] = useState([]);
    async function getAudio(){
        const response = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/${numm}/${number}`);
        setAudio(response.data.audio_file.audio_url);
    }
    


    


    useEffect(()=>{
        getQuran();
        getAudio();
      },[numm])

  return (
    <div className="ayaats">
        <div className='ayat'>
        <div className='start'>
        <h3>عدد الايات :{info.numberOfAyahs}</h3>
        <h3>{info.name}</h3>
        <h3>رقم السوره :{info.number}</h3>
        </div>
        <div className="audios">
                <div className="select">
                <select onChange={handelnumChang}>
                    <option value="1">عبدالباسط مجود</option>
                    <option value="7">مشاري راشد</option>
                    <option value="9">المنشاوي مرتل</option>
                    <option value="12">المصحف المعلم</option>
                    <option value="14">احمد العجمي</option>

                </select>
                </div>
                <div className="ex">
                    <Link to={`/explain/${number}`}><button>التفسير</button></Link>
                </div>
                <div className="audioo">
                <audio src={audio} controls/>
                </div>
        </div>
        <div className="ayaat">
        {data.map((aya) =>{
            return(
                <>
                <div className="aya">
                    <h2>{`(${aya.numberInSurah})${aya.text}`}</h2>
                </div>
                </>
            )
        })}
        </div>
    </div>
    </div>
  );
}

export default SingleQuran;
