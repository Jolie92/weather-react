import React from "react";
import "./App.css";

import "./App";

export default function Search() {
  return (
    <div className="Search">
      <form id="CityInput">
        <input
          type="search"
          placeholder="Type a City..."
          autofocus="on"
          autocomplete="off"
        />

        <input
          className="City btn btn-primary w-100"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
}