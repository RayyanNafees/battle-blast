import React from "react";
import Grid from "@mui/material/Grid";
import green from "../assets/green.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
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
            backgroundSize: "100%",
            height: "22.5vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          container
          fullWidth
          justifyContent="center"
          alignItems="flex-start"
        >
          <img
            src={require("../assets/thestage.svg")}
            width="70%"
            height="70%"
          />
        </Grid>
      </Hidden>
    </>
  );
}

export default Game;
