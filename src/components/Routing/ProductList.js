import React, { useState } from "react"
import ProductItem from "./ProductItem"

const ProductList = ({ products }) => {
	const [search, setSearch] = useState("")
	function handleChange(evt) {
		setSearch(evt.target.value.toLowerCase())
	}

	return (
		<div className="flex flex-wrap">
			<div className="w-full">
				<h1 className="mb-4">Product List</h1>
			</div>
			<div className="w-full py-3">
				<input placeholder="Search..." name="search" type="search" className="input primary w-full" onKeyUp={handleChange} />
			</div>
			{products
				.filter((product) => product.title.toLowerCase().includes(search))
				.map((product) => (
					<ProductItem product={product} key={product.id} />
				))}
		</div>
	)
}

export default ProductList
