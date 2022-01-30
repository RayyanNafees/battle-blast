import React from "react";
import Grid from "@mui/material/Grid";
import qna from "../assets/qna.svg";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

const data = Object.entries({
  "What is game about?": `This is play to earn metaverse based game where, Game is about fighting with using your owned monsters on battlefield arena and earn rewards in form of Battle Blast tokens.`,
  "How can I start playing?":
    "You need to own at least 1 monster NFT to begin your journey when the game launches. You can get basic starter monsters from our website dashboard. You can buy monster from marketplace or through our booster pack sale.",
  " How can I increase price of my monster NFT?":
    "You can level up your monster by staking it on dashboard or by playing game.",
});

function QNA() {
  return (
    <>
      <Hidden smDown>
        <Grid
          style={{
            background: `url(${qna})`,
            backgroundSize: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
          // pt={70}
          container
          direction="column"
          py={10}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {data.map(([ques, ans], n) => (
            <Grid item width="70%" key={n}>
              <Typography
                variant="h6"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
                gutterBottom
              >
                {n + 1}. {ques}
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
              >
                {ans}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          style={{
            background: `url(${qna})`,
            backgroundSize: "300%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          // pt={70}
          container
          direction="column"
          py={10}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {data.map(([ques, ans], n) => (
            <Grid item width="70%" key={n}>
              <Typography
                variant="body2"
                color="initial"
                color="white"
                align="center"
                fontWeight={700}
                gutterBottom
              >
                {n + 1}. {ques}
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                color="white"
                align="center"
                // fontWeight={700}
              >
                {ans}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Hidden>
    </>
  );
}

export default QNA;
