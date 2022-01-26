import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function Game() {
  return (
    <Grid>
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
        py={5}
      >
        <Grid item>
          <Typography
            variant="h4"
            color="initial"
            color="white"
            align="center"
            fontWeight={700}
          >
            Battle Blast
          </Typography>
        </Grid>
        <Grid
          item
          container
          spacing={3}
          sm={6}
          my={0.1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "white" }}>
              <TelegramIcon fontSize="large" />
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
