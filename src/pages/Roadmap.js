import React from "react";
import Grid from "@mui/material/Grid";
import green from "../assets/green.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import road from "../assets/road-front.svg";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
function Roadmap() {
  const ref = React.useRef();
  return (
    <>
      {/* <Hidden smDown> */}
      <Grid
        style={{
          background: `url(${green})`,
          backgroundSize: "100%",
          height: "110vh",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
          backgroundColor: "black",
        }}
        container
        fullWidth
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography color="warning.main" variant="h2">
            Roadmap
          </Typography>
        </Grid>
        <Grid item sx={{ overflowX: "scroll" }} ml={5} container ref={ref}>
          <IconButton onClick={() => ref.current.scrollBy(-100, 0)}>
            <ChevronLeft fontSize="large"/>
          </IconButton>
          <img src={road} width="200%" />
          <IconButton onClick={() => ref.current.scrollBy(100, 0)}>
            <ChevronRight fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
      {/* </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${green})`,
            backgroundSize: "200%",
            height: "35vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          container
          fullWidth
          justifyContent="center"
          alignItems="center"
        >
          <img src={road} width="100%" />
        </Grid>
      </Hidden> */}
    </>
  );
}

export default Roadmap;
