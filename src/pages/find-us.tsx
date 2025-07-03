import React from 'react';
import "../styles/find-us.css";

const FindUs = () => {
  return (
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
  );
};

export default FindUs;
