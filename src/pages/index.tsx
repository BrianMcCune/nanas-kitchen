import React from "react";
import "../styles/index.css";
import { Link } from 'gatsby';
import SEO from "../components/seo";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function IndexPage() {

    useGSAP(() => {
        gsap.fromTo(".landing-content h1", {
            y: 70,
            opacity: 0,
        }, 
        {
            delay: 0.2,
            duration: 0.5,
            y: 0,
            opacity: 1,
        });
    });

  return (
    <main className="landing">
      <SEO
        title="Home | Nana's Kitchen – New Braunfels Breakfast Tacos"
        description="Wake up to Nana's Kitchen – New Braunfels’ favorite food truck for hot, handmade breakfast tacos."
        pathname="/"
        image="../images/nanas-icon.png"
      />
      <div className="landing-content">
        <div className="landing-header">
          <h1 className="header-one">New Braunfels' Favorite</h1>
        </div>
        <div className="landing-header">
          <h1 className="header-two">Fresh Breakfast Tacos</h1>
        </div>
      </div>
      <Link to="/menu" className="landing-button">
        View Menu
      </Link>
    </main>
  )
}
