import React from 'react'
import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        
        <div className="logo-container">
          <img src={logoImg} alt="Proffy logo"/>
          <h2>Your online learning platform</h2>
        </div>
        
        <img src={landingImg} alt="Learning Platform" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study"/>
            Study
          </Link>

          <Link to="/teach" className="teach">
            <img src={giveClassesIcon} alt="Teach"/>
            Teach
          </Link>
        </div>

        <span className="total-connections">
          200 connections already made. 
          <img src={purpleHeartIcon} alt="Purple Hearth"/>
        </span>
      </div>
    </div>
  );
}

export default Landing