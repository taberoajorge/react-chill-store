import React from 'react';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = (props) => {
	const {addToCart} = React.useContext(AppContext);
	const {title, price, images} = props.product;
	const handleClick = (product) => {
		addToCart(product)
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>{`$${price}`}</p>
					<p>{title}</p>
				</div>
				<figure onClick={(e)=>handleClick(e)} >
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
