import React from "react";
import { CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <Box sx={{ position: "ababsolute" }}>
      <CircularProgress color="inherit" />;
    </Box>
  );
};

export default Loading;
