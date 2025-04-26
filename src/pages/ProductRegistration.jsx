// src/pages/ProductRegistration.jsx

import { useState } from 'react';
import { addProduct } from '../services/api';

export default function ProductRegistration() {
  const [product, setProduct] = useState({ name: '', price: '', quantity: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(product); // Backend call
      alert('Product Registered Successfully!');
      setProduct({ name: '', price: '', quantity: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to Register Product.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Product Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Quantity"
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        />
        <button className="bg-yellow-600 text-white p-2 rounded" type="submit">
          Register Product
        </button>
      </form>
    </div>
  );
}
