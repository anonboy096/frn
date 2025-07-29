import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data/allProduct";

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) return <div className="p-8 text-red-500">Product not found</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-lg text-gray-700 mb-2">Category: {product.category}</p>
      <p className="text-xl text-green-700 font-semibold mb-4">₹{product.price}</p>
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-auto rounded shadow"
        />
      )}
    </div>
  );
};

export default ProductPage;
