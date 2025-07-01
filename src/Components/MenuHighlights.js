import React from "react";
import { Box, Card, Typography, CardContent, Grid } from "@mui/material";
import shawai from "../assets/images/shawai.jpg";
import fried from "../assets/images/fried (1).jpg";
import burger from "../assets/images/burger.jpg";

const highlights = [
  {
    title: "Chicken Shawai",
    image: shawai,
    description:
      "Tender, juicy grilled chicken marinated in a rich blend of Indian spices and slow-cooked to perfection. Smoky, spicy, and bursting with flavor in every bite!",
  },
  {
    title: "Fried Chicken",
    image: fried,
    description:
      "Crispy, golden, and bursting with flavor — our fried chicken is coated in a secret spiced batter and fried to perfection. Served hot and crunchy, it’s available in combos with fries, dips, buns, and drinks to satisfy all your cravings!",
  },
  {
    title: "Juicy Burgers",
    image: burger,
    description:
      "Satisfy your hunger fast with our range of stacked burgers, hearty sandwiches, and cool, refreshing juices — all in one delicious section!",
  },
];

function MenuHighlights() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "white",
        py: 6,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, color: "#FFFC3C", mb: 4 }}
      >
        Menu Highlights 🍽️
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {highlights.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#1A1A1A",
                color: "white",
                borderRadius: 3,
                p: 2,
                height:"650px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap:"20px",
                alignItems: "center",
                "&:hover": {
                  boxShadow: "0 0 10px #FFFC3C",
                },
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "#CCCCCC",
                    width: "300px",
                    fontSize:"18px"
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MenuHighlights;
