import React from "react";
import ProductItem from "@components/ProductItem";
import "@styles/ProductList.scss";
import axios from "axios";

const URL_API = "https://api.escuelajs.co/api/v1/";

function ProductList() {
  const [productsList, setProductsList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(URL_API + "products")
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="main-container">
      <div className="ProductList">
        {productsList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
