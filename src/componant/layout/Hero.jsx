import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./hero.css"; // Create a hero.css file for custom styling

import image1 from "../../../public/carusal img/img1.png";
import image2 from "../../../public/carusal img/img2.png";
import image3 from "../../../public/carusal img/img3.png";
import image4 from "../../../public/carusal img/img4.png";
// import image5 from "../../../public/carusal img/img5.jpg";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero">
      <Slider {...settings} className="hero-carousel">
        <div>
          <img src={image1} alt="Slide 1" className="carousel-image" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" className="carousel-image" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" className="carousel-image" />
        </div>
        <div>
          <img src={image4} alt="Slide 4" className="carousel-image" />
        </div>
        {/* <div>
          <img src={image5} alt="Slide 4" className="carousel-image" />
        </div> */}
      </Slider>
      <div className="hero-content">
        <h1>Elevate Your Style</h1>
        <p>Discover the latest trends in fashion</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </section>
  );
}
