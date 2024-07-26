const express = require("express");
const path = require("path");
const ejsLayout = require("express-ejs-layouts");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve("public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(ejsLayout);
app.set("layout", "layouts/layout");

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/products", (req, res) => {
  res.render("products");
});
app.get("/cart", (req, res) => {
  res.render("cart");
});
app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.listen(port, () => console.log("Server listening to port: " + port));
