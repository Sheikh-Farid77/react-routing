import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setIsLoading(false)
      });
  }, []);
  console.log(products);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-5">All Products</h2>
      {
        isLoading && <p className="text-center">Products Are Loading</p>
      }
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const { images, id, title, price, description } = product;
          return <article className="border p-5 text-center" key={product.id}>
            <img className="h-60 w-60 mx-auto" src={images} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="mb-5"><b>{price}</b></p>
            <Link to={`/product/${id}`} state={product} className="mt-3 px-7 py-3 rounded-lg bg-green-200 font-bold border-green-900 border">Show Details</Link>
          </article>;
        })}
      </div>
    </div>
  );
};

export default Product;
