import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

// Internal
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPostBySearch, getPosts } from "../../actions/posts";

// Components
import Paginate from "../Pagination/Pagination";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const [currentId, setCurrentId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const query = useQuery();

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  // Search Post
  const searchPost = () => {
    if (searchTerm.trim()) {
      dispatch(getPostBySearch({ searchTerm, tags: tags.join(",") }));
    } else {
      history.push("/");
    }
  };

  // Search upon pressing Enter
  const keyDownHandler = (e) => {
    if (e.code === "Enter") {
      searchPost();
    }
  };

  // Add Tag
  const addHandler = (tag) => {
    setTags((prevTags) => [...prevTags, tag]);
  };

  // Delete Tag
  const deleteHandler = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            className={classes.gridContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8} md={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  variant="outlined"
                  label="Search Memories"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={keyDownHandler}
                  fullWidth
                />
                <ChipInput
                  style={{ margin: "10px 0" }}
                  value={tags}
                  onAdd={addHandler}
                  onDelete={deleteHandler}
                  label="Search Tags"
                  variant="outlined"
                />
                <Button
                  onClick={searchPost}
                  color="primary"
                  variant="contained"
                >
                  Search
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <Paginate />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
};

export default Home;
