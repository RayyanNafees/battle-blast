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
import { useNavigate } from "react-router-dom";

const links = {
  twitter: "https://twitter.com/battle_blast",
  instagram: "https://www.instagram.com/battle_blast_official/",
  facebook: "https://www.facebook.com/people/Battle-Blas/100077477974704/",
  youtube: "https://www.youtube.com/channel/UCgkP5YTEFN5bqUAfO_mzlxA",
  telegram: "https://t.me/battleblast",
};

const redir = (url) => () => (window.location.href = url);

function Game() {
  const nav = useNavigate();
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
            <Typography
              variant="subtitle2"
              color="text.primary"
              onClick={() => nav("/")}
            >
              Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="text.primary" onClick={()=> nav('/whitepaper')}>
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
            <IconButton
              style={{ color: "black" }}
              onClick={redir(links.facebook)}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              style={{ color: "black" }}
              onClick={redir(links.instagram)}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              style={{ color: "black" }}
              onClick={redir(links.twitter)}
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              style={{ color: "black" }}
              onClick={redir(links.youtube)}
            >
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              style={{ color: "black" }}
              onClick={redir(links.telegram)}
            >
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
