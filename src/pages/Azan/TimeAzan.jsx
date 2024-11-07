import React, { useEffect , useState} from 'react';
import "./TimeAzan.css";
import axios from "axios";
const TimeAzan = () => {

  const [timings , setTimings] = useState("");
  const [day , setDay] = useState("");
  const [history , setHistory] = useState("");
  const [higry , setHigry] = useState("");
  const [city, setCity] = useState("Cairo");
  async function getAzan(){
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`);
    const date = response.data.data.timings;
    const Day = response.data.data.date.hijri.weekday.ar;
    const his = response.data.data.date;
    const hig = response.data.data.date.hijri.date;
    setTimings(date);
    setDay(Day);
    setHistory(his);
    setHigry(hig)
  }
  
  useEffect(()=>{
    getAzan();
    
  },[city])

    let citiiis = [
      "Cairo",
      "Ad Daqahlīyah",
      "Ash Sharqīyah",
      "Al Minūfīyah",
      "Al Iskandarīyah",
      "Shamāl Sīnā'",
      "Janūb Sīnā'",
      "Banī Suwayf",
      "Al Wādī al Jadīd",
      "Dumyāţ",
      "Būr Sa‘īd",
      "Kafr ash Shaykh",
      "Qinā",
      "Al Uqşur	",
      "Aswān",
      "Al Minyā",
      "As Suways",
      "Asyūţ",
      "Maţrūḩ",
      "Sūhāj",
      "Al Qalyūbīyah",
      "	Al Jīzah",
      "Al Ismā'īlīyah",
      "Al Gharbīyah",
      "Al Fayyūm",
      "Al Buḩayrah",
      "Al Baḩr al Aḩmar"
    ];

    function handelCityChang(event){
        const cityObject = citiiis.find((cityy)=>{
          return cityy == event.target.value;
        })
        setCity(cityObject)
    }

  


  return (
    <>
    <div className="azans">
    <div className="azan">
      <h1>أوقات الصلاه</h1>
      <div className="text-containt">
        <div>
          <select onChange={handelCityChang}>
            <option value="Cairo">القاهره</option>
            <option value="Ad Daqahlīyah">المنصوره</option>
            <option value="Ash Sharqīyah">الزقازيق</option>
            <option value="Al Minūfīyah">المنوفيه</option>
            <option value="Al Iskandarīyah">الاسكندريه</option>
            <option value="Shamāl Sīnā'">شمال سيناء</option>
            <option value="Janūb Sīnā'">جنوب سيناء</option>
            <option value="Banī Suwayf">بني سويف</option>
            <option value="Al Wādī al Jadīd">الوادي الجديد</option>
            <option value="Dumyāţ">دمياط</option>
            <option value="Būr Sa‘īd">بورسعيد</option>
            <option value="Kafr ash Shaykh">كفر الشيخ</option>
            <option value="Qinā">قنا</option>
            <option value="Al Uqşur	">الاقصر</option>
            <option value="Aswān">اسوان</option>
            <option value="Al Minyā">المنيا</option>
            <option value="As Suways">السويس</option>
            <option value="Asyūţ">اسيوط</option>
            <option value="Maţrūḩ">مطروح</option>
            <option value="Sūhāj">سوهاج</option>
            <option value="Al Qalyūbīyah">القليوبيه</option>
            <option value="	Al Jīzah">الجيزه</option>
            <option value="Al Ismā'īlīyah">الاسماعليه</option>
            <option value="Al Gharbīyah">الغربيه</option>
            <option value="Al Fayyūm">الفيوم</option>
            <option value="Al Buḩayrah">البحيره</option>
            <option value="Al Baḩr al Aḩmar">البحر الاحمر</option>

          </select>
          <h2>اختر مدينتك</h2>
        </div>
        <h2>{history.readable}</h2>
        <h2>{higry}</h2>
        <h2>اليوم : {day}</h2>
      </div>
      <div className="timeazan">
        <div className="time">
          <h2>{timings.Imsak}</h2>
          <h3>الامساك</h3>
        </div>
        <div className="time">
          <h2>{timings.Fajr}</h2>
          <h3>الفجر</h3>
        </div>
        <div className="time">
          <h2> {timings.Sunrise} </h2>
          <h3>الشروق</h3>
        </div>
        <div className="time">
          <h2> {timings.Dhuhr} </h2>
          <h3>الظهر</h3>
        </div>
        <div className="time">
          <h2> {timings.Asr} </h2>
          <h3>العصر</h3>
        </div>
        <div className="time">
          <h2> {timings.Maghrib} </h2>
          <h3>المغرب</h3>
        </div>
        <div className="time">
          <h2> {timings.Isha} </h2>
          <h3>العشاء</h3>
        </div>
        <div className="time">
          <h2> {timings.Lastthird} </h2>
          <h3>الثلث الاخير</h3>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default TimeAzan;
