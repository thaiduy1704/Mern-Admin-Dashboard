import React from "react";
import { CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <Box sx={{ position: "absolute",top: "50%";
	left: "50%", }}>
      <CircularProgress color="inherit" />;
    </Box>
  );
};

export default Loading;
