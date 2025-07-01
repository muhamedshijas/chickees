import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/images/logo.png";

function AboutUs() {
  return (
    <Box
      sx={{
        background: "#2A2A2A",
        px: 2,
        py: 6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 🔑 Responsive layout
        
        gap: { xs: 4, md: 6 },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          alt="Chikees Logo"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            padding: "10px",
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#FFFC3C", mb: 2, fontWeight: 600 }}
        >
          About Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            px: { xs: 1, sm: 3, md: 0 },
          }}
        >
          At Chikees, we believe food is more than just a necessity — it’s an
          experience full of flavor and feeling. Since 2021, we’ve been
          redefining fast food with bold spices, sizzling recipes, and legendary
          fried chicken marinated in our secret spice blend and fried to golden
          perfection. From our red-and-yellow interiors to the warm smiles
          behind the counter, Chikees feels like home. Whether it's a cheesy
          burger or a late-night snack, everything is made fresh with 100%
          halal ingredients, served with love and pride. Join the Chikees
          movement — where flavor rules, and every bite tells a story.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutUs;
