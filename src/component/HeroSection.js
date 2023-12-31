import React from "react";
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>
      <section>
        <div className="hero-content">
          <h1>YOUR FEET DESERV THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            YOUR SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className="shopping">
            <p>Available on</p>
             <div className="brand-icons">
              <img src="../Images/flipkart.png" alt="" />
              <img src="../Images/amazon.png" alt="" />
             </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="../Images/shoe_image.png" alt="" />
        </div>
      </section> 
    </div>
  );
};

export default HeroSection;
