import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from '../context/AppContext';

const OrderItem = ({product}) => {
	const { deleteProduct } = React.useContext(AppContext);
	const {images, title, price, id} = product;
	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img onClick={()=> deleteProduct(id)} src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
