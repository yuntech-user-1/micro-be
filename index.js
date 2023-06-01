var request = require('request');
var cors = require('cors');
// Add Express
const express = require("express");
// Initialize Express
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    const q = req.query.q;
    request(`https://dummyjson.com/users/search?q=${q}`, function(error, response, body) {
      res.send({
        users: JSON.parse(body).users.map(({firstName, lastName}) => ({
          firstName, lastName
        }))
      });
    });
});

app.get("/add", (req, res) => {
    res.send((1+2).toString());
});

// Initialize server
app.listen(1234, () => {
    console.log("Running on port 1234.");
});

// Export the Express API
module.exports = app;