import React from "react";
import Grid from "@mui/material/Grid";
import game from "../assets/game.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
function Game() {
  return (
    <Grid>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${game})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          pt={70}
        >
          <Typography
            variant="h2"
            color="initial"
            color="white"
            align="center"
            fontWeight={700}
          >
            Coming Soon
          </Typography>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${game})`,
            backgroundSize: "100%",
            height: "25vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          pt={15}
        >
          <Typography
            variant="h4"
            color="initial"
            color="white"
            align="center"
            fontWeight={700}
          >
            Coming Soon
          </Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Game;
