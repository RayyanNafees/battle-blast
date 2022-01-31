import React from "react";
import Grid from "@mui/material/Grid";
import home from "../assets/home.svg";
import homeMobile from "../assets/home.mobile.svg";
import logo from "../assets/logo.svg";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Hidden from "@mui/material/Hidden";
import MenuIcon from "@mui/icons-material/Menu";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Home.css";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { useNavigate } from "react-router-dom";
import { currentUser, login, logOut } from "../connect";
import pdf from '../assets/whitepaper.pdf'
const links = {
  twitter: "https://twitter.com/battle_blast",
  instagram: "https://www.instagram.com/battle_blast_official/",
  facebook: "https://www.facebook.com/people/Battle-Blas/100077477974704/",
  youtube: "https://www.youtube.com/channel/UCgkP5YTEFN5bqUAfO_mzlxA",
  telegram: "https://t.me/battleblast",
};

const redir = (url) => () => (window.location.href = url);

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const nav = useNavigate();

  const [loggedIn, setLoggedIn] = React.useState(Boolean(currentUser));
  return (
    <>
      <Grid className="back">
        <Hidden smDown>
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
                <IconButton
                  style={{ color: "white" }}
                  onClick={redir(links.instagram)}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  style={{ color: "white" }}
                  onClick={redir(links.twitter)}
                >
                  <TwitterIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  style={{ color: "white" }}
                  onClick={redir(links.youtube)}
                >
                  <YouTubeIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  style={{ color: "white" }}
                  onClick={redir(links.telegram)}
                >
                  <TelegramIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item container sm={6} spacing={3} my={0.1}>
              <Grid item>
                <Button onClick={redir("/")}>Home</Button>
              </Grid>
              <Grid item>
                <Button onClick={() => window.open(pdf)}>Whitepaper</Button>
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
                  color="primary"
                  style={{ textTransform: "none" }}
                  onClick={() => {
                    if (!loggedIn) login().then(setLoggedIn);
                    else logOut().then(setLoggedIn);
                  }}
                >
                  {!loggedIn ? "Connect Wallet" : "Log Out"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container fullWidth justifyContent={"flex-end"} px={2} py={2}>
            <IconButton
              color="warning"
              sx={{ backgroundColor: "#EB6D45", color: "rgba(0,0,0,1)" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <img src={logo} style={{ height: "40vh", width: "40vw" }} />
              <Typography
                variant="h3"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
                p={6}
              >
                Battle Blast
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container justifyContent="center" alignItems="center">
            <Grid alignItems="center" justifyContent="center" mt={15}>
              <img src={logo} style={{ height: "30vh", width: "100%" }} />
              <Typography
                variant="h4"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
                mt={2}
              >
                Battle Blast
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          sx={{ width: "100%" }}
          icon={<EmojiPeopleIcon />}
        >
          Welcome to Battle Blast!
          <br />
          We are launching NFT based open world game soon...
          <br />
          Game demo is ready!
          <br />
          Let's get connected with our social media so that you won't miss our
          token presale, token public launch, NFT launch, game launch and many
          more!
          <br />
        </Alert>
      </Snackbar>
    </>
  );
}

export default Home;
