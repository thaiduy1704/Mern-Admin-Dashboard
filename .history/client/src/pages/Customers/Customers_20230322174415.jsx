import React from "react";
import { useGetCustomersQuery } from "redux/api";

const Customers = () => {
  const fetchData = useGetCustomersQuery();
  console.log("Customer", fetchData.data);
  return <div>Customers</div>;
};

export default Customers;
