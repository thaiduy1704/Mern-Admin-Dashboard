import { useState } from "react";
import { Header, Loading } from "../../components/index";
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
  Card,
  CardContent,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Products = ({ isNonMobile }) => {
  const fetchData = useGetProductQuery();
  console.log(fetchData);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />

      {fetchData.data || !fetchData.isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& >div": { gridColumn: isNonMobile ? undefined : "span 4 " },
          }}
        >
          {fetchData.data.map((item, index) => {})}
        </Box>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default Products;
