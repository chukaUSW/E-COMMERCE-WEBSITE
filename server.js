const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve("public")));

//Sets our app to use the handlebars engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("index", { layout: "index" });
});
app.get("/products", (req, res) => {
  res.render("products", { layout: "index" });
});
app.get("/cart", (req, res) => {
  res.render("cart", { layout: "index" });
});
app.get("/checkout", (req, res) => {
  res.render("checkout", { layout: "index" });
});

app.listen(port, () => console.log("Server listening to port: " + port));
