import { useState } from "react";

const initialState = {
  cart: [],
};

function useInitialState() {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    // console.log(payload);
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const deleteProduct = (item) => {
		const indexProduct = state.cart.findIndex((product)=> product.id === item);
    const newProductList = [...state.cart];
    newProductList.splice(indexProduct, 1);
    // console.log(newProductList);
    setState({
      ...state,
      cart: [...newProductList]
    })
	};

  return {
    state,
    addToCart,
    deleteProduct,
  };
}

export default useInitialState;
