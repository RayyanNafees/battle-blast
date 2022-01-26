import React from "react";
import Grid from "@mui/material/Grid";
import nft from "../assets/nft.svg";
import Typography from "@mui/material/Typography";
function NFT() {
  return (
    <Grid>
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
    </Grid>
  );
}

export default NFT;
