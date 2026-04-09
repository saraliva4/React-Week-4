import React from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search m-4">
      <div className="start-50 translate-middle search-bar">
        <div>
          <form id="search-form">
            <span>
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </span>
            <input
              className=" search-input"
              type="text"
              id="search-input"
              placeholder="Type a city..."
            />
            <input type="submit" value="Search" className="search-button" />
            <button
              className="current-location-button"
              id="current-location-button"
            >
              Current location
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
