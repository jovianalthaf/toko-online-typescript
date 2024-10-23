import express, { Application } from "express";
import productRoutes from "./routes/productRoutes";

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use("/products", productRoutes);
app.listen(PORT, () => {
  console.log(`Server running on <http://localhost>:${PORT}`);
});
