import React, { useEffect, useState } from 'react';
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TimeAzan from './pages/Azan/TimeAzan';
import MainPage from './pages/MainPage/MainPage';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Quran from './pages/quran/Quran';
import SingleQuran from './pages/SingleQuran/SingleQuran';
import Ahades from './pages/Ahades/Ahades';
import Hades from './pages/Hades/Hades';

import { CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Expalin from './pages/Expalin/Expalin';



const App = () => {

  const [ayat , setAyat] = useState([]);
  const [dark , setDark] = useState(false);
  const [loading, setLoding] = useState(true);
  function addAyat(ayaa){
    setAyat(ayaa)
  }


  function isDark(){
    setDark(!dark)   
  }


  useEffect(()=>{
    setLoding(loading);
  },[])

  setTimeout(()=>{
    setLoding(false);
  },2000)

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
      :<div className = {dark ? "app-dark" : "app"} >
      <BrowserRouter>
      <Navbar isDark = {isDark} dark = {dark} />
      <Routes>
      <Route path='/' element = {<Header/>}/>
      <Route path='/main' element = {<MainPage/>} />
      <Route path='/time' element = {<TimeAzan/>} />
      <Route path='/ahades' element = {<Ahades/>} />
     
      <Route path='/quran'  element = {<Quran addAyat = {addAyat}/>} />
      <Route path='/singlequran/:number' element = {<SingleQuran ayat = {ayat}/>} />
      <Route path='/singlehades/:id' element = {<Hades/>} />
      <Route path='/explain/:id' element = {<Expalin/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
    }
    </>
  );
}

export default App;
