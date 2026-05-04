import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <img src={product.image} alt={product.name} />
        <div className="p-4">
          <h2 className="font-semibold">{product.name}</h2>
          {product.price && (
            <p className="text-sm text-gray-600">KES {product.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}