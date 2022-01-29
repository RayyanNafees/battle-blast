import React from "react";
import Grid from "@mui/material/Grid";
import unity from "../assets/unity.svg";
import pics from "../assets/sponsors.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

function Dev() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `black`,
          }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          py={10}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            pb={10}
          >
            <Grid item>
              <Typography
                variant="h6"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
                gutterBottom
              >
                Dev-Tool
              </Typography>
            </Grid>
            <Grid
              item
              container
              fullWidth
              justifyContent="center"
              alignItems="center"
              mt={5}
              mb={15}
            >
              <img src={unity} width="40%" />
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h6"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
              >
                PROMOTION AND LISTING
              </Typography>
            </Grid>
            <Grid
              item
              container
              fullWidth
              justifyContent="center"
              alignItems="center"
              mt={5}
            >
              <img src={pics} width="60%" />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `black`,
          }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          pt={10}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            pb={5}
          >
            <Grid item>
              <Typography
                variant="h6"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
                gutterBottom
              >
                Dev-Tool
              </Typography>
            </Grid>
            <Grid
              item
              container
              fullWidth
              justifyContent="center"
              alignItems="center"
              mt={5}
              mb={10}
            >
              <img src={unity} width="50%" />
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="body2"
                color="initial"
                color="white"
                align="center"
                fontWeight={100}
                gutterBottom
              >
                PROMOTION AND LISTING
              </Typography>
            </Grid>
            <Grid
              item
              container
              fullWidth
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              <img src={pics} width="80%" />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default Dev;
