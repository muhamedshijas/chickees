import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/Home/HeroBanner";
import MenuHighlights from "../Components/Home/MenuHighlights";
import AboutUs from "../Components/Home/AboutUs";
import UserReview from "../Components/Home/UserReview";
import CTA from "../Components/Home/CTA";
import Footer from "../Components/Home/Footer";

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
