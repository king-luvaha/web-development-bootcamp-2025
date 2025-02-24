const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Dummy Data
let posts = [
    { id: 1, title: "Post 1", body: "This is post 1" },
    { id: 2, title: "Post 2", body: "This is post 2" }
];

// GET all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET a single post by ID
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

// POST a new post
app.post('/posts', (req, res) => {
    const newPost = { id: posts.length + 1, ...req.body };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT (update) a post
app.put('/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        posts[index] = { id: posts[index].id, ...req.body };
        res.json(posts[index]);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

//DELETE a post
app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: "Post deleted" });
});

// Fetch data from an external API
app.get('/external', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching external data" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});