const express = require("express");
const path = require("path");
const app = express();
const PORT = 9000;

app.use(express.static(path.resolve(__dirname, "..", "storybook-static")));

app.listen(PORT, () => {
  console.log(`APP launched on ${PORT}`);
});
