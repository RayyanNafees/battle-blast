import React from "react";
import Grid from "@mui/material/Grid";
import deepblue from "../assets/deepblue.svg";
import dpMobile from "../assets/deepblue.mobile.png";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import pie from "../assets/pie_text.svg";
import Box from "@mui/material/Box";
import { ClickAwayListener } from "@mui/material";

const TextBox = ({ title, value }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Grid item xs mx={5}>
      <Box
        sx={{
          textAlign: "center",
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

const TextBoxMobile = ({ title, value, focussed, setFocussed }) => {
  const hover = focussed === title;
  return (
    <Grid item xs={4} mx={1} my={1}>
      <Box
        sx={{
          textAlign: "center",
          py: 2,
          backgroundColor: hover ? "#4d88ac" : "#39627B",
          border: "2px solid #FFFFFF",
          transition: "0.5s",
        }}
        onClick={() => {
          setFocussed(title);
        }}
      >
        <Typography variant="caption">{hover ? value : title}</Typography>
      </Box>
    </Grid>
  );
};

const data = Object.entries({
  supply: "10,000,000",
  "charity tax": "2%",
  "marketing tax": "4%",
  "Liquidity tax": "4%",
});

function Tokenomics() {
  const [focussed, setFocussed] = React.useState(null);
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
            background: `url(${deepblue}) no-repeat`,
            // backgroundSize: "100%",
            height: "60vh",
            // backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
          container
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            Tokenomics
          </Typography>
          <ClickAwayListener onClickAway={() => setFocussed(null)}>
            <Grid
              item
              container
              alignItems="center"
              justifyContent="space-evenly"
            >
              {data.map(([k, v], n) => (
                <TextBoxMobile
                  title={k.toUpperCase()}
                  value={v}
                  key={n}
                  focussed={focussed}
                  setFocussed={setFocussed}
                />
              ))}
            </Grid>
          </ClickAwayListener>
        </Grid>
      </Hidden>
    </>
  );
}

export default Tokenomics;
