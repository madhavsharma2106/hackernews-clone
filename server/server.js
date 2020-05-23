import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import path from "path";
import fs from "fs";
import App from "../src/App";
import { StaticRouter } from "react-router-dom";

const PORT = 8000;
const app = express();

app.use("^/$", (req, res) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }

    const context = {};

    const app = (
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    return res.send(
      data.replace(
        `<div id="root"></div>`,
        `<div id="root">${ReactDOMServer.renderToString(app)}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`APP launched on ${PORT}`);
});
