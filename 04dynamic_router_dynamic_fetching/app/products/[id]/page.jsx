export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=20&select=title,price");
  const data = await res.json();
  return data.products.map((product) => ({ id: product.id.toString() }));
}

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  console.log(product);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex w-[50%] h-60 bg-gray-500 rounded-2xl p-4 gap-4">
        <div className="flex items-center">
          <img className="w-120 h-60" src={product.thumbnail} alt={product.title} width={200} height={200} />
        </div>
        <div className="flex flex-col text-white gap-0.5"> 
          <h1>Title: {product.title}</h1>
          <h4>Brand: {product.brand}</h4>
          <h4>Category: {product.category}</h4>
          <p>Description: {product.description}</p>
          <p className="text-lg font-semibold pt-2">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  )
}