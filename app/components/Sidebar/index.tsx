/* eslint-disable */
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePagination } from "../Utils/PaginationProvider";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  onClick?: () => void;
};

const Item: React.FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Link href={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: `${theme.colors.primary.main}`,
        }}
        onClick={() => {
          setSelected(title);
          if (onClick) {
            onClick();
          }
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SidebarPrimary = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");
  const [hide, setHide] = useState(false);
  const photo = require("@/public/images/cta/contact.jpg");
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { setCurrentPage } = usePagination();

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${theme.colors.primary.main} !important`,
        },

        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        ".ps-sidebar-container": {
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 4px 0px",
          borderRadius: "3px",
        },
        position: isMdScreen ? "fixed" : "relative",
        top: isMdScreen ? "70px" : "64px",
        left: 0,
        zIndex: 1000,
      }}
    >
      <Sidebar collapsed={isCollapsed || isMdScreen}>
        <Menu>
          {/* LOGO AND MENU ICON */}

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: `${theme.colors.primary.main}`,
              display: isMdScreen ? "none" : "block",
            }}
          >
            {!isCollapsed && !isMdScreen && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  color={`${theme.colors.alpha.black[10]}`}
                >
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && !isMdScreen && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  width={100}
                  height={100}
                  src={photo}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    marginTop: isMdScreen ? "20px" : "0",
                  }}
                />
              </Box>
            </Box>
          )}

          {hide && (
            <Box paddingLeft={isCollapsed && isMdScreen ? undefined : "0"}>
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />

              <Item
                title="Filter"
                to="/filter"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />
              <Item
                title="Add Property"
                to="/add-property"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="listing"
                to="/dashboard"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />
              <Item
                title="Favourite Property"
                to="/"
                icon={<FavoriteIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />
            </Box>
          )}
          {!hide && !isMdScreen && (
            <Box paddingLeft={isCollapsed && isMdScreen ? undefined : "0"}>
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />

              <Item
                title="Filter"
                to="/filter"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />
              <Item
                title="Add Property"
                to="/add-property"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />
              <Item
                title="listing"
                to="/dashboard"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />
              <Item
                title="Favourite Property"
                to="/favorite"
                icon={<FavoriteIcon />}
                selected={selected}
                setSelected={setSelected}
                onClick={() => setCurrentPage(1)}
              />
            </Box>
          )}
        </Menu>
        <Menu
          onClick={() => setHide(!hide)}
          style={{
            color: `${theme.colors.primary.main}`,
            display: isMdScreen ? "block" : "none",
            textAlign: "center",
            margin: theme.spacing(2),
            paddingTop: theme.spacing(2),
          }}
        >
          {!hide ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarPrimary;
