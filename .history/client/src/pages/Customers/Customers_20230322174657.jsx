import React from "react";

import { Box, useTheme } from "@mui/material";

import { Header } from "../../components/index";
import { DataGrid } from "@mui/x-data-grid";
import { useGetCustomersQuery } from "redux/api";
const Customers = () => {
  const fetchData = useGetCustomersQuery();
  console.log("Customer", fetchData.data);
  const theme = useTheme();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return <Box></Box>;
};

export default Customers;
