import { Box, Typography, Grid, Stack, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

function Footer() {
  return (
    <Box bgcolor="white" px={4} py={6} mt={8}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Brand Info */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h5" fontWeight={600}>
            CHIKKEES
          </Typography>
          <Typography variant="body1">
            The Ultimate Fried Chicken Brand
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={4} md={2} textAlign={{ xs: "center", md: "left" }}>
          <Stack spacing={1}>
            <Typography variant="body2">Home</Typography>
            <Typography variant="body2">About</Typography>
            <Typography variant="body2">Our Menu</Typography>
            <Typography variant="body2">Contact Us</Typography>
          </Stack>
        </Grid>

        {/* Opening Hours */}
        <Grid item xs={12} sm={4} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body1" fontWeight={500}>
            Opening Hours:
          </Typography>
          <Typography variant="body2">Mon–Sun: 12 PM – 11 PM</Typography>
        </Grid>

        {/* Contact Info & Social */}
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="body1" fontWeight={500}>
            Call Us: +91 XXXXXXXXX
          </Typography>
          <Box mt={1}>
            <Typography variant="body1" mb={1}>
              Visit us:
            </Typography>
            <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-start" }}>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <WhatsAppIcon />
              </IconButton>
              <IconButton>
                <LocationOnIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          © 2021 CHIKKEES. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
