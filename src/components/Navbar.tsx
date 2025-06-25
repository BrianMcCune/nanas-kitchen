import React from "react";
import icon from "../images/nanas-icon.png";
import "../styles/navbar.css";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="logo-container">
          <Link to="/">
            <img src={icon} alt="Logo" className="logo" />
          </Link>
          <h1>Nana's Kitchen</h1>
        </li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/find-us">Find Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
