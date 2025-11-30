import Product from "../components/Product";
import ProductButton from "../components/ProductButton";  

async function getProducts() {
  try{
    const res = await fetch("https://dummyjson.com/products?limit=20&select=title,price");
    const data = await res.json();
    return data.products;
  }catch(error){
    console.log(error);
  }
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold underline p-4">Products</h1>
      {
        products.length>0 && (
          products.map(({id, title, price}) => (
            <div key={id} className="flex justify-between border border-white p-4 m-4 rounded-lg bg-gray-600">
              <Product title={title} price={price} />
              <ProductButton id={id} />
            </div>
          ))
        )
      }
    </div>
  )
}

