import React from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
import useGetProducts from "../hooks/useGetProducts";

const URL_API = "https://api.escuelajs.co/api/v1/";

function ProductList() {
  const products = useGetProducts(URL_API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
