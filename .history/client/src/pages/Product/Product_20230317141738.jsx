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
  const fetchData = useGetProductQuery();
  console.log(fetchData);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />

      {fetchData.data || !fetchData.isLoading?<Box></Box>}
    </Box>
  );
};

export default Product;
