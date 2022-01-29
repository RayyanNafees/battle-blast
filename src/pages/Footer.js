import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

function Game() {
  return (
    <Grid
      style={{
        backgroundColor: `#fff`,
        backgroundStyle: "cover",
        width: "100vw",
        height: "60vh",
      }}
      justifyContent="flex-start"
      alignItems="center"
      container
      direction="column"
    >
      <Grid
        item
        style={{
          height: "30vh",
          width: "100vw",
          background: "black",
          borderRadius: "0px 0px 850px 850px / 0px 0px 200px 200px",
        }}
        mb={10}
      />
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        fullWidth
        direction="row"
        width="90%"
      >
        <Grid item container sm={4} justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle2" color="text.primary">
              Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="text.primary">
              Whitepaper
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="text.primary">
              NFT
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="text.primary">
              Marketplace
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sm={3} justifyContent="space-between">
          <Grid item>
            <IconButton style={{ color: "black" }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "black" }}>
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "black" }}>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "black" }}>
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ color: "black" }}>
              <TelegramIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        bgcolor="rgba(0,0,0,0.3)"
        sx={{ height: 1.5, width: "90%" }}
        my={7}
      />
      <Grid container justifyContent="space-between" sx={{ width: "90%" }}>
        <Grid item xs>
          <Typography variant="caption" color="text.primary">
            © 2022 Battle Blast. All rights reserved.
          </Typography>
        </Grid>
        <Grid item container xs={2} justifyContent="space-between">
          <Grid item>
            <Typography variant="caption" color="text.primary">
              Terms of Service
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="text.primary">
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Game;
