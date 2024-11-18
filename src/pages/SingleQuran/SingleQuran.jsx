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
        "1","2","3","4","5","6","7","8","9","10","11","12","13","14","17","18","19","20","21","22","23","24","31","32","35","40","43","44","159","53","54","85","88","91","97","104","113","126","129","170",
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
                    <option value="2">عبدالباسط مرتل</option>
                    <option value="54">عبدالباسط ورش</option>
                    <option value="9">المنشاوي مرتل</option>
                    <option value="8">المنشاوي مجود</option>
                    <option value="6">الحصري</option>
                    <option value="88">مصطفي اسماعيل</option>
                    <option value="126">احمد نعينع</option>
                    <option value="91">الطبلاوي</option>
                    <option value="129">محمود البنا</option>
                    <option value="97">ياسر الدوسري</option>
                    <option value="104">ناصر القطامي</option>
                    <option value="170">خالد الجليل</option>
                    <option value="7">مشاري العفاسي</option>
                    <option value="159">ماهر المعقلي</option>
                    <option value="22">محمد ايوب</option>
                    <option value="24">علي جابر</option>
                    <option value="19">احمد العجمي</option>
                    <option value="3">عبدالرحمن</option>
                    <option value="4">ابو بكر شاتري</option>
                    <option value="5">هاني الرفاعي</option>
                    <option value="10">سعود الشريم</option>
                    <option value="11">عبدالمحسن القاسم</option>
                    <option value="13">سعيد الغامدي</option>
                    <option value="14">فارس عباد</option>
                    <option value="17">سهل ياسين</option>
                    <option value="18">صلاح بو خاطر</option>
                    <option value="20">السديسي</option>
                    <option value="21">عبدالعزيز الاحمد</option>
                    <option value="23">توفيق الصايغ</option>
                    <option value="32">محمد جبريل</option>
                    <option value="35">صالح الطالب</option>
                    <option value="40">عبدالودود حنيف</option>
                    <option value="43">صلاح بدير</option>
                    <option value="44">عزيز عليلي</option>
                    <option value="53">الهبدان</option>
                    <option value="65">حاتم فريد</option>
                    <option value="113">احمد الحذيفي</option>
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
