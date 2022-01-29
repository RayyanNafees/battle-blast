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
        <Grid item container direction="column" px={10}>
          <Grid
            item
            sx={{ overflowX: "scroll" }}
            width="200%"
            container
            ref={ref}
          >
            <img src={road} width="100%" />
          </Grid>
          <Grid item container fullWidth justifyContent="space-between">
            <Grid item>
              <IconButton
                onClick={() => ref.current.scrollBy(-100, 0)}
                sx={{ color: "white" }}
              >
                <ChevronLeft fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => ref.current.scrollBy(100, 0)}
                sx={{ color: "white" }}
              >
                <ChevronRight fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
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
