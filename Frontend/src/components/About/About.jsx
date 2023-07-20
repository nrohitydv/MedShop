import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
              ,<img src={aboutCardImg} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:oredr-2">
          <h2 className="heading">Proud to be one of the nation best</h2>
          <p className="text__para">
            For 30 years in row Ministry has recognized us as one of the best
            publics hospital in the Nation.
          </p>
          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
