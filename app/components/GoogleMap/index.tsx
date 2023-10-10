import React, { useState, useCallback } from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import MapMarkers from "./MapMarker";
import MapCanvas from "./MapCanvas";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const mapOptions = {
  zoom: 8,
  disableDefaultUI: true,
  zoomControl: true,
  zoomControlOptions: {
    position: 3, // Right top
  },
};

export default function GMap() {
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);

  const mapRef = useCallback(
    (node: React.SetStateAction<HTMLDivElement | null>) => {
      node != null && setMapContainer(node);
    },
    []
  );
  console.log("map loaded");
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        top: "77px",
        width: "43%",
        height: "100%",
        overflow: "hidden",
        [theme.breakpoints.down("md")]: {
          // Width for medium-sized screens and larger
          position: "relative",
          width: "100%",
          height: "500px",
          top: "49px",
        },
      }}
    >
      <GoogleMapsProvider
        googleMapsAPIKey="AIzaSyDpxXrnHLn0Gu9qkiMvQVdy6Go7gZk8zEc"
        mapContainer={mapContainer}
        mapOptions={mapOptions}
      >
        <React.StrictMode>
          <div id="container">
            <MapCanvas ref={mapRef} />
            <MapMarkers />
          </div>
        </React.StrictMode>
      </GoogleMapsProvider>
    </Box>
  );
}
