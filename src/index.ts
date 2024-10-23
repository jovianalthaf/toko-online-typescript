// import express, { Application } from "express";
// import productRoutes from "./routes/productRoutes";

// const app: Application = express();
// const PORT = 3000;

// app.use(express.json());
// app.use("/products", productRoutes);
// app.listen(PORT, () => {
//   console.log(`Server running on <http://localhost>:${PORT}`);
// });

enum ProductCategory {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Groceries = "Groceries",
}

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: ProductCategory;
}

let products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 2000000,
    stock: 15,
    category: ProductCategory.Electronics,
  },
  {
    id: 2,
    name: "Baju",
    price: 150000,
    stock: 20,
    category: ProductCategory.Clothing,
  },
  {
    id: 3,
    name: "Rice",
    price: 100,
    stock: 100,
    category: ProductCategory.Groceries,
  },
];

function addProduct(newProduct: Product): Product[] {
  products.push(newProduct);
  return products;
}
// nambah product
// const newProduct: Product = {
//   id: 4, // Pastikan ID unik
//   name: "Kemeja",
//   price: 200000,
//   stock: 30,
//   category: ProductCategory.Clothing,
// };
// const addProducts = addProduct(newProduct);
// console.log(addProducts);

function updateProduct(id: number, updatedFields: Partial<Product>): Product[] {
  try {
    const productIndex = products.findIndex((product) => product.id === id);
    // mencari index dari array, contoh index -1 yaitu tidak ada dalam array
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...updatedFields };
    } else {
      // Menangani situasi jika produk tidak ditemukan
      throw new Error(`Product with ID ${id} not found.`);
    }
    return products;
  } catch (error) {
    // Menangani kesalahan
    const errorMessage = (error as Error).message || "Unknown error occurred.";
    console.error("Error updating product:", errorMessage);
    return products; // Mengembalikan array produk yang tidak berubah
  }
}
// const updatedFieldss: Partial<Product> = {
//   name: "ini kemeja", // Pastikan ID unik
// };

// const updatedNameProduct = updateProduct(4, updatedFieldss);

// console.log(updatedNameProduct);

function deleteProduct(id: number): Product[] {
  products = products.filter((product) => product.id !== id);
  return products;
}

function calculateTotalPrice(
  price: number,
  quantity: number = 1,
  discount?: number
): number {
  let total = price * quantity;
  if (discount) {
    total = total - (total * discount) / 100;
  }
  return total;
}
// const totalPrice1 = calculateTotalPrice(15000, 2);
// const totalPrice2 = calculateTotalPrice(200, 5, 10);

// console.log(totalPrice1);
// // total = 1000 - (1000*10) / 100 = 900
// console.log(totalPrice2);

const displayAvailableProducts = (): void => {
  products.forEach((product) => {
    console.log(
      `Product: ${product.name},Price: ${product.price},Stock : ${product.stock}, Category: ${product.category}`
    );
  });
};

const filterProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter((product) => {
    product.category === category;
  });
};

displayAvailableProducts();
// console.log("ini display available product: ", displayAvailableProducts());

const electronicsProducts = filterProductsByCategory(
  ProductCategory.Electronics
);
console.log(electronicsProducts);
