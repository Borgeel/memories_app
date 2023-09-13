import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

const googleToken = JSON.parse(localStorage.getItem("profile"));

// Interceptor which enables us to use the middleware. Send the token to the backend in order for middleware to ensure user is logged in
API.interceptors.request.use((req) => {
  const user = localStorage.getItem("profile");

  if (user) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token || googleToken?.aud
    }`;
  }

  return req;
});

// POST REQUESTS
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.searchTerm || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const comment = (comment, id) =>
  API.post(`/posts/${id}/commentPost`, { comment });

// AUTHORIZATION
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
