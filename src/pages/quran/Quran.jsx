import React, { useEffect, useState } from 'react';
import "./Quran.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Quran = ({addAyat}) => {
  const [data,setData] = useState([]);


  async function getQuran(){
  const response = await axios.get(`https://api.alquran.cloud/v1/surah`);  
  setData(response.data.data);
  }
  useEffect(()=>{
    getQuran();
  },[])

  return (
    <div className="qurans">
      <div className='quran'>
      <h2 className='hh'>القرآن الكريم</h2>
      <div className="sour">
        {data.map((sora)=>{
          return(
            <div className="sora">
                <h2>{sora.number}</h2>
              <Link to={`/singlequran/${sora.number}`} className='quran-link'>
              <h2 className='quran-link'>{sora.name}</h2>
              </Link>
              <h2>{sora.englishName}</h2>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  );
}

export default Quran;
