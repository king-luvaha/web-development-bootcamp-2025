const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!")
//     res.send("HELLO, WE GOT A NEW REQUEST");
// })

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
});

app.get('/hello', (req, res) => {
    res.send('Hello, New World!')
})

app.get('/status', (req, res) => {
    res.status(404).send('Not Found');
})