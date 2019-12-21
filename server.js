const express = require("express");
const path = require("path");
const app = express();
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
const compression = require("compression");

app.use(compression());
// Don't redirect if the hostname is `localhost:port` or the route is `/insecure`
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

//handle all URLs
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
