import React from 'react';
import Img from '../../assets/TechWeaver-logo1.png';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
     <img src={Img}/>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
