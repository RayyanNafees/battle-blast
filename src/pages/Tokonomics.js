import React from "react";
import Grid from "@mui/material/Grid";
import deepblue from "../assets/deepblue.svg";
import dpMobile from "../assets/deepblue.mobile.png";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
function Game() {
  return (
    <Grid>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${deepblue})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
        >
          <Typography
            variant="h2"
            color="initial"
            color="white"
            align="center"
            fontWeight={700}
          >
            Tokonomics
          </Typography>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${dpMobile})`,
            backgroundSize: "100%",
            height: "30vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "top",
          }}
        >
          <Typography
            variant="h4"
            color="initial"
            color="warning.main"
            align="center"
            fontWeight={700}
            mt={1}
          >
            Tokonomics
          </Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Game;
