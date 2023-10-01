import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import Bird from "../assets/bird.png";
const Nuri = () => {
  const [birdsPositions, setBirdsPositions] = useState([
    {
      lat: -6.784437483063482,
      lng: 106.94454920469636,
      title: "Nuri Bird",
    },
  ]);

  const customIcon = new Icon({
    iconUrl: Bird,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  useEffect(() => {
    // Function to generate a random number between min and max
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Function to update bird positions randomly
    function updateBirdsPositions() {
      const newBirdsPositions = birdsPositions.map((bird) => ({
        lat: bird.lat + getRandom(-0.003, 0.003),
        lng: bird.lng + getRandom(-0.003, 0.003),
        title: bird.title,
      }));

      setBirdsPositions(newBirdsPositions);
    }

    const intervalId = setInterval(updateBirdsPositions, 2000);

    return () => clearInterval(intervalId);
  }, [birdsPositions]);

  return (
    <main className="min-h-screen flex flex-col justify-between gap-5">
      <div>
        <Navbar />
        <Map MapCenter={{ lat: -6.784437483063482, lng: 106.94454920469636 }}>
          {birdsPositions.map((Bird, index) => (
            <Marker
              key={index}
              position={[Bird.lat, Bird.lng]}
              title={Bird.title}
              icon={customIcon}
            >
              <Popup>
                <h1 className="text-center text-lg font-semibold">
                  {Bird.title}
                </h1>
                {Bird.lat} <br />
                {Bird.lng}
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
      <section className="text-center border border-black shadow-lg mx-auto p-6 rounded-md">
        <h1 className="text-2xl font-bold">Tracking Anothers Birds :</h1>
        <div className="flex flex-col sm:flex-row gap-5 justify-center m-5">
          <button className="text-lg px-6 py-2 bg-gray-950 text-white rounded-md hover:bg-gray-600 transition-all">
            <Link to={"/"}>Eagle</Link>
          </button>
          <button className="text-lg px-6 py-2 bg-gray-950 text-white rounded-md hover:bg-gray-600 transition-all">
            <Link to={"/nuri"}>Nuri Bird</Link>
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Nuri;
