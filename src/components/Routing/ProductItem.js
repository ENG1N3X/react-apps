import React from "react"
import { Link } from "react-router-dom"

function ProductItem({ product }) {
	return (
		<Link to={`/routing/product/${product.id}`} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4 transition-opacity hover:opacity-80">
			<div className="aspect-square">
				<img className="block w-full h-full object-cover" src={product.image} alt={product.title} />
			</div>
			<h4>{product.title}</h4>
			<span className="block">{product.price}</span>
		</Link>
	)
}

export default ProductItem
