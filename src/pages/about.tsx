import React from 'react';
import { Link } from 'gatsby';
import nanaImg from '../images/nana.avif';
import "../styles/about.css";

const About = () => {
    return ( 
        <div className="about-section">
            <div className='image-container'>
                <img src={nanaImg} alt="owner" className="owner" />
            </div>
            <section className="about-content">
                <h1><span className='about-header-one'>Freshness in every order,</span><span className='about-header-two'> family in every meal</span></h1>
                <p>
                    Family owned since 2021, we’re proud to be born and raised right here in New Braunfels. 
                    We specialize in delicious breakfast tacos made fresh every morning, alongside seasonal 
                    homemade tamales crafted with care and tradition. Our Nana's Taco is a fan favorite, 
                    slow-cooked to perfection and full of flavor. Whether you're grabbing a quick bite or 
                    planning a special event, we offer catering to bring the taste of our kitchen right to you. 
                    Welcome to our table — where every bite feels like home.
                </p>
                <Link to="/find-us" className="about-us-button">
                    Contact Us
                </Link>
            </section>
        </div>
     );
}
 
export default About;