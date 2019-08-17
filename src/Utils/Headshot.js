import React from "react";
import headshot from "../img/headshot-np.jpg"; 

export default function Headshot() {
  return (
    <div className="headshot-container">
      <img
        src={headshot}
        id="about-professional-image"
        alt="headshot for Nicholas S. Park, MBA, certified financial services professional"
      />
    </div>
    
  );
}
