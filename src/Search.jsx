import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search m-4">
      <div className="start-50 translate-middle search-bar">
        <div>
          <form id="search-form">
            <label htmlFor="search-input">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </label>

            <input
              id="search-input"
              className=" search-input ms-1"
              type="text"
              placeholder="Type a city..."
            />
            <input
              type="submit"
              value="Search"
              className="search-button ms-1"
            />
            <button
              className="current-location-button ms-1"
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
