import React from 'react';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = (props) => {
	const {addToCart} = React.useContext(AppContext);
	const handleClick = () => {
		addToCart(props.product)
	}

	return (
		<div className="ProductItem">
			<img src={props.product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>{`$${props.product.price}`}</p>
					<p>{props.product.title}</p>
				</div>
				<figure onClick={(e)=>handleClick(e)} >
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
