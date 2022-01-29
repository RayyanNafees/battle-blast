import React from "react";
import Grid from "@mui/material/Grid";
import nft from "../assets/nft.svg";
import nftMobile from "../assets/nft.mobile.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
function NFT() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${nft})`,
            backgroundSize: "100%",
            height: "125vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "top",
          }}
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item container justifyContent="flex-start">
            <Typography
              variant="h3"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
              fontFamily="Rammetto One"
              ml={5}
            >
              Battle Blast
              <br /> NFT Marketplace
              <br /> Coming Soon...
            </Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Typography
              variant="h5"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
              width="70%"
            >
              Explore the world of NFTs with Battle Blast Marketplace
              <br />
              <br />A peer to peer marketplace where you'll can buy sell and
              trade NFT and other items for development of your monsters. You
              can discover rare collectibles in marketplace too!
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${nft}) no-repeat`,
            // backgroundSize: "100%",
            height: "60vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item container justifyContent="flex-start" >
            <Typography
              variant="h6"
              color="initial"
              color="white"
              align="center"
              fontWeight={700}
              fontFamily="Rammetto One"
              // ml={5}
            >
              Battle Blast
              <br /> NFT Marketplace
              <br /> Coming Soon...
            </Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Typography
              variant="body2"
              color="initial"
              color="white"
              align="center"
              // fontWeight={700}
              width="70%"
            >
              Explore the world of NFTs with Battle Blast Marketplace
              <br />
              <br />A peer to peer marketplace where you'll can buy sell and
              trade NFT and other items for development of your monsters. You
              can discover rare collectibles in marketplace too!
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default NFT;
