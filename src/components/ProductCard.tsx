type SupplierInfo = {
  supplier: { name: string };
  price: number;
};

type ProductProps = {
  name: string;
  category?: string;
  suppliers: SupplierInfo[];
  imageUrl?: string;
};

export default function ProductCard({ name, category, suppliers, imageUrl }: ProductProps) {
  const lowestPrice = suppliers.length
    ? Math.min(...suppliers.map((s) => s.price))
    : null;

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-48 object-contain bg-gray-100 p-2" />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-500">
          Sin imagen
        </div>
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>

        <p className="text-sm text-gray-500">{category || "Sin categoría"}</p>

        {lowestPrice !== null && (
          <p className="text-xl font-bold text-red-600 mt-2">
            ${lowestPrice.toLocaleString()}
          </p>
        )}

        <div className="mt-2">
          {suppliers.map((s, index) => (
            <p key={index} className="text-sm text-gray-600">
              {s.supplier.name}: <span className="font-medium">${s.price.toFixed(2)}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
