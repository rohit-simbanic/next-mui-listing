/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  styled,
  Grid,
  useTheme,
  CircularProgress,
  Container,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import MapIcon from "@mui/icons-material/Map";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { usePagination } from "../Utils/PaginationProvider";
import PopUpBox from "../PopupBox";
import { db } from "@/config/firebase.init";
import { usePropertyContext } from "@/app/context/PropertyContext";
import { Property, useFavoriteContext } from "../Utils/FavouriteProvide";
import { usePathname, useRouter } from "next/navigation";

const PropertyCardContainer = styled(Box)(
  ({ theme }) => `
    border: 1px solid ${theme.palette.grey[300]};
    padding: ${theme.spacing(2)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px 0px;
    border-radius: 3px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px 0px
    }
  `
);

const PropertyImage = styled("img")(
  ({ theme }) => `
    width: 100%;
    height: auto;
    object-fit: cover;
    ${theme.breakpoints.down("sm")} {
        width: 100%;
      }
  `
);

const PropertyTitle = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
  `
);

const PropertyAddress = styled(Typography)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    margin: ${theme.spacing(1, 0)};
    gap: 12px;
    color: ${theme.palette.grey[700]}
  `
);

const PropertyFeatures = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  `
);

const FeatureIcon = styled("span")(
  ({ theme }) => `
    margin-right: ${theme.spacing(1)};
    display: flex;
    gap: 4px;
    align-items: center;
    color: ${theme.palette.grey[700]};
  `
);

const PriceSection = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    color: ${theme.palette.grey[700]};
    
  `
);
const StyledHr = styled("hr")(
  ({ theme }) => `
      border: 0;
      border-top: 1px solid ${theme.palette.grey[300]};
      width: 100%;
      
    `
);

