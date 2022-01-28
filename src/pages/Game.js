import React from "react";
import Grid from "@mui/material/Grid";
import game from "../assets/catch.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
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
          direction="column"
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item >
            <Typography
              variant="h2"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
            >
              Game <br /> Under Development
            </Typography>
          </Grid>
          <Grid item width="70%" xs={5}>
            <Typography
              variant="h5"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
            >
              Main product and utility of Battle Blast is P2P game where player
              can earn money by playing game by fighiting with their monsters in
              battlefield arena. Game will get regular updates and features to
              improve the gaming experience for everyone
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${game})`,
            backgroundSize: "150%",
            height: "38vh",
            backgroundRepeat: "no-repeat",
            // backgroundPositionY: "bottom",
            backgroundPosition: "center",
          }}
          alignItems="flex-end"
          container
          item
          justifyContent="center"
          pb={2}
        >
          <Typography
            variant="h5"
            color="initial"
            color="white"
            align="center"
            fontWeight={700}
          >
            Game Under Construction
          </Typography>
        </Grid>
      </Hidden>
    </>
  );
}

export default Game;
