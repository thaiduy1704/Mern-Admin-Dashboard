import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, SideBar } from "../../components/index";
import { useGetUserQuery, useGetAllUserQuery } from "../../redux/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px) ");

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const { userId } = useSelector((store) => store.dashboard);
  console.log("userId", userId);
  const { data } = useGetUserQuery(userId);

  console.log("data is layout", data.data.{name});
  // const { data } = useGetAllUserQuery();
  // console.log(data);

  return (
    <Box display={isNonMobile ? "flex" : "block "} width="100%" height="100%">
      <SideBar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
