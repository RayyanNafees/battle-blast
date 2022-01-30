import React from "react";
import Grid from "@mui/material/Grid";
import green from "../assets/green.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import "./overflow.css";
import Carousel from "react-material-ui-carousel";
import road1 from "../assets/road1.svg";
import road2 from "../assets/road2.svg";
import road3 from "../assets/road3.svg";
import road4 from "../assets/road4.svg";

const roadArr = [road1, road2, road3, road4].map((i, n) => (
  <div key={n}>
    <img src={i} width="100%" />
  </div>
));

function Roadmap() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${green})`,
            backgroundSize: "100%",
            height: "110vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
            backgroundColor: "black",
            overflow: "hidden",
          }}
          container
          fullWidth
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item xs={2} pt={5}>
            <Typography color="warning.main" variant="h2">
              Roadmap
            </Typography>
          </Grid>
          <Grid item container direction="column" px={10} xs={10}>
            <Carousel
              autoPlay={false}
              style={{
                height: "200px",
                width: "100%",
                "& img": {
                  height: "200px",
                  width: "-webkit-fill-available",
                },
              }}
            >
              <img src={road1} width="100%" />
              <img src={road2} width="100%" />
              <img src={road3} width="100%" />
              <img src={road4} width="100%" />
            </Carousel>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${green}) no-repeat`,
            // backgroundSize: "100%",
            height: "40vh",
            // backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // backgroundColor: "black",
          }}
          container
          fullWidth
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography color="warning.main" variant="h4">
              Roadmap
            </Typography>
          </Grid>
          <Grid item container direction="column" px={2}>
            <Carousel>{roadArr}</Carousel>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default Roadmap;
