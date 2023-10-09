"use client";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface PropertyContextType {
  properties: any[]; // Replace 'any[]' with your actual property type
  setProperties: React.Dispatch<React.SetStateAction<any[]>>; // Replace 'any[]' with your actual property type
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined
);

export function usePropertyContext() {
  const context = useContext(PropertyContext);
  if (context == null) {
    throw new Error(
      "usePropertyContext must be used within a PropertyProvider"
    );
  }
  return context;
}

interface PropertyProviderProps {
  children: ReactNode;
}

export function PropertyProvider({ children }: PropertyProviderProps) {
  const [properties, setProperties] = useState<any[]>([]); // Replace 'any[]' with your actual property type

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
}
