import React from "react";
import "../styles/index.css";
import { Link } from 'gatsby';


export default function IndexPage() {
  return (
    <main className="landing">
      <div className="landing-content">
        {/* <h1>NEW BRAUNFEL'S FAVORITE</h1> */}
        <h1>New Braunfel's Favorite</h1>
        {/* <h1>FRESH BREAKFAST TACOS</h1> */}
        <h1>Fresh Breakfast Tacos</h1>
      </div>
      <Link to="/menu" className="landing-button">
        View Menu
      </Link>
    </main>
  )
}
