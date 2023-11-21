import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Accra</h1>
      <ul>
        <li>Tuesday 10:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          27°C
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 4%</li>
            <li>Humidity: 84%</li>
            <li>Wind: 18km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
