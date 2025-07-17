import React, { useEffect, useState, useRef } from "react";
import "../styles/index.css";
import menudo from '../images/menudo.jpg';
import { Link } from 'gatsby';
import SEO from "../components/seo";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function IndexPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [specialItem, setSpecialItem] = useState(false);

  // Helper: check if today is special day
  function isSpecialDay(): boolean {
    const day = new Date().getDay();
    return day === 0 || day === 5 || day === 6;
  }

  // Animate popup in
  function animateSpecialItemIn() {
    if (ref.current) {
      gsap.from(ref.current, {
        x: 500,
        duration: 3,
        delay: 1,
        ease: "power3.out",
      });
    }
  }

  // Animate popup out and then hide it
  function animateSpecialItemOut() {
    if (ref.current) {
      gsap.to(ref.current, {
        x: 500,
        duration: 1.5,
        ease: "power3.out",
        onComplete: () => setSpecialItem(false),
      });
    }
  }

  function handleClick() {
    animateSpecialItemOut();
  }

  useEffect(() => {
    if (isSpecialDay()) {
      setSpecialItem(true);
    }
  }, []);

  useEffect(() => {
    if (specialItem) {
      animateSpecialItemIn();
    }
  }, [specialItem]);

  useGSAP(() => {
    gsap.fromTo(
      ".header-one",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.1, duration: 0.5 }
    );
    gsap.fromTo(
      ".header-two",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 0.5 }
    );
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

      {specialItem && (
        <div ref={ref} className="special-item">
          <button onClick={handleClick} className="close">
            X
          </button>
          <h2>🍲 Weekend Special</h2>
          <p>
            Try our famous, homemade <strong>Menudo</strong> – available only on
            weekends!
          </p>
          <p>Come early before it’s gone!</p>
          <div className="menudo-image-container">
            <img
              src={menudo}
              alt="A ladle full of homemade menudo in a pot"
              className="menudo-image"
            />
          </div>
        </div>
      )}
    </main>
  );
}
