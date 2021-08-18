import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCocktails } from "../store/singleCocktailDetails/actions";
import { Link, useParams } from "react-router-dom";
import useStyles from "../style";
import {
  Card,
  CardActions,
  Grid,
  Button,
  Container,
  Typography,
  CssBaseline,
  CardMedia,
  CardContent,
} from "@material-ui/core";

const SingleCocktail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sCocktailReducer);

  useEffect(() => {
    dispatch(fetchSingleCocktails(id));
  }, [id, dispatch]);

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
      {state.details.map((details) => {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
        } = details;

        return (
          <>
            <CssBaseline />
            <Container maxWidth="md" className={classes.cardGrid}>
              <Grid>
                <Card>
                  <section key={details.idDrink}>
                    <div>
                      <CardMedia
                        image={image}
                        title={name}
                        className={classes.img}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h3" paragraph color="secondary">
                          {name}
                        </Typography>

                        <Typography variant="h6" color="secondary" paragraph>
                          Category :{" "}
                          <Typography variant="span" color="textPrimary">
                            {category}
                          </Typography>
                        </Typography>

                        <Typography variant="h6" paragraph color="secondary">
                          Info :{" "}
                          <Typography variant="span" color="textPrimary">
                            {info}
                          </Typography>
                        </Typography>

                        <Typography variant="h6" paragraph color="secondary">
                          Glass :{" "}
                          <Typography variant="span" color="textPrimary">
                            {glass}
                          </Typography>
                        </Typography>

                        <Typography variant="h6" color="secondary">
                          Instructions :{" "}
                          <Typography variant="span" color="textPrimary">
                            {instructions}
                          </Typography>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link to="/" className={classes.link}>
                          <Button size="large" color="primary">
                            Back
                          </Button>
                        </Link>
                      </CardActions>
                    </div>
                  </section>
                </Card>
              </Grid>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default SingleCocktail;
