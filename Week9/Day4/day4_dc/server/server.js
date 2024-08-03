const express = require('express');
const cors = require('cors');
const app = express();

app.listen(5000, () => {
    console.log("listening on 5000");
  });

app.get("/api/hello", (req, res) => {
    res.json("Hello from Express");
  });

app.use(cors());
app.use(express.json());

app.post('/api/world', (req, res) => {
        // res.json(`I received your POST request. This is what you sent me: ${msg}`)
    console.log(req.body.title);
    res.send(`“I received your POST request. This is what you sent me: ${req.body.title}`);

});