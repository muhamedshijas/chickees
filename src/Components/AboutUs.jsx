import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/images/logo.png";

function AboutUs() {
  return (
    <Box
      sx={{ background: "#2A2A2A" }}
      display="flex"
      width="100%"
      gap="40px"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="30%">
        <img src={logo} style={{ padding: "10px" }} height="450px" />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h4" color="yellow" textAlign="center" mb={2}>
          About Us
        </Typography>
        <Typography
          variant="body2"
          width="600px"
          textAlign="center"
          color="white"
          fontSize="20px"
        >
          At Chikees, we believe food is more than just a necessity — it’s an
          experience full of flavor and feeling. Since 2021, we’ve been
          redefining fast food with bold spices, sizzling recipes, and legendary
          fried chicken, marinated in our secret spice blend and fried to golden
          perfection. From our red-and-yellow interiors to the warm smiles
          behind the counter, Chikees feels like home. Whether it's a cheesy
          burger or a late-night snack, everything is made fresh with 100% halal
          ingredients, served with love and pride. Join the Chikees movement —
          where flavor rules, and every bite tells a story.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUs;
