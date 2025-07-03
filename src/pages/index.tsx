import React from "react";
import "../styles/index.css";
import { Link } from 'gatsby';
import SEO from "../components/seo";

export default function IndexPage() {
  return (
    <main className="landing">
      <SEO
        title="Home | Nana's Kitchen – New Braunfels Breakfast Tacos"
        description="Wake up to Nana's Kitchen – New Braunfels’ favorite food truck for hot, handmade breakfast tacos."
        pathname="/"
        image="../images/nanas-icon.png"
      />
      <div className="landing-content">
        {/* <h1>NEW BRAUNFEL'S FAVORITE</h1> */}
        <h1>New Braunfels' Favorite</h1>
        {/* <h1>FRESH BREAKFAST TACOS</h1> */}
        <h1>Fresh Breakfast Tacos</h1>
      </div>
      <Link to="/menu" className="landing-button">
        View Menu
      </Link>
    </main>
  )
}
