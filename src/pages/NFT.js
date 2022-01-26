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
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          pt={70}
        >
          <Typography
            variant="h2"
            color="initial"
            color="white"
            align="center"
            fontWeight={700}
          >
            Coming Soon
          </Typography>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${nftMobile})`,
            backgroundSize: "100%",
            height: "38vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
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
            fontWeight={500}
          >
            Coming Soon
          </Typography>
        </Grid>
      </Hidden>
    </>
  );
}

export default NFT;
