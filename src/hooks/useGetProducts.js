import React from "react";
import axios from "axios";

function useGetProducts(API) {
  const [products, setProductsList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(API + "products")
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return products;
};

export default useGetProducts;