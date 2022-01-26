import React from "react";
import Grid from "@mui/material/Grid";
import green from "../assets/green.svg";
import Typography from "@mui/material/Typography";
function Game() {
  return (
    <Grid>
      <Grid
        style={{
          backgroundImage: `url(${green})`,
          backgroundStyle: "cover",
          height: "100vh",
          width: "100vw",
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
    </Grid>
  );
}

export default Game;
