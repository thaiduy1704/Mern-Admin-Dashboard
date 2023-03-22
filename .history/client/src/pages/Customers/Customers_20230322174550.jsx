import React from "react";

import { Box, useTheme } from "@mui/material";

import { Header } from "../../components/index";
import { DataGrid } from "@mui/x-data-grid";
import { useGetCustomersQuery } from "redux/api";
const Customers = () => {
  const fetchData = useGetCustomersQuery();
  console.log("Customer", fetchData.data);
  const theme = useTheme();
  return <div>Customers</div>;
};

export default Customers;
