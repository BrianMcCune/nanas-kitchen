import React from "react";
import icon from "../images/nanas-icon.png";
import "../styles/navbar.css";
import { Link } from "gatsby";
import gsap from "gsap";

const MobileNav = () => {

  function handleMobileNav() {
    gsap.to('.hamburger', {
      autoAlpha: 0,
      duration: 0.2,
      scale: 0
    })
    gsap.fromTo('.mobile-links',{
      display: 'flex',
      opacity: 0,
      autoAlpha: 1
    }, {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
      backgroundColor: 'rgb(255, 244, 222)'
    })
  }

  function handleMobileNavRemove() {
    gsap.to('.hamburger', {
      autoAlpha: 1,
      duration: 0.2,
      scale: 1
    })

    gsap.to('.mobile-links', {
      autoAlpha: 0,
      duration: 0.2
    })
  }


  return (
    <nav className="mobile-nav">
        <div className="mobile-logo-container">
            <h1>Nana's Kitchen</h1>
            <img src={icon} alt="Logo" className="mobile-logo" />
        </div>
        <div className="hamburger" onClick={() => handleMobileNav()}>
        <div className="lineOne"></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <ul className="mobile-links">
            <li><Link to="/" onClick={() => handleMobileNavRemove()}>Home</Link></li>
            <li><Link to="/menu" onClick={() => handleMobileNavRemove()}>Menu</Link></li>
            <li><Link to="/about" onClick={() => handleMobileNavRemove()}>About</Link></li>
            <li><Link to="/find-us" onClick={() => handleMobileNavRemove()}>Find Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;