const FeaturedSaleContainer = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 100%;
    justify-content: space-between;
    top: ${theme.spacing(0)};
    left: ${theme.spacing(0)};
    color: ${theme.palette.common.white};
    z-index: 1;
    padding: ${theme.spacing(2)}
  `
);

const LoadingContainer = styled(Box)(
  ({ theme, height }) => `
      display: flex;
      justify-content: center;
      align-items: center;
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      height: ${height || "500px"};
      width: 100%; 
    `
);
const Sale = styled(Box)(
  ({ theme }) => `
      padding: ${theme.spacing(8, 0, 8)};
  `
);
// interface SaleComponentProps {
//   router: NextRouter;
// }
// : React.FC<SaleComponentProps>
const PropertyCardFetched = () => {
  const [isSpecial] = React.useState(true);
  const { properties, setProperties } = usePropertyContext();
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { favorites, addFavorite, removeFavorite } = useFavoriteContext();

  // State to track the current page
  const { currentPage, setCurrentPage } = usePagination();
  console.log(currentPage);

  //   const navigate = useNavigate();
  const router = useRouter();

  console.log(properties);

  const handleCardClick = (property: React.SetStateAction<null>) => {
    setSelectedProperty(property);
  };

  const handleClosePopup = () => {
    setSelectedProperty(null);
  };
  // Number of properties to display per page
  const propertiesPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Function to handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Function to handle adding or removing a property from favorites
  const handleToggleFavorite = (property: Property) => {
    if (favorites.some((fav) => fav.id === property.id)) {
      removeFavorite(property);
    } else {
      addFavorite(property);
    }
  };

  // Determine if the property is a favorite
  const isFavorite = (property: Property) =>
    favorites.some((fav) => fav.id === property.id);

  // Calculate the range of properties to display on the current page
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  // Slice the search results to display properties for the current page
  const propertiesToDisplay = properties.slice(startIndex, endIndex);
  const propertiesToDisplayHome = properties.slice(0, 6);

  const theme = useTheme();
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "properties"),
      (snapshot) => {
        const list: any[] = [];
        const initialImageLoadingState = Array(snapshot.size).fill(true); // Initialize loading state for all images
        setImageLoading(initialImageLoadingState);

        // eslint-disable-next-line @typescript-eslint/no-shadow
        snapshot.docs.forEach((doc, index) => {
          list.push({ id: doc.id, ...doc.data() });
          const img = new Image();
          img.onload = () => {
            handleImageLoad(index);
          };
          img.onerror = () => {
            handleImageLoad(index);
          };
          img.src = doc.data().img;
        });
        setProperties(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  // Function to handle image load events
  const handleImageLoad = (index: number) => {
    const updatedImageLoading = [...imageLoading];
    updatedImageLoading[index] = false;
    setImageLoading(updatedImageLoading);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure to delete?")) {
      try {
        await deleteDoc(doc(db, "properties", id));
        setProperties(properties.filter((property) => property.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  // Check if the pathname is "/filter" to show the search field

  // Check if the pathname is "/" to show the pagination or not

  const pathname = usePathname();
  const isHomePage = pathname.toString() === "/";
  const isFilterPage = pathname.toString() === "/filter";
  const isDashboardPage = pathname.toString() === "/dashboard";

  return (
    <Sale
      className="MuiSale-wrapper"
      style={{
        width: "100%",
        paddingTop: isFilterPage ? "75px" : isHomePage ? "0" : "77px",
        paddingBottom: isHomePage ? "10px" : "64px",
      }}
    >
      <Container maxWidth="xl">
        <PopUpBox
          selectedProperty={selectedProperty}
          handleClosePopup={handleClosePopup}
        />

        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "flex-start",
            "@media (max-width: 964px)": {
              justifyContent: "center",
            },
          }}
          className="mui-grid"
        >
          {loading ? (
            <LoadingContainer>
              <CircularProgress />
            </LoadingContainer>
          ) : properties.length === 0 ? (
            <Typography
              style={{ color: theme.colors.secondary.main }}
              variant="h3"
            >
              No properties found.
            </Typography>
          ) : (
            <>
              {properties && (isFilterPage || isDashboardPage)
                ? propertiesToDisplay.map((item, index) => (
                    <Grid item md={isFilterPage ? 6 : 4} key={item.id}>
                      <PropertyCardContainer>
                        {imageLoading[index] ? (
                          <LoadingContainer height="100px">
                            <CircularProgress />
                          </LoadingContainer>
                        ) : (
                          <div
                            style={{ position: "relative", minHeight: "auto" }}
                          >
                            <PropertyImage
                              src={item.img}
                              alt={item.propertyName}
                              onLoad={() => {
                                handleImageLoad(index);
                              }}
                              onError={() => {
                                handleImageLoad(index);
                              }}
                            />
                            <FeaturedSaleContainer>
                              <Typography
                                style={{
                                  backgroundColor: isSpecial
                                    ? theme.colors.secondary.main
                                    : theme.colors.alpha.black[100],
                                  padding: theme.spacing(0.5, 1),
                                }}
                                variant="body1"
                              >
                                Featured
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{
                                  backgroundColor: isSpecial
                                    ? theme.colors.alpha.black[100]
                                    : theme.colors.secondary.main,
                                  padding: theme.spacing(0.5, 1),
                                }}
                              >
                                For Sale
                              </Typography>
                            </FeaturedSaleContainer>
                            <div
                              style={{
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "16px",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              {!isFilterPage && !isHomePage && (
                                <IconButton
                                  aria-label="Update"
                                  style={{
                                    color: theme.colors.secondary.main,
                                    background: theme.colors.alpha.white[100],
                                  }}
                                  onClick={() => {
                                    router.push(`/update-property/${item.id}`);
                                  }}
                                >
                                  <EditIcon />
                                </IconButton>
                              )}
                              {!isFilterPage && !isHomePage && (
                                <IconButton
                                  aria-label="Delete"
                                  style={{
                                    color: theme.colors.secondary.main,
                                    background: theme.colors.alpha.white[100],
                                  }}
                                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                  onClick={async () => {
                                    await handleDelete(item.id);
                                  }}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              )}
                            </div>
                          </div>
                        )}
                        <PropertyTitle
                          variant="h4"
                          onClick={() => {
                            handleCardClick(item);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {item.propertyName}
                        </PropertyTitle>
                        <PropertyAddress>
                          <MapIcon fontSize="small" />
                          <Typography variant="body2" sx={{ margin: 0 }}>
                            {item.propertyAddress}
                          </Typography>
                        </PropertyAddress>
                        <PropertyFeatures>
                          <FeatureIcon>
                            <KingBedIcon fontSize="small" />
                            <Typography variant="body2">
                              {item.numberOfBedrooms}
                            </Typography>
                          </FeatureIcon>

                          <FeatureIcon>
                            <BathtubIcon fontSize="small" />
                            <Typography variant="body2">
                              {item.numberOfToilets}
                            </Typography>
                          </FeatureIcon>

                          <FeatureIcon>
                            <SquareFootIcon fontSize="small" />
                            <Typography variant="body2">
                              {item.roomArea} sq ft
                            </Typography>
                          </FeatureIcon>
                        </PropertyFeatures>
                        <StyledHr />
                        <PriceSection>
                          <Typography variant="h5">${item.price}</Typography>
                          <div>
                            <IconButton aria-label="Share">
                              <ShareIcon />
                            </IconButton>
                            <IconButton
                              aria-label="Favorite"
                              onClick={() => {
                                handleToggleFavorite(item);
                              }}
                            >
                              {isFavorite(item) ? (
                                <FavoriteIcon />
                              ) : (
                                <FavoriteBorderIcon />
                              )}
                            </IconButton>
                            <IconButton aria-label="View Details">
                              <ArrowForwardIcon />
                            </IconButton>
                          </div>
                        </PriceSection>
                      </PropertyCardContainer>
                    </Grid>
                  ))
                : propertiesToDisplayHome.map((item, index: number) => (
                    <Grid item md={isFilterPage ? 6 : 4} key={item.id}>
                      <PropertyCardContainer>
                        {imageLoading[index] ? (
                          <LoadingContainer height="100px">
                            <CircularProgress />
                          </LoadingContainer>
                        ) : (
                          <div
                            style={{ position: "relative", minHeight: "auto" }}
                          >
                            <PropertyImage
                              src={item.img}
                              alt={item.propertyName}
                              onLoad={() => {
                                handleImageLoad(index);
                              }}
                              onError={() => {
                                handleImageLoad(index);
                              }}
                            />

                            <FeaturedSaleContainer>
                              <Typography
                                style={{
                                  backgroundColor: isSpecial
                                    ? theme.colors.secondary.main
                                    : theme.colors.alpha.black[100],
                                  padding: theme.spacing(0.5, 1),
                                }}
                                variant="body1"
                              >
                                Featured
                              </Typography>
                              <Typography
                                variant="body1"
                                style={{
                                  backgroundColor: isSpecial
                                    ? theme.colors.alpha.black[100]
                                    : theme.colors.secondary.main,
                                  padding: theme.spacing(0.5, 1),
                                }}
                              >
                                For Sale
                              </Typography>
                            </FeaturedSaleContainer>
                          </div>
                        )}
                        <PropertyTitle
                          variant="h4"
                          onClick={() => {
                            handleCardClick(item);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          {item.propertyName}
                        </PropertyTitle>
                        <PropertyAddress>
                          <MapIcon fontSize="small" />
                          <Typography variant="body2" sx={{ margin: 0 }}>
                            {item.propertyAddress}
                          </Typography>
                        </PropertyAddress>
                        <PropertyFeatures>
                          <FeatureIcon>
                            <KingBedIcon fontSize="small" />
                            <Typography variant="body2">
                              {item.numberOfBedrooms}
                            </Typography>
                          </FeatureIcon>

                          <FeatureIcon>
                            <BathtubIcon fontSize="small" />
                            <Typography variant="body2">
                              {item.numberOfToilets}
                            </Typography>
                          </FeatureIcon>

                          <FeatureIcon>
                            <SquareFootIcon fontSize="small" />
                            <Typography variant="body2">
                              {item.roomArea} sq ft
                            </Typography>
                          </FeatureIcon>
                        </PropertyFeatures>
                        <StyledHr />
                        <PriceSection>
                          <Typography variant="h5">${item.price}</Typography>
                          <div>
                            <IconButton aria-label="Share">
                              <ShareIcon />
                            </IconButton>
                            <IconButton
                              aria-label="Favorite"
                              onClick={() => {
                                handleToggleFavorite(item);
                              }}
                            >
                              {isFavorite(item) ? (
                                <FavoriteIcon />
                              ) : (
                                <FavoriteBorderIcon />
                              )}
                            </IconButton>
                            <IconButton aria-label="View Details">
                              <ArrowForwardIcon />
                            </IconButton>
                          </div>
                        </PriceSection>
                      </PropertyCardContainer>
                    </Grid>
                  ))}
            </>
          )}
        </Grid>
        {/* Pagination */}
        {!isHomePage && properties.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: theme.spacing(2),
            }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(_event, page) => {
                handlePageChange(page);
              }}
            />
          </div>
        )}
      </Container>
    </Sale>
  );
};

export default PropertyCardFetched;
