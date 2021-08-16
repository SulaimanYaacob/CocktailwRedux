import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../store/actions";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  Grid,
  Button,
  Container,
  Typography,
  CssBaseline,
  CardMedia,
} from "@material-ui/core";
import useStyles from "../style";

const Cocktails = () => {
  const classes = useStyles();
  const dispatch = useDispatch(); // ! can be only used insde component
  const state = useSelector((state) => state.postsReducer); // access store
  // const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchCocktails());

    // dispatch(triggerDefault());
    // dispatch({ type: "stupid" });
  }, [dispatch]);

  if (state.loading) {
    return (
      <Typography
        variant="h3"
        align="center"
        color="textPrimary"
        style={{ marginTop: "20px" }}
      >
        Loading
      </Typography>
    );
  }

  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {state.items.map((el) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <div key={el.idDrink}>
                  <CardMedia
                    image={el.strDrinkThumb}
                    title={el.strDrink}
                    className={classes.img}
                  />
                  <CardActions>
                    <Link
                      to={`/cocktail/${el.idDrink}`}
                      className={classes.link}
                    >
                      <Button size="small" color="primary">
                        Details
                      </Button>
                    </Link>
                  </CardActions>
                  {/* <form onSubmit={onSubmitForm}>
                    <Link to={`/cocktail/${el.idDrink}`}>Details</Link>
                  </form> */}
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cocktails;
