import React from "react";
import presale from "../assets/presale.png";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
function Presale() {
  return (
    <Grid>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
        />
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "100%",
            height: "26vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
        />
      </Hidden>
    </Grid>
  );
}

export default Presale;
