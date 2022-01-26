import React from "react";
import presale from "../assets/presale2.svg";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
function Presale() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor:'black'
          }}
        />
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "100%",
            height: "35vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
            backgroundColor: "black",
          }}
        />
      </Hidden>
    </>
  );
}

export default Presale;
