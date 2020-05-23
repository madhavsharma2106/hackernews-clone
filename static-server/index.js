const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`APP launched on ${PORT}`);
});
