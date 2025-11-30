'use client';
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-xl font-bold">Products List</h1>
      {
        products.map(product => {
          return <h1 key={product.id}>Name: {product.title}</h1>
        })
      }
    </div>
  );
}
