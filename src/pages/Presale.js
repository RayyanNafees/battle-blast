import React from "react";
import presale from "../assets/presale3.svg";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import front from "../assets/presale-front.svg";
import Typography from "@mui/material/Typography";
import dragon from "../assets/dragon.svg";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

const classes = {
  presale: {
    fontFamily: 'Rammetto One", "Poppins", Arial, Helvetica, sans-serif',
    fontSize: 85,
    textShadow:
      "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
  },
  time: {
    fontFamily: 'Rasa", "Poppins", Arial, Helvetica, sans-serif',
    fontSize: 30,
    // lineHeight: 90,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 29,
    // lineHeight: 43,
    color: "white",
  },
};

function Presale() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "100%",
            height: "150vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "black",
          }}
          container
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-start"
        >
          <Grid item mb={-20} pr={5}>
            <Typography
              style={classes.presale}
              color="primary.main"
              variant="h3"
            >
              PRE-SALE
            </Typography>

            <Typography style={classes.time} variant="h4">
              {new Date().toLocaleTimeString().toLowerCase()}
            </Typography>
          </Grid>{" "}
          <Grid
            item 
            pt={10}
            mb={-75}
            container
            alignItems="flex-end"
            justifyContent="flex-start"
          >
            <img src={dragon} width="40%"/>
          </Grid>
          <Grid item>
            <img src={front} width="100%" />
          </Grid>
          <Grid
            item
            container
            fullWidth
            alignItems="center"
            justifyContent="center"
            mt={-30}
          >
            <Typography style={classes.subtitle} variant="subtitle1">
              Presale Price:
              <br />
              1 BNB =5700 BB TOKENS
              <br />
              PRICE = 0.07$ (Approx)
              <br />
              LAUNCH PRICE = 0.2$ (Approx)
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "100%",
            height: "35vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
            backgroundColor: "black",
          }}
        />
      </Hidden>
    </>
  );
}

export default Presale;
