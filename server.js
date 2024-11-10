const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the API server. use /items to fetch data.");
});

app.get("/items", async (req, res) => {
  fs.readFile("./items.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
