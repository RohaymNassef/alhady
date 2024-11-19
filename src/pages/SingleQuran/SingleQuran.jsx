import React, { useEffect, useState } from "react";
import "./SingleQuran.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleQuran = () => {
  const { number } = useParams(); // رقم السورة من الـ URL
  const [data, setData] = useState([]); // بيانات الآيات
  const [info, setInfo] = useState(""); // معلومات السورة
  const [audio, setAudio] = useState(""); // رابط الصوت
  const [qur, setQur] = useState([]); // قائمة السور
  const [numm, setNumm] = useState("1"); // رقم القارئ
  const navigate = useNavigate();

  // جلب بيانات السورة
  async function getQuran() {
    const response = await axios.get(`https://api.alquran.cloud/v1/surah/${number}`);
    setData(response.data.data.ayahs);
    setInfo(response.data.data);
  }

  // جلب قائمة السور
  async function getSurahList() {
    const response = await axios.get(`https://api.alquran.cloud/v1/surah`);
    setQur(response.data.data);
  }

  // جلب الصوت بناءً على القارئ
  async function getAudio() {
    const response = await axios.get(
      `https://api.quran.com/api/v4/chapter_recitations/${numm}/${number}`
    );
    setAudio(response.data.audio_file.audio_url);
  }

  // التنقل بين السور
  const handleNavigation = (direction) => {
    const newNumber = parseInt(number) + direction;
    if (newNumber >= 1 && newNumber <= 114) {
      navigate(`/singlequran/${newNumber}`);
    }
  };

  // تحديث البيانات عند تغيير رقم السورة أو القارئ
  useEffect(() => {
    getQuran();
    getAudio();
  }, [number, numm]);

  // جلب قائمة السور مرة واحدة عند تحميل الصفحة
  useEffect(() => {
    getSurahList();
  }, []);

  return (
    <div className="ayaats">
      <div className="ayat">
        <div className="start">
          <h3>عدد الآيات: {info.numberOfAyahs}</h3>
          <h3>اسم السورة: {info.name}</h3>
          <h3>رقم السورة: {info.number}</h3>
        </div>

        <div className="audios">
          <div className="select">
            <select onChange={(e) => setNumm(e.target.value)}>
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
            <Link to={`/explain/${number}`}>
              <button>التفسير</button>
            </Link>
          </div>

          <div className="audioo">
            <audio src={audio} controls />
          </div>
        </div>

        <div className="navigation">
          <button onClick={() => handleNavigation(-1)} disabled={number <= 1}>
            السورة السابقة
          </button>
          <select
            onChange={(e) => navigate(`/singlequran/${e.target.value}`)}
            value={number}
          >
            <option value="" hidden>
              اختر السورة
            </option>
            {qur.map((item) => (
              <option key={item.number} value={item.number}>
                {item.name}
              </option>
            ))}
          </select>
          <button onClick={() => handleNavigation(1)} disabled={number >= 114}>
            السورة التالية
          </button>
        </div>

        <div className="ayaat">
          {data.map((aya) => (
            <div key={aya.numberInSurah} className="aya">
              <h2>{aya.text}</h2>
              <h2 className="aya-num">{`(${aya.numberInSurah})`}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleQuran; 