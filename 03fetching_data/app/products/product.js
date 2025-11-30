'use client'

export default function ProductButton({product}) {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">  
      <button 
        onClick={() => 
          alert(`
            Title: ${product.title}
            Brand: ${product.brand}
            Category: ${product.category}
            Price: $${product.price}
          `)
        } 
        className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
        >
          Show Details
        </button>
    </div>
  );
}