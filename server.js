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

const products = [
  {
    id: 1,
    title: "Mens Shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo quia nemo voluptatem doloremque, ipsam nesciunt.",
    price: 20,
    image: "/img/product-demo.jpeg",
  },
  {
    id: 2,
    title: "Polo Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo quia nemo voluptatem doloremque, ipsam nesciunt.",
    price: 10,
    image: "/img/product-demo.jpeg",
  },
  {
    id: 3,
    title: "USB Stick",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo quia nemo voluptatem doloremque, ipsam nesciunt.",
    price: 15,
    image: "/img/product-demo.jpeg",
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { products });
});
app.get("/products", (req, res) => {
  res.render("products", { products });
});
app.get("/cart", (req, res) => {
  res.render("cart");
});
app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.listen(port, () => console.log("Server listening to port: " + port));
