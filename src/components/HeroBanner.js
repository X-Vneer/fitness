import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: {
          xs: "center",
          md: "left",
        },
        gap: {
          md: "40px",
          lg: "70px",
        },
        minHeight: "500px",
      }}
    >
      <Box padding="15px">
        <Typography color="#FF2625" fontSize="46px" fontWeight="600" mb="25px">
          Fitness Club
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={{ lg: "44px", xs: "40px" }}
          mb={3}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the most effective Exercises
        </Typography>
        <Button variant="contained" color="error" href="#exercises">
          Explore Exercises
        </Button>
        <Typography
          color="#ff2625"
          fontWeight={700}
          sx={{
            opacity: 0.3,
            fontSize: {
              lg: "240px",
              md: "200px",
              xs: "24vw",
            },
            position: "absolute",
            left: "20px",
            bottom: {
              xs: "-15vw",
              md: "-100px",
            },
            zIndex: "-1",
          }}
        >
          Exercise
        </Typography>
      </Box>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
