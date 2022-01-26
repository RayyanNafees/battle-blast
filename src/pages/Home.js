import React from "react";
import Grid from "@mui/material/Grid";
import home from "../assets/home.svg";
import logo from "../assets/logo.svg";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function Home() {
  return (
    <Grid>
      <Grid
        style={{
          backgroundImage: `url(${home})`,
          backgroundStyle: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          fullWidth
          direction="row"
          mb={25}
        >
          <Grid item container spacing={3} sm={6} my={0.1}>
            <Grid item>
              <img src={logo} style={{ width: 50, height: 50 }} />
            </Grid>
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
          <Grid item container sm={6} spacing={3} my={0.1}>
            <Grid item>
              <Button>Home</Button>
            </Grid>
            <Grid item>
              <Button>Whitepaper</Button>
            </Grid>
            <Grid item>
              <Button>NFT</Button>
            </Grid>
            <Grid item>
              <Button>Marketplace</Button>
            </Grid>
            <Grid item>
              <Button>Community</Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                bgColor="orange"
                style={{ textTransform: "none" }}
              >
                Connect Wallet
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center">
          <Grid alignItems="center" justifyContent="center">
            <img src={logo} style={{ height: "40vh", width: "40vw" }} />
            <Typography
              variant="h2"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
            >
              Battle Blast
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
