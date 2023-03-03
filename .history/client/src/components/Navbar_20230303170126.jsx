import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { FlexBetween } from "./index";
import { setMode } from "../redux/features/Theme/ThemeSlice";
import { useDispatch } from "react-redux";
import profileImage from "../assets/profile.jpeg";
import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/*Left Side */}
        <FlexBetween>
          <IconButton
            onClick={() => {
              console.log("open/close sidebar");
            }}
          >
            <MenuIcon />
            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            ></FlexBetween>
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
