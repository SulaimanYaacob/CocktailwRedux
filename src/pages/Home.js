import React from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
} from "@material-ui/core";
import { LocalBar } from "@material-ui/icons";
import useStyles from "../style";

function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalBar className={classes.icon} />
          <Typography variant="h6">Cocktails</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Cocktails
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Proident est commodo sit ad esse. Enim excepteur anim culpa ipsum
              eu sunt nostrud incididunt. Irure qui adipisicing veniam elit
              mollit tempor minim.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
}

export default Home;
