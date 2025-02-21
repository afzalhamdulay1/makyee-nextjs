// components/ProductList.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by title (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 pt-10 pb-5">
            <div className="relative h-56">
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-xl font-bold text-blue-600 mb-2">${product.price}</p>
              <Link
                href={`/product/${product.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
