import React from 'react';
import "./home.css";
import logo from '../Image/logo.jpg';
import card1 from '../Image/card1.jpg';
import card2 from '../Image/card2.jpg';
import card3 from '../Image/card3.jpg';
import card4 from '../Image/card4.jpg';
import hamburger from "../Image/hamburger.png";

function Home() {
  return (
    <>
    <div class="navbar">
      <ul class="maintop">
        <ul>
          <li class="logo">
            <img src={logo}></img>
          </li>
        </ul>
        <ul class="right">
          <li class="home"><a>HOME</a>
          <p>Welcome to our studio</p>
          </li>
          <li class="about"><a>ABOUT US</a>
          <p>Welcome to our studio</p></li>
          <li class="contact"><a>CONTACT US</a>
          <p>Welcome to our studio</p></li>
          <li class="pages"><a>PAGES</a>
          <p>Welcome to our studio</p></li>
          <li class="services"> <a>SERVIECS</a>
          <p>Welcome to our studio</p></li>
        </ul>
        {/* <img src={hamburger} ></img> */}
        </ul>
 </div>

    <div className="content">
    <h3> VISIT THE BEST STUDIO </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab unde quo quos optio tempore cum molestiae soluta molestias quidem, ullam quibusdam aperiam, praesentium a, voluptatibus iure animi minima hic.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="card_container">
       <div className="card">
        <div className="front">
            <img src={card1}></img>
        </div>
        <div className="back">
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
        </div>
       </div>
       <div className="card">
        <div className="front">
            <img src={card2}></img>
        </div>
        <div className="back">
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
        </div>
       </div>
       <div className="card">
        <div className="front">
            <img src={card3}></img>
        </div>
        <div className="back">
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
        </div>
       </div>
       <div className="card">
        <div className="front">
            <img src={card4}></img>
        </div>
        <div className="back">
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
        </div>
       </div>    
    </div>
    <div className="footer">
        
        </div>    
 </>
  )
}

export default Home