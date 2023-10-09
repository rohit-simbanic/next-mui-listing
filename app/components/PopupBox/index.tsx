/* eslint-disable */
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogContent,
  styled,
} from "@mui/material";

// Define a styled component for the popup
const StyledPopup = styled(Dialog)(({ theme }) => ({
  "& .popup-inner": {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));
const PropertyImage = styled("img")(
  ({ theme }) => `
      width: 100%;
      height: 250px;
      object-fit: cover;
      ${theme.breakpoints.down("sm")} {
          width: 300px;
        }
    `
);

interface PopUpBoxProps {
  selectedProperty: {
    propertyName: string;
    price: number;
    propertyAddress: string;
    img: string;
    // Add more property details here
  } | null;
  handleClosePopup: () => void;
}
// Your component
const PopUpBox: React.FC<PopUpBoxProps> = ({
  selectedProperty,
  handleClosePopup,
}) => {
  return (
    <>
      {/* Popup Modal */}
      <StyledPopup open={Boolean(selectedProperty)} onClose={handleClosePopup}>
        <DialogContent className="popup-inner">
          {selectedProperty && (
            <Card>
              <CardContent>
                <PropertyImage
                  src={selectedProperty.img}
                  alt={selectedProperty.propertyName}
                />
                <Typography variant="h5" gutterBottom>
                  {selectedProperty.propertyName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Price: ${selectedProperty.price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Address: {selectedProperty.propertyAddress}
                </Typography>
                {/* Add more property details here */}
                <Button variant="contained" onClick={handleClosePopup}>
                  Close
                </Button>
              </CardContent>
            </Card>
          )}
        </DialogContent>
      </StyledPopup>
    </>
  );
};

export default PopUpBox;
