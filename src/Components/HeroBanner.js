import { Box, Button, Typography } from "@mui/material";
import React from "react";
import heroImage from "../assets/images/heroimage.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #3F0000, #000000)",
        minHeight: "90vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // 🔑 Responsive direction
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 0 },
        gap: 4,
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={heroImage}
          alt="Hero"
          style={{
            width: "100%",
            maxWidth: "500px",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            color="white"
            sx={{ fontWeight: 700, fontSize: { xs: "2.5rem", md: "4rem" } }}
          >
            CHIKEES
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={{ mt: 1, fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            The Ultimate Fried Chicken Brand
          </Typography>
        </Box>

        <Button
          sx={{
            bgcolor: "#FFFC3C",
            color: "black",
            fontWeight: 600,
            width: "200px",
            height: "60px",
            '&:hover': {
              backgroundColor: "#e5e126",
            },
          }}
        >
          Explore Our Menu
        </Button>
      </Box>
    </Box>
  );
}

export default HeroBanner;
