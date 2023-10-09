"use client";
import React, {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the property type
export interface Property {
  [x: string]: ReactNode;
  id: string;
  propertyName: string;
  img: string;
}

interface FavoriteContextType {
  favorites: Property[];
  addFavorite: (property: Property) => void;
  removeFavorite: (property: Property) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (context == null) {
    throw new Error(
      "useFavoriteContext must be used within a FavoriteProvider"
    );
  }
  return context;
};

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Property[]>([]);

  // Function to add a property to favorites
  const addFavorite = (property: Property) => {
    setFavorites([...favorites, property]);
  };

  // Function to remove a property from favorites
  const removeFavorite = (property: Property) => {
    setFavorites(favorites.filter((fav) => fav.id !== property.id));
  };

  // Load favorites from LocalStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites != null) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Update favorites in LocalStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
