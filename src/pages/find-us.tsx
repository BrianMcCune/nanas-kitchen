import React from 'react';
import "../styles/find-us.css";
import { IoLogoFacebook } from "react-icons/io";
import { FaYelp } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className='find-us-section'>
        <div className="map-container">
        <iframe
            className='map-iframe'
            title="Nana's Kitchen Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1060.5001660831485!2d-98.13118190379129!3d29.704251336704992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cbdb54f61f279%3A0xdc0bf5d3651e0279!2sNana%27s%20Kitchen!5e0!3m2!1sen!2sus!4v1751533880030!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <section className='find-us-content'>
            <h1>Find Us</h1>
            <div className='find-us-details'>
                <div className='find-us-info'>
                    <h2>Hours & Location</h2>
                    <p>111 Landa St, New Braunfels, TX 78130</p>
                    <p>Friday: 7 AM - NOON</p>
                    <p>Saturday: 8 AM - NOON</p>
                    <p>Sunday: 8 AM - NOON</p>
                </div>
                <div className='find-us-contact'>
                    <h2>Contact Us</h2>
                    <p>Phone: <a href="tel:+18308323727">+1 (830) 832-3727</a></p>
                    
                    <div className='social-media'>
                        <a href="https://www.facebook.com/p/Nanas-Kitchen-NB-100066278872860/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <IoLogoFacebook size={32} color="#1877F2" />
                        </a>
                        <a href="https://www.yelp.com/biz/nana-s-kitchen-n-b-new-braunfels" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                          <FaYelp size={32} color="#D32323" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default FindUs;
