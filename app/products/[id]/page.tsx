import { products } from "@/data/products";
import ContactForm from "@/components/ContactForm";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <div>Not found</div>;

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.name} />

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2">{product.description}</p>

        <div className="mt-4">
          <h4 className="font-semibold">Wood Types:</h4>
          <div className="flex gap-2 mt-2">
            {product.woodTypes.map((w) => (
              <span key={w} className="px-3 py-1 border rounded">
                {w}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <ContactForm productName={product.name} />
        </div>
      </div>
    </div>
  );
}