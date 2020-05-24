const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// Serve any static files
app.use(express.static(path.join(__dirname, "../build")));

// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`APP launched on ${PORT}`);
});
