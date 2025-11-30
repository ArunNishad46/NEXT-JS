import ProductButton from './product';

const productList = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return data.products;
}

export default async function ProductsPage() {
  const products = await productList();

  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-xl font-bold">Products List</h1>  
      {
        products.map(product => {
          return (
            <div className='flex pb-2 gap-4' key={product.id}>
              <h1>Name: {product.title}</h1>
              <ProductButton product={product} />
            </div>
          );
        })
      }
    </div>
  );
}