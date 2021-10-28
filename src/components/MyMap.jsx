import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "/data/manzanas.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";



class MyMap extends Component {
  state = { color: "#ffff00" };

  colors = ["green", "blue", "yellow", "orange", "grey"];

 

  countryStyle = {
    fillColor: "red",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  

  changeCountryColor = (event) => {
    event.target.setStyle({
      color: "purple",
      fillColor: this.state.color,
      fillOpacity: 1,
    });
  };

  onEachCountry = (country, layer) => {
    const countryName = country.properties.nse;
    console.log(countryName);
    layer.bindPopup('quartier ' + country.properties.nse;

    layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
    // const colorIndex = Math.floor(Math.random() * this.colors.length);
    // layer.options.fillColor = this.colors[colorIndex]; //0

    
  };

 layer.on({
      click: this.changeCountryColor,
    });
  };
  colorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>My Map</h1>
        <MapContainer style={{ height: "80vh" }} zoom={11} center={[25.67, -100.31]}>
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
        <input
          type="color"
          value={this.state.color}
          onChange={this.colorChange}
          
          
        />
      </div>
    );
  }
}

export default MyMap;

