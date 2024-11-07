import React, { useEffect, useState } from 'react';
import "./Hades.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Swal from 'sweetalert2'
import { CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
const Hades = () => {
    const [data , setData] = useState([]);
    let [page , setPage] = useState(1)
    let [pa , setpa] = useState()
    const {id} = useParams();
    const [loading, setLoding] = useState(true);
    async function getHades(current){
        const response = await axios.get(`https://hadis-api-id.vercel.app/hadith/${id}?page=${current}`);
        setData(response.data.items);
        setpa(response.data.pagination.totalPages)
     }
     useEffect(()=>{
        getHades(page);
     },[page])



     setTimeout(()=>{
      setLoding(false)
    },900)

    function truee(){
      setLoding(true)
    }

     const handleNextPage = () => {setPage(page = page + 1 );
      truee();
     }
    const handlePrevPage = () => {setPage(prev => (prev > 1 ? prev - 1 : 1));
      truee()
    }
  return (
      <>
      {loading ? 
      <ScaleLoader className='spiner'
      color={"#36d7b7"}
      loading={loading}
      // cssOverride={override}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
      :
      <div className='hadess'>
      <h2>الاحاديث الشريفه</h2>
        {data.map((hades)=>{
            return(      
                    <>
                    <div className="hade">
                    <h3>{hades.arab}</h3>
                    </div>   
                    </>
            )
        })}
        <div className="but">
          <button onClick={handlePrevPage} disabled={page === 1 }>الصفحه السابقه</button>
          <h2>صفحه {page}من {pa}</h2>
          <button onClick={handleNextPage}>الصفحه التاليه</button>
        </div>
    </div>
      }
      </>
  );
}

export default Hades;