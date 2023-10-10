/* eslint-disable */
import React, { forwardRef } from "react";

const MapCanvas = forwardRef<HTMLDivElement, Record<string, unknown>>(
  (_, ref) => <div ref={ref} style={{ height: "100vh", width: "100%" }} />
);

export default MapCanvas;
