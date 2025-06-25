import React from "react";
import icon from "../images/nanas-icon.png"
import "../styles/navbar.css";


const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li className="logo-container">
                    <a href="/"><img src={icon} alt="Logo" className="logo" /></a>
                    <h1>Nana's Kitchen</h1>
                </li>
                <li><a href="/">Menu</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/menu">Find Us</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;