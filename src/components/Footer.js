import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" p="30px" bgcolor="#fff3f4">
      <Stack gap="30px" alignItems="center" justifyContent="center">
        <img src={logo} alt="logo" width="150px" />
        <Typography varaint="h6">Made with ❤ by Moneer A. Mizyed</Typography>
        <a href="mailto:xv.neer.business@gmail.com" className="emialme">
          Contact me Via Email
        </a>
      </Stack>
    </Box>
  );
};

export default Footer;
