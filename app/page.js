// app/page.js
import ProductList from '@/components/ProductList';

export default async function HomePage() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  if (!res.ok) {
    return <div>Error loading products.</div>;
  }
  const products = await res.json();

  return (
    <main className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 py-6">
        <h1 className="text-center text-4xl text-white font-bold">Ecommerce Store</h1>
      </header>
      <section className="py-8">
        <ProductList products={products} />
      </section>
    </main>
  );
}
