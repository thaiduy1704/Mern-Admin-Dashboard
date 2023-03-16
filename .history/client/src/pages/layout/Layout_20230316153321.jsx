import { useMemo, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, SideBar } from "../../components/index";
import { useGetUserQuery } from "../../redux/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px) ");

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const { userId } = useSelector((store) => store.dashboard);
  const fetchData = useGetUserQuery(userId);
  console.log(fetchData.data);

  return (
    <Box display={isNonMobile ? "flex" : "block "} width="100%" height="100%">
      <SideBar
        user={fetchData.data}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      <Box flexGrow={1}>
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
