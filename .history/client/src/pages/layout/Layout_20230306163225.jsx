import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, SideBar } from "../../components/index";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
