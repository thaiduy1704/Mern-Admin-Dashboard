import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  ArrowDropDownOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import { FlexBetween } from "./index";
import { setMode } from "../redux/features/Theme/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import profileImage from "../assets/profile.jpeg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { tokensDark } from "assets/theme";

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
            sx={{ borderRadius: "none" }}
            onClick={() => {
              console.log("open/close sidebar");
            }}
          >
            <MenuIcon
              sx={{
                marginRight: "1rem",
              }}
            />
            <FlexBetween
              backgroundColor={
                theme.palette.mode === "dark"
                  ? tokensDark.primary[500]
                  : tokensDark.grey[50]
              }
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            >
              <InputBase placeholder="Search..." color="white" />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </IconButton>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
