import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/HeroBanner";
import MenuHighlights from "../Components/MenuHighlights";
import AboutUs from "../Components/AboutUs";
import UserReview from "../Components/UserReview";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <Box bgcolor="#121212" minHeight="100vh">
      <Navbar />
      <HeroBanner />
      <MenuHighlights />
      <AboutUs />
      <UserReview />
      <CTA />
      <Footer />
    </Box>
  );
}

export default HomePage;
