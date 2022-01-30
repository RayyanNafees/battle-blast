import React from "react";
import presale from "../assets/presale3.svg";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import front from "../assets/presale-front.svg";
import Typography from "@mui/material/Typography";
import dragon from "../assets/dragon.png";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

const classes = {
  presale: {
    fontFamily: 'Rammetto One", "Poppins", Arial, Helvetica, sans-serif',
    fontSize: 85,
    textShadow:
      "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
  },
  time: {
    fontFamily: 'Rasa", "Poppins", Arial, Helvetica, sans-serif',
    fontSize: 30,
    // lineHeight: 90,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 29,
    // lineHeight: 43,
    color: "white",
  },
};

const mobClasses = {
  presale: {
    fontFamily: 'Rammetto One", "Poppins", Arial, Helvetica, sans-serif',
    fontSize: 30,
    textShadow:
      "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
  },
  time: {
    fontFamily: 'Rasa", "Poppins", Arial, Helvetica, sans-serif',
    fontSize: 20,
    // lineHeight: 90,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 19,
    // lineHeight: 43,
    color: "white",
  },
};

function Presale() {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const intv = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(intv);
    };
  }, []);
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "100%",
            height: "150vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "black",
          }}
          container
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-start"
        >
          <Grid item mb={-20} pr={5}>
            <Typography
              style={classes.presale}
              color="primary.main"
              variant="h3"
            >
              PRE-SALE
            </Typography>

            <Typography style={classes.time} variant="h4">
              {new Date().toLocaleTimeString().toLowerCase()}
            </Typography>
          </Grid>{" "}
          <Grid
            item
            pt={10}
            mb={-75}
            container
            alignItems="flex-end"
            justifyContent="flex-start"
          >
            <img src={dragon} width="40%" />
          </Grid>
          <Grid item>
            <img src={front} style={{ width: "100vw" }} />
          </Grid>
          <Grid
            item
            container
            fullWidth
            alignItems="center"
            justifyContent="center"
            mt={-30}
          >
            <Typography style={classes.subtitle} variant="subtitle1">
              Presale Price:
              <br />
              1 BNB =5700 BB TOKENS
              <br />
              PRICE = 0.07$ (Approx)
              <br />
              LAUNCH PRICE = 0.2$ (Approx)
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${presale})`,
            backgroundSize: "200%",
            height: "70vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "black",
          }}
          container
          direction="column"
          alignItems="flex-end"
          justifyContent="flex-start"
        >
          <Grid
            item
            container
            justifyContent="space-between"
            alignItems="center"
            fullWidth
            direction="row-reverse"
            p={5}
            pb={0}
            mb={-10}
          >
            <Grid item container direction="column" xs={6}>
              <Grid item>
                <Typography
                  style={mobClasses.presale}
                  color="primary.main"
                  variant="body1"
                >
                  PRE-SALE
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={mobClasses.time} variant="h6">
                  {/* {date
                    .toLocaleTimeString()
                    .toLowerCase()
                    .replace(/(am|pm)/g, "")} */}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              <img src={dragon} width="100%" />
            </Grid>
          </Grid>
          <Grid item>
            <img src={front} style={{ width: "100vw" }} />
          </Grid>
          <Grid
            item
            container
            fullWidth
            alignItems="center"
            justifyContent="center"
            // mt={-30}
          >
            <Typography style={mobClasses.subtitle} variant="subtitle1">
              Presale Price:
              <br />
              1 BNB =5700 BB TOKENS
              <br />
              PRICE = 0.07$ (Approx)
              <br />
              LAUNCH PRICE = 0.2$ (Approx)
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default Presale;
