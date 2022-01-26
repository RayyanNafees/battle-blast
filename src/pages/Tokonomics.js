import React from "react";
import Grid from "@mui/material/Grid";
import deepblue from "../assets/deepblue.svg";
import dpMobile from "../assets/deepblue.mobile.png";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import pie from "../assets/pie_text.svg";
function Game() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${deepblue})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h2"
            color="initial"
            color="warning.main"
            align="center"
            fontWeight={700}
            gutterBottom
          >
            Tokonomics
          </Typography>
          <Grid item container alignItems="center" justifyContent="center" >
            <img src={pie} width="50%" />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${dpMobile})`,
            backgroundSize: "150%",
            height: "50vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "top",
          }}
          justifyContent="center"
          alignItems="flex-start"
          container
          pt={1}
        >
          <Grid
            container
            direction="column"
            item
            alignItems="center"
            justifyContent="center"
            spacing={6}
          >
            <Grid item mt={2}>
              <Typography
                variant="h5"
                color="initial"
                color="warning.main"
                align="center"
                fontWeight={700}
                mt={1}
              >
                Tokonomics
              </Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="center">
              <img src={pie} width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default Game;
