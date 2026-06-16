import Link from "next/link";
import DeleteProductButton from "@/components/admin/DeleteProductButton";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category_name: string;
  featured?: number;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>

        <Link
          href="/admin/products/new"
          className="bg-black text-white px-4 py-2"
        >
          Add Product
        </Link>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4 border p-4 rounded"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">
                {product.category_name}
              </p>
              <p className="text-sm">KSh {product.price}</p>
            </div>

            <div className="flex gap-2">
              <Link
  href={`/admin/products/${product.id}/edit`}
  className="px-3 py-1 border"
>
  Edit
</Link>
              <DeleteProductButton id={product.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}