import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Map(props) {
  const {
    children,
    MapCenter = { lat: -6.671599948314201, lng: 106.57703975718611 },
  } = props;

  return (
    <main>
      <div
        className="h-[500px] mb-5 border-b-2 border-black shadow-lg"
        id="home"
      >
        <MapContainer center={MapCenter} zoom={13}>
          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=3br2UB6uKpvaxdJt7ODS"
          />
          {children}
        </MapContainer>
      </div>
    </main>
  );
}

export default Map;
