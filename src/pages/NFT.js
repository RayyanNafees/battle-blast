import React from "react";
import Grid from "@mui/material/Grid";
import nft from "../assets/nft.svg";
import Typography from "@mui/material/Typography";
function NFT() {
  return (
    <Grid>
      <Grid
        style={{
          backgroundImage: `url(${nft})`,
        //   backgroundStyle: "cover",
          height: "100vh",
          width: "100vw",
        }}
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
