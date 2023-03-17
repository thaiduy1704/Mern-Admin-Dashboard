import React from "react";
import { Header } from "../../components/index";
import { useGetProductQuery } from "../../redux/api";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Product = () => {
  return <Box>
    <Header title="PRODUCTS" subtitle="See your list of products."/>
  </Box>

export default Product;
