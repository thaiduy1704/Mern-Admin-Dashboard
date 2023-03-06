import React from "react";
import {
  Box,
  Divider,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutline,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "./index";
import profileImage from "../assets/profile.jpeg";

const SideBar = ({
  drawerWidth,
  isSideBarOpen,
  setIsSideBarOpen,
  isNonMoblie,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigation = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));

    return () => {
      second;
    };
  }, [third]);

  return <div>SideBar</div>;
};

export default SideBar;
