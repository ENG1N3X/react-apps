import React, { useState, useEffect } from "react"
import ProductList from "../components/Routing/ProductList"

let limit = 6

const PageRouting = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products?limit=${limit}`)
			.then((resp) => resp.json())
			.then((resp) => {
				setProducts(resp)
				setLoading(false)
			})
			.catch((err) => console.error(err))
	}, [])

	const loadMore = () => {
		limit = limit + 3

		fetch(`https://fakestoreapi.com/products?limit=${limit}`)
			.then((resp) => resp.json())
			.then((resp) => {
				setProducts((prevState) => {
					return [...prevState, ...resp.slice(limit - 3)]
				})
				setLoading(false)
			})
			.catch((err) => console.error(err))
	}

	return (
		<main className="max-w-screen-lg mx-auto px-4 py-10">
			{loading ? <p>Loading...</p> : <ProductList products={products} />}
			<div className="text-center">
				<button type="button" onClick={loadMore} className="btn primary">
					Load More
				</button>
			</div>
		</main>
	)
}

export default PageRouting
