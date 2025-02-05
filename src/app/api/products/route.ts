import { NextResponse } from "next/server";
import { getProducts } from "@/lib/products";

export async function GET() {
  try {
    const products = await getProducts();
    console.log(products)
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error obteniendo productos:", error.stack);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
