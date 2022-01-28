import React from "react";
import Grid from "@mui/material/Grid";
import deepblue from "../assets/deepblue.svg";
import dpMobile from "../assets/deepblue.mobile.png";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import pie from "../assets/pie_text.svg";
import Box from "@mui/material/Box";

const TextBox = ({ title, value }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Grid item xs mx={5}>
      <Box
        sx={{
          px: 10,
          py: 4,
          backgroundColor: hover ? "#4d88ac" : "#39627B",
          border: "2px solid #FFFFFF",
          transition: "0.5s",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Typography variant="h6">{hover ? value : title}</Typography>
      </Box>
    </Grid>
  );
};

const data = Object.entries({
  supply: "10,000,000",
  charity: "2%",
  marketing: "4%",
  liq: "4%",
});

function Tokenomics() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${deepblue})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          container
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Typography variant="h2" align="center" fontWeight={700} gutterBottom>
            Tokenomics
          </Typography>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="space-evenly"
          >
            {data.map(([k, v], n) => (
              <TextBox title={k.toUpperCase()} value={v} key={n} />
            ))}
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${dpMobile})`,
            backgroundSize: "150%",
            height: "50vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "top",
          }}
          justifyContent="center"
          alignItems="flex-start"
          container
          pt={1}
        >
          <Grid
            container
            direction="column"
            item
            alignItems="center"
            justifyContent="center"
            spacing={6}
          >
            <Grid item mt={2}>
              <Typography
                variant="h5"
                color="initial"
                color="warning.main"
                align="center"
                fontWeight={700}
                mt={1}
              >
                Tokonomics
              </Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="center">
              <img src={pie} width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default Tokenomics;
