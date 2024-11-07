import React from 'react';
import "./Header.css";
import img from "../../images/1.jpg";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contant">
        <h2>حَاسبوا أنفسكم قبل أن تُحاسبوا.. وزنوا أعمالكم قبل أن تُوزن لكم.</h2>
        <Link to={"/main"}>
          <button>أبدا التصفح</button>
        </Link>
        </div>
    </div>
  );
}

export default Header;
