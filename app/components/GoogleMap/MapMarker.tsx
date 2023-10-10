/* eslint-disable */
import { type FunctionComponent, useState, useEffect } from "react";
import { useGoogleMap } from "@ubilabs/google-maps-react-hooks";
import { usePropertyContext } from "@/app/context/PropertyContext";

/**
 * Component to render all map markers
 */
const MapMarkers: FunctionComponent<Record<string, unknown>> = () => {
  const { properties } = usePropertyContext();
  const allProperties = properties.map((item) => {
    const { lat, lng, propertyName: name } = item;
    return {
      name,
      position: { lat: parseFloat(lat), lng: parseFloat(lng) },
    };
  });

  // Get the global map instance with the useGoogleMap hook
  const map = useGoogleMap();

  const [, setMarkers] = useState<google.maps.Marker[]>([]);

  // Add markers to the map
  useEffect(() => {
    if (!map) {
      return () => {};
    }
    if (properties.length !== 0) {
      const initialBounds = new google.maps.LatLngBounds();

      const propertiesMarkers: google.maps.Marker[] = allProperties.map(
        (item) => {
          const { position, name } = item;

          const markerOptions: google.maps.MarkerOptions = {
            map,
            position,
            title: name,
            clickable: true,
          };

          initialBounds.extend(position);

          return new google.maps.Marker(markerOptions);
        }
      );

      // Set the center of the map to fit markers
      map.setCenter(initialBounds.getCenter());

      setMarkers(propertiesMarkers);

      // Clean up markers
      return () => {
        propertiesMarkers.forEach((marker) => {
          marker.setMap(null);
        });
      };
    }
  }, [map, properties]);

  return null;
};

export default MapMarkers;
