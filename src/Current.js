import React from "react";
import "./App.css";

export default function Current() {
  return (
    <div className="border">
      <div className="temperature">
        <h2> 10°C </h2>
      </div>
      <div className="Descriptions">
        <h3>Wind and rain</h3>
        <p>Humidity: 79%</p>
        <p>Wind: 31 km/h</p>
      </div>
    </div>
  );
}