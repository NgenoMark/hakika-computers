import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import products from "./products.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Placeholder endpoints for cart, wishlist, checkout, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
