import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import Form from "../Form/Form";
import Posts from "../Posts/Posts";

import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Home;
