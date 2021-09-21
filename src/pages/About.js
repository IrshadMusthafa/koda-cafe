import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
        
      ></div>
      <div className="aboutBottom">
        <h2> ABOUT US</h2>
        <p>
        Koda Cafe Restaurant have something beyond your expectation, we have very neat and well maintained premises and we offer Indian, Chinese, Arabian and Continental cuisine with good range of beverages. The best thing is, our food quality is more better because we have experienced professionals in our kitchen.

The best way to explain about Koda Cafe is the ambiance and food were so good that it makes u come back again and again..
        </p>
      </div>
    </div>
  );
}

export default About;
