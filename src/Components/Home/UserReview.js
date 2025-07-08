import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import user from "../../assets/images/user.png";

function UserReview() {
  const reviews = [
    {
      name: "Shijas M",
      text: "The chicken was crispy, spicy, and cooked to absolute perfection!",
      image: user,
    },
    {
      name: "Shijas M",
      text: "The chicken was crispy, spicy, and cooked to absolute perfection!",
      image: user,
    },
    {
      name: "Shijas M",
      text: "The chicken was crispy, spicy, and cooked to absolute perfection!",
      image: user,
    },
    {
      name: "Shijas M",
      text: "The chicken was crispy, spicy, and cooked to absolute perfection!",
      image: user,
    },
  ];

  return (
    <Box mt={4}>
      {/* Title Section */}
      <Box
        p={2}
        sx={{ background: "linear-gradient(130deg , #000000,#671515)" }}
      >
        <Typography variant="h4" color="white" textAlign="center">
          WHAT OUR CUSTOMERS SAY
        </Typography>
      </Box>

      {/* Review Cards Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ padding: "40px 20px", backgroundColor: "#121212" }}
      >
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ color: "white" }}
            >
              {/* Red Image Box */}
              <Box
                bgcolor="#671515"
                width="100%"
                maxWidth="280px"
                height="250px"
                borderRadius="12px"
                overflow="hidden"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // ✅ apply here!
                  }}
                />
              </Box>

              {/* Text & Name Outside the Red Box */}
              <Box mt={2} textAlign="center" maxWidth="240px">
                <Typography variant="body1" sx={{ fontSize: "0.95rem", mb: 1 }}>
                  {review.text}
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  {review.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UserReview;
