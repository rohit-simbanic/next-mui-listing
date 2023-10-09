/* eslint-disable */
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the global state
interface PaginationState {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

// Create a context for the global state
const PaginationContext = createContext<PaginationState | undefined>(undefined);

// Create a provider component to wrap your app
export const PaginationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

// Create a custom hook to access the global state
export const usePagination = (): PaginationState => {
  const context = useContext(PaginationContext);
  if (context === undefined) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
};
