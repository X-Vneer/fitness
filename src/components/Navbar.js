import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../assets/images/Logo.png";
function Navbar() {
  return (
    <Stack
      fontFamily="Arial, Helvetica, sans-serif"
      direction="row"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 10px",
          }}
        />
      </Link>
      <Stack
        direction="row"
        sx={{
          gap: {
            xs: "15px",
            sm: "30px",
            md: "40px",
          },
        }}
        fontSize="24px"
        alignItems="center"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3a1212",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
