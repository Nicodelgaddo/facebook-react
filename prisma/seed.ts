const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Creando proveedores
  const supplier1 = await prisma.supplier.create({
    data: {
      name: 'Ferretería Central',
      email: 'contacto@ferreteria-central.com',
      phone: '123-456-7890'
    }
  });

  const supplier2 = await prisma.supplier.create({
    data: {
      name: 'Proveeduría Norte',
      email: 'ventas@proveedurianorte.com',
      phone: '987-654-3210'
    }
  });

  // Creando productos
  const product1 = await prisma.product.create({
    data: {
      name: 'Martillo de Acero',
      category: 'Herramientas',
      sku: 'MART-001'
    }
  });

  const product2 = await prisma.product.create({
    data: {
      name: 'Destornillador Phillips',
      category: 'Herramientas',
      sku: 'DEST-002'
    }
  });

  const product3 = await prisma.product.create({
    data: {
      name: 'Cinta Aislante',
      category: 'Electricidad',
      sku: 'CINTA-003'
    }
  });

  // Asociando productos a proveedores con precios
  await prisma.productSupplier.createMany({
    data: [
      { productId: product1.id, supplierId: supplier1.id, price: 12.99 },
      { productId: product1.id, supplierId: supplier2.id, price: 13.50 },
      { productId: product2.id, supplierId: supplier1.id, price: 5.25 },
      { productId: product2.id, supplierId: supplier2.id, price: 5.10 },
      { productId: product3.id, supplierId: supplier1.id, price: 2.75 },
    ],
  });

  console.log('✅ Seeding completed.');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
