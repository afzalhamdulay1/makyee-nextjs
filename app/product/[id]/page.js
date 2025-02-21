// app/product/[id]/page.js
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    return <div>Error loading product details.</div>;
  }
  const product = await res.json();

  return (
    <main className="container mx-auto p-6">
      <Link
        href="/"
        className="inline-block mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        &larr; Back to Listings
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden py-10">
        <div className="relative h-80">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500"><span className='font-semibold text-blue-500'>Category:</span>  {product.category}</p>
        </div>
      </div>
    </main>
  );
}
