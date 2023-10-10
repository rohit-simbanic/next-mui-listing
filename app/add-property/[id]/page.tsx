/* eslint-disable */
"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  styled,
  TextField,
  Typography,
  MenuItem,
  Box,
  InputLabel,
} from "@mui/material";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { db, storage } from "@/config/firebase.init";
import { useParams, useRouter } from "next/navigation";
import ButtonComponent from "@/app/components/Button";

interface FormData {
  propertyName: string;
  propertyAddress: string;
  numberOfBedrooms: string;
  numberOfToilets: string;
  roomArea: string;
  price: string;
  featured: boolean;
  forSale: boolean;
  img: string;
  lat: string;
  lng: string;
}

const AddPropertyFormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: theme.colors.shadows.appbar,
  backgroundColor: theme.palette.background.paper,
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  margin: theme.spacing(10, "auto"),
}));

const AddPropertyFormTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(2),
}));

const AddPropertyTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  margin: theme.spacing(3, 0, 0),
}));
const FileInput = styled("input")({
  display: "none",
});

const FileInputLabel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const loading = require("@/public/images/loading.gif");
const AddPropertyForm: React.FC = () => {
  const initialFormData: FormData = {
    propertyName: "",
    propertyAddress: "",
    numberOfBedrooms: "",
    numberOfToilets: "",
    roomArea: "",
    price: "",
    featured: false,
    forSale: false,
    img: "",
    lat: "",
    lng: "",
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);

  console.log(progress);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const navigate = useRouter();
  const params = useParams();
  const id = params.id;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    if (!id) {
      try {
        await addDoc(collection(db, "properties"), {
          ...formData,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await updateDoc(doc(db, "properties", id), {
          ...formData,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    }
    navigate.push("/dashboard");
  };

  const getSingleProduct = async () => {
    if (!id) {
      return;
    }
    const docRef = doc(db, "properties", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      const data = snapshot.data() as FormData;
      setFormData((prevData) => ({
        ...prevData,
        propertyName: data.propertyName,
        propertyAddress: data.propertyAddress,
        numberOfBedrooms: data.numberOfBedrooms,
        numberOfToilets: data.numberOfToilets,
        roomArea: data.roomArea,
        price: data.price,
        featured: data.featured,
        forSale: data.forSale,
        lat: data.lat,
        lng: data.lng,
      }));
    }
  };
  const handleRemoveImage = () => {
    setFile(null);
    setSelectedFileName(null);
    setProgress(0);
    // Remove the image from Firebase Storage
    if (formData.img) {
      const storageRef = ref(storage, formData.img);
      deleteObject(storageRef)
        .then(() => {
          // Image deleted successfully from Firebase Storage
          console.log("Image deleted from Firebase Storage");
          // Clear the image URL from the form data
          setFormData((prevData) => ({ ...prevData, img: "" }));
        })
        .catch((error) => {
          console.error("Error deleting image from Firebase Storage", error);
        });
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      if (!file) {
        return; // No file selected
      }
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload in pause");
              break;
            case "running":
              console.log("upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prevData) => ({ ...prevData, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getSingleProduct();
  }, [id]);

  return (
    <AddPropertyFormContainer>
      <AddPropertyFormTitle>
        {id ? "Update Property" : "Add Property"}
      </AddPropertyFormTitle>
      <form onSubmit={handleSubmit}>
        <AddPropertyTextField
          name="propertyName"
          label="Property Name"
          variant="outlined"
          value={formData.propertyName}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="propertyAddress"
          label="Property Address"
          variant="outlined"
          value={formData.propertyAddress}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="numberOfBedrooms"
          label="Number of Bedrooms"
          variant="outlined"
          type="number"
          value={formData.numberOfBedrooms}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="lat"
          label="latitude"
          variant="outlined"
          type="number"
          value={formData.lat}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="lng"
          label="longitude"
          variant="outlined"
          type="number"
          value={formData.lng}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="numberOfToilets"
          label="Number of Toilets"
          variant="outlined"
          type="number"
          value={formData.numberOfToilets}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="roomArea"
          label="Room Area (sq. ft.)"
          variant="outlined"
          type="number"
          value={formData.roomArea}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="price"
          label="Price ($)"
          variant="outlined"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <AddPropertyTextField
          name="featured"
          label="Featured Property"
          variant="outlined"
          select
          value={formData.featured}
          onChange={handleChange}
        >
          <MenuItem value={true.toString()}>Yes</MenuItem>
          <MenuItem value={false.toString()}>No</MenuItem>
        </AddPropertyTextField>
        <AddPropertyTextField
          name="forSale"
          label="For Sale"
          variant="outlined"
          select
          value={formData.forSale}
          onChange={handleChange}
        >
          <MenuItem value={true.toString()}>Yes</MenuItem>
          <MenuItem value={false.toString()}>No</MenuItem>
        </AddPropertyTextField>

        <label>
          <FileInput
            type="file"
            name="file"
            id="fileInput"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const selectedFile = e.target.files && e.target.files[0];
              if (selectedFile) {
                if (
                  selectedFile.type === "image/jpeg" ||
                  selectedFile.type === "image/jpg"
                ) {
                  setFile(selectedFile);
                  setSelectedFileName(selectedFile.name);
                } else {
                  // Display an error message or prevent file selection
                  alert("Please select a JPEG file.");
                  e.target.value = ""; // Clear the file input
                }
              } else {
                setSelectedFileName(null);
              }
            }}
            accept=".jpeg, .jpg"
            required={!id}
          />
          <InputLabel htmlFor="fileInput">
            Choose a File (jpeg/jpg format only)
          </InputLabel>
          <Typography variant="body2" color="textSecondary">
            {selectedFileName
              ? `Selected File: ${selectedFileName}`
              : "No file selected"}
          </Typography>
        </label>

        {selectedFileName && formData.img && (
          <>
            <img
              src={formData.img}
              alt="Uploaded Property"
              width={100}
              height={100}
            />
            <CloseIcon
              onClick={handleRemoveImage}
              style={{ margin: "20px 10px" }}
            />
          </>
        )}
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <ButtonComponent
            text={id ? "Update Property" : "Add Property +"}
            type="submit"
            style={{ margin: 0 }}
            disabled={progress !== null && progress < 100}
          />
          {progress !== 0 && progress < 100 && (
            <img src={loading} alt="Loading" width={30} height={30} />
          )}
        </div>
        <StyledTypography>
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            Back to Dashboard
          </Link>
        </StyledTypography>
      </form>
    </AddPropertyFormContainer>
  );
};

export default AddPropertyForm;
