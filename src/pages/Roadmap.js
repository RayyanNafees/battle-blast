import React from "react";
import Grid from "@mui/material/Grid";
import green from "../assets/green.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
function Game() {
  return (
    <Grid>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${green})`,
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
            Roadmap
          </Typography>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${green})`,
            backgroundSize: "100%",
            height: "22.5vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          justifyContent="center"
          alignItems="center"
          pl={10}
          pt={2}
        >
          <img
            src={require("../assets/thestage.png")}
            width="70%"
            height="60%"
          />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Game;
