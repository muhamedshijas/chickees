import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import cta from "../assets/images/cta.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function CTA() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mt={4} px={2}>
      <Box>
        <Typography variant="h3" color="#FFFC3C" textAlign="center" mb={3}>
          Order Your Favorite Meal Now!
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        gap="40px"
      >
        {/* Image */}
        <Box>
          <img
            src={cta}
            alt="CTA"
            style={{
              height: isSmallScreen ? "auto" : "400px",
              width: isSmallScreen ? "90%" : "400px",
              maxWidth: "100%",
              padding: "10px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Text and Buttons */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          gap="30px"
          alignItems={isSmallScreen ? "center" : "flex-start"}
          textAlign={isSmallScreen ? "center" : "left"}
          width={isSmallScreen ? "90%" : "auto"}
        >
          <Typography variant="body2" color="white" fontSize="20px">
            "Feeling hungry? Your next meal is just one message away!"
          </Typography>

          <Box display="flex" flexDirection="column" mt={4} gap="20px" width="100%">
            <Button
              startIcon={<WhatsAppIcon />}
              variant="contained"
              sx={{
                height: "60px",
                backgroundColor: "#00AC39",
                fontWeight: "600",
                "&:hover": { backgroundColor: "#029e35" },
              }}
              fullWidth={isSmallScreen}
            >
              Order On Whatsapp
            </Button>
            <Button
              startIcon={<CallIcon />}
              variant="contained"
              sx={{
                height: "60px",
                backgroundColor: "#065BA6",
                fontWeight: "600",
                "&:hover": { backgroundColor: "#054d8f" },
              }}
              fullWidth={isSmallScreen}
            >
              Call Us
            </Button>
            <Button
              startIcon={<LocationOnIcon />}
              variant="outlined"
              sx={{
                height: "60px",
                border: "1px solid white",
                fontWeight: "600",
                color: "white",
                "&:hover": {
                  backgroundColor: "#ffffff22",
                },
              }}
              fullWidth={isSmallScreen}
            >
              Visit Us Today
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CTA;
