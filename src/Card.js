import React, { useEffect, useState } from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import logo from "./assets/logo.svg";
import arrow from "./assets/arrow.svg";
import img from "./assets/img.svg";
import spaceship from "./assets/spaceship.svg";
import QRCode from "./assets/QRCode.svg";
import design from "./assets/design.svg";
import { useCryptoPrice } from "./hook";

import { Divider, Grid } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "#00BD84" },
    custom: { main: "#EBFF24" },
    black: {main :"#000000"}
  },
  typography: {
    fontFamily: ["sans-serif"],
    myVariant: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    myVariant2: {
      fontSize: "4rem",
      fontWeight: 500,
      marginLeft: "1rem",
    },
    myVariant3: {
      fontSize: "1.5rem",
      fontWeight: 300,
    },
  },
});

const Card = () => {
  const bitCoinPrice = useCryptoPrice("bitcoin");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        sx={{
          backgroundColor: 'black.main',
          height: "60%",
          p: 2,
          position: "relative",
        }}
        container
        rowSpacing={{ xs: 4, sm: 8, md: 4 }}
        columnSpacing={{ xs: 4, sm: 1, md: 10 }}
        // rowSpacing={1}
      >
        <Grid item xs={6} sm={12}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // gap: ,
            }}
          >
            <Typography
              variant="myVariant"
              color="primary.main"
              sx={{ fontSize: { xs: "2rem" } }}
            >
              BTCUSDT
            </Typography>
            <Box sx={{ display: "flex" }}>
              <img src={arrow} alt="arrow" />
              <Typography
                variant="myVariant2"
                color="secondary.main"
                sx={{ fontSize: { xs: "3rem" } }}
              >
                +144.27%
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "70%",
                marginLeft: 2,
              }}
            >
              <Typography
                variant="myVariant3"
                color="secondary.main"
                sx={{ textAlign: "center", fontSize: { xs: "1rem" } }}
              >
                LONG
              </Typography>
              <Divider
                sx={{ width: "4px", background: "primary.main" }}
                orientation="vertical"
                flexItem
              ></Divider>
              <Typography
                variant="myVariant3"
                color="primary.main"
                sx={{ fontSize: { xs: "1rem" } }}
              >
                20x
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="myVariant3"
                  color="primary.main"
                  sx={{ fontSize: { xs: "1rem" } }}
                >
                  Last Price
                </Typography>
                <Typography
                  variant="myVariant3"
                  color="custom.main"
                  sx={{ fontSize: { xs: "1rem" } }}
                >
                  ${bitCoinPrice}
                </Typography>
              </Box>
              <Divider
                sx={{ width: "4px", background: "primary.main" }}
                orientation="vertical"
                flexItem
              ></Divider>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="myVariant3"
                  sx={{ fontSize: { xs: "1rem" } }}
                  color="primary.main"
                >
                  Mark Price
                </Typography>
                <Typography
                  variant="myVariant3"
                  sx={{ fontSize: { xs: "1rem" } }}
                  color="custom.main"
                >
                  $16500
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: { sm: "center", md: "flex-end" },
          }}
        >
          <img src={img} alt="image" />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            alignItems: { xs: "flex-end" },
            display: { xs: "flex" },
          }}
        >
          <Box sx={{ width: { xs: "70%" }, mt: { xs: "auto" } }}>
            <img src={spaceship} alt="image" />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: { sm: "100%" },
            }}
          >
            <Typography
              variant="myVariant3"
              color="primary.main"
              sx={{
                fontSize: "0.8rem",
                width: { sm: "40%" },
                ml: { xs: "68%" },
              }}
            >
              Scan QR code to know more about
              <Typography
                variant="myVariant3"
                color="custom.main"
                sx={{ fontSize: "0.8rem" }}
              >
                {" "}
                DENSITY.
              </Typography>
            </Typography>
            <img
              src={QRCode}
              alt="QR code"
              style={{ width: "141px", height: "141px" }}
            />
          </Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={design}
            alt="design"
            style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
          />
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Card;
