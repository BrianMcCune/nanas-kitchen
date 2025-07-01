import React from 'react';
import { Link } from 'gatsby';

const About = () => {
    return ( 
        <div className="about-background">
            <h1>Freshness in every order, family in every meal</h1>
            <p>
                Family owned since 2021, we’re proud to be born and raised right here in New Braunfels. 
                We specialize in delicious breakfast tacos made fresh every morning, alongside seasonal 
                homemade tamales crafted with care and tradition. Our slow-smoked brisket is a fan favorite, 
                slow-cooked to perfection and full of flavor. Whether you're grabbing a quick bite or 
                planning a special event, we offer catering to bring the taste of our kitchen right to you. 
                Welcome to our table — where every bite feels like home.
            </p>

            <Link to="/find-us" className="about-us-button">
                Contact Us
            </Link>
        </div>
     );
}
 
export default About;