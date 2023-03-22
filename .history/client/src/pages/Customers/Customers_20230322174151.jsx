import React from "react";
import { useGetCustomersQuery } from "redux/api";

const Customers = () => {
  const fetchData = useGetCustomersQuery();
  return <div>Customers</div>;
};

export default Customers;
