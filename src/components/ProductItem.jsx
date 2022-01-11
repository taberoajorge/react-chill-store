import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = (props) => {
	const {title, price, images} = props.product;
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>{`$${price}`}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={addToCart} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;
