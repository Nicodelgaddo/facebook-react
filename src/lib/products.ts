import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProducts() {
  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      imageUrl: true,
      suppliers: {
        select: {
          price: true,
          supplier: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
}
