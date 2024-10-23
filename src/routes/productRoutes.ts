import { Router } from "express";

const router = Router();
let products = [
  { id: 1, name: "Laptop", price: 15000000 },
  { id: 2, name: "Headset", price: 1500000 },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

export default router;
