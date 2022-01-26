import React from "react";
import Grid from "@mui/material/Grid";
import game from "../assets/game.svg";
import Typography from "@mui/material/Typography";
function Game() {
  return (
    <Grid>
      <Grid
        style={{
            background: `center no-repeat url(${game})`,
            backgroundSize: "contain",
            height: "100vh",
            minWidth: "100vw",
            objectFit: "contain",
        }}
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
    </Grid>
  );
}

export default Game;
