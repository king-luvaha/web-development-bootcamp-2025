const express = require('express');
const app = express();

app.use(express.urlencoded({ extended:true }))

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
    console.log("Running on port 3000!");
})