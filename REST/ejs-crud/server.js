const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method")); // Allows PUT & DELETE from forms
app.set("view engine", "ejs");

// Dummy Database (Simulated with an Array)
let posts = [
  { id: 1, title: "First Post", body: "This is the first post" },
  { id: 2, title: "Second Post", body: "This is the second post" },
];

// Routes

// Home - Redirect to /posts
app.get("/", (req, res) => {
  res.redirect("/posts");
});

// Read All Posts
app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

// Show Form to Create a New Post
app.get("/posts/new", (req, res) => {
  res.render("new-post");
});

// Create a New Post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1, // Auto-increment ID
    title: req.body.title,
    body: req.body.body,
  };
  posts.push(newPost);
  res.redirect("/posts");
});

// Show Single Post
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("show-post", { post });
});

// Show Edit Form
app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");
  res.render("edit-post", { post });
});

// Update Post (PUT)
app.put("/posts/:id", (req, res) => {
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send("Post not found");

  posts[postIndex] = {
    id: parseInt(req.params.id),
    title: req.body.title,
    body: req.body.body,
  };

  res.redirect("/posts");
});

// Delete Post
app.delete("/posts/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== parseInt(req.params.id));
  res.redirect("/posts");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
