import { Box, Button, Typography } from "@mui/material";
import React from "react";
import cta from "../assets/images/cta.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function CTA() {
  return (
    <Box mt={4}>
      <Box>
        <Typography variant="h3" color="#FFFC3C" textAlign="center" mb={3}>
          Order Your Favorite Meal Now!
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap="40px"
        alignItems="center"
      >
        <Box>
          <img
            src={cta}
            height="400px"
            width="400px"
            style={{ padding: "10px" }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          gap="30px"
        >
          <Typography variant="body2" color="white" fontSize="20px">
            "Feeling hungry? Your next meal is just one message away!"
          </Typography>
          <Box display="flex" flexDirection="column" mt={4} gap="20px">
            <Button
              startIcon={<WhatsAppIcon />}
              variant="contained"
              sx={{
                height: "60px",
                backgroundColor: "#00AC39",
                fontWeight: "600",
                "&:hover": { backgroundColor: "#029e35" },
              }}
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
