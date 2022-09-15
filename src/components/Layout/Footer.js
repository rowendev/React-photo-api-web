import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <footer>
      <Box color="black" px={{ xs: 1, sm: 3 }} py={{ xs: 1, sm: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link to="/">homepage</Link>
              </Box>
              <Box>
                <Link to="/about">about</Link>
              </Box>
              <Box>
                <Link to="/contact">contact</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link to="#">Login</Link>
              </Box>
              <Box>
                <Link to="#">Signup</Link>
              </Box>
              <Box>
                <Link to="/privacy">privacy</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Message</Box>
              <Box>
                <Link to="/">history</Link>
              </Box>
              <Box>
                <Link to="/about">backup</Link>
              </Box>
              <Box>
                <Link to="/">roll</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 3, sm: 5 }} py={{ xs: 3, sm: 5 }}>
            {new Date().getFullYear()} Created by Rowen , All right reserved.
          </Box>
        </Container>
      </Box>
      {/* <div>
        Created by
        <Link
          to="/contact"
          style={{ margin: "0 0.3rem", textDecoration: "underline" }}
        >
          Rowen
        </Link>
        , All right reserved &reg; copyright {new Date().getFullYear()}
      </div> */}
    </footer>
  );
};

export default Footer;
