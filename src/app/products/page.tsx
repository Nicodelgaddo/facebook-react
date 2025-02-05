"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type SupplierInfo = {
  supplier: { name: string };
  price: number;
};

type Product = {
  id: string;
  name: string;
  category: string | null;
  suppliers: SupplierInfo[];
  imageUrl?: string; // Nuevo campo opcional para la imagen
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Cargando productos...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((producto) => (
          <ProductCard
            key={producto.id}
            name={producto.name}
            category={producto.category}
            suppliers={producto.suppliers}
            imageUrl={producto.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
