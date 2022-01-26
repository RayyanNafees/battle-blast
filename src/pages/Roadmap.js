import React from "react";
import Grid from "@mui/material/Grid";
import green from "../assets/green.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import road from "../assets/thestage.svg";
function Game() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${green})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          container
          fullWidth
          justifyContent="center"
          alignItems="flex-start"
        >
          <img
            src={require("../assets/road.png")}
            style={{ width: "70%", height: "70%" }}
          />
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${green})`,
            backgroundSize: "200%",
            height: "32.5vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
          container
          fullWidth
          justifyContent="center"
          alignItems="center"
        >
          <img src={road} width="90%" height="90%" />
        </Grid>
      </Hidden>
    </>
  );
}

export default Game;
