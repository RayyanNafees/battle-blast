import React from "react";
import Grid from "@mui/material/Grid";
import terminology from "../assets/terminology.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import walk from "../assets/walk.svg";
import shield from "../assets/shield.svg";
import punch from "../assets/punch.svg";
import sword from "../assets/sword.svg";
import health from "../assets/health.svg";
function Terminology() {
  return (
    <>
      {/* <Hidden smDown> */}
      <Grid
        style={{
          background: `url(${terminology})`,
          backgroundSize: "100%",
          height: "220vh",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
        }}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          fullWidth
          md={2}
          mt={5}
          spacing={10}
        >
          <Grid item>
            <Typography
              variant="h2"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
            >
              Game Terminology
            </Typography>
          </Grid>
          <Grid item width="70%">
            <Typography
              variant="h5"
              color="initial"
              color="white"
              align="center"
              xs={5}
            >
              Game instance will be based on the attack of the monster and the
              level of the monster
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          spacing={8}
          md={8}
          mt={5}
        >
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            width="60%"
          >
            <Grid item xs={1.5}>
              <Typography sx={{ wordWrap: "break-word" }} variant="h6">
                THREE ATTACK MOVES
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <img src={punch} width="90%" />
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            width="60%"
          >
            <Grid item xs={3}>
              <img src={health} width="150%" />
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{ wordWrap: "break-word" }} variant="h6">
                MAX
                <br /> HEALTH
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            width="60%"
          >
            <Grid item md={1.5}>
              <Typography sx={{ wordWrap: "break-word" }} variant="h6">
                ATTACK DAMAGE
              </Typography>
            </Grid>
            <Grid item md={2}>
              <img src={sword} width="90%" />
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            width="60%"
          >
            <Grid item xs={2}>
              <img src={walk} width="90%" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">SPEED</Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            width="60%"
            pb={10}
          >
            <Grid item md={1.5}>
              <Typography sx={{ wordWrap: "break-word" }} variant="h6">
                Defence
              </Typography>
            </Grid>
            <Grid item md={2}>
              <img src={shield} width="90%" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Hidden> */}
      {/* <Hidden mdUp>
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
      </Hidden> */}
    </>
  );
}

export default Terminology;
