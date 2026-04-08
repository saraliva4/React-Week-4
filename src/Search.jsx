import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <span>
          <i className="fa-solid fa-magnifying-glass search-icon search"></i>
        </span>
        <input
          className="search search-bar"
          type="text"
          id="search-input"
          placeholder="Search"
        />
        <button
          className="search current-location-button"
          id="current-location-button"
        >
          Current location
        </button>
      </form>
    </div>
  );
}
