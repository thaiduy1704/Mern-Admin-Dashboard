import React from "react";
import { CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <Box sx={{ position: "absolute" }}>
      <CircularProgress color="inherit" />;
    </Box>
  );
};

export default Loading;
