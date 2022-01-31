import React from "react";
import Grid from "@mui/material/Grid";
import game from "../assets/catch.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import ash from "../assets/ash.svg";
function Game() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${game})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6}>
            <img src={ash} style={{ width: "30vw", height: "80vh" }} />
          </Grid>
          <Grid item width="70%" md={6} alignSelf="flexStart">
            <Typography
              variant="h2"
              color="initial"
              color="white"
              align="left"
              sx={{ fontFamily: "Rock Salt" }}
              gutterBottom
            >
              Collect 'em all!
            </Typography>
            <Typography variant="h6" align="left">
              There will be around 36 monsters <br />
              3 starter pack <br />
              2 booster packs with 3 monsters each
              <br />
              Many more to be announced!
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${game})`,
            backgroundSize: "150%",
            height: "40vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6}>
            <img src={ash} style={{ width: "30vw" }} />
          </Grid>
          <Grid item width="70%" md={6} alignSelf="flexStart">
            <Typography
              variant="h6"
              color="initial"
              color="white"
              align="left"
              sx={{ fontFamily: "Rock Salt" }}
              gutterBottom
            >
              Collect 'em all!
            </Typography>
            <Typography variant="body2" align="left">
              There will be around 36 monsters <br />
              3 starter pack <br />
              2 booster packs with 3 monsters each
              <br />
              Many more to be announced!
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default Game;
