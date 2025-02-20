"use client";

import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

import React, { useState } from "react";

const MapComponent = () => {
  const [open, setOpen] = useState(false);

  const position = { lat: 30.420411, lng: -97.835903 };

  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;

  if (!apiKey) {
    return <p>Something happend when trying to access Google Maps!!!</p>;
  }
  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "30vh", width: "100%" }}>
        <Map zoom={12} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin></Pin>
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>
                {" "}
                Concordia University Texas, 11400 Concordia University Dr,
                Austin, TX 78726
              </p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapComponent;
