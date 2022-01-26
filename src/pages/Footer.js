import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";

function Game() {
  return (
    <Grid mt={-2}>
      <Grid
        style={{
          backgroundColor: `#404D93`,
          backgroundStyle: "cover",
          width: "100vw",
        }}
        justifyContent="center"
        alignItems="center"
        container
        direction="column"
        py={4}
      >
        <Grid item>
          <Hidden smDown>
            <Typography
              variant="h4"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
              gutterBottom
            >
              Battle Blast
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography
              variant="h5"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
            >
              Battle Blast
            </Typography>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          md={6}
          sm={2}
          my={0.01}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <Hidden smDown>
                <InstagramIcon fontSize="large" />
              </Hidden>
              <Hidden mdUp>
                <InstagramIcon />
              </Hidden>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <Hidden smDown>
                <TwitterIcon fontSize="large" />
              </Hidden>
              <Hidden mdUp>
                <TwitterIcon />
              </Hidden>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <Hidden smDown>
                <YouTubeIcon fontSize="large" />
              </Hidden>
              <Hidden mdUp>
                <YouTubeIcon />
              </Hidden>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <Hidden smDown>
                <TelegramIcon fontSize="large" />
              </Hidden>
              <Hidden mdUp>
                <TelegramIcon />
              </Hidden>
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="caption"
            color="initial"
            color="white"
            align="center"
            fontWeight={700}
          >
            copyright ©2022 BattelBast
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Game;
