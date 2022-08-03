import React, { useState, useEffect } from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom"

import ProductTabs from "./ProductTabs"

const ProductPage = () => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((resp) => {
				if (!resp.ok) {
					throw new Error("Fetching error")
				}
				return resp.json()
			})
			.then((resp) => {
				setProduct(resp)
				setLoading(false)
			})
			.catch((err) => {
				setLoading(false)
				setError(true)
				console.error("Error", err)
			})
	}, [id])

	return (
		<main className="max-w-screen-lg mx-auto px-4 py-10">
			<div className="flex flex-wrap">
				{loading && <p>Loading...</p>}
				{error && <Navigate to="/" replace={true} />}
				{product && (
					<>
						<div className="w-full">
							<h1 className="inline-block mb-4 mr-4">Product Page</h1>
							<button type="button" className="btn primary" onClick={() => navigate(-1)}>
								Back
							</button>
						</div>
						<div className="w-full md:w-1/2 px-2">
							<div className="aspect-square">
								<img className="block w-full h-full object-cover" src={product.image} alt={product.title} />
							</div>
						</div>
						<div className="w-full md:w-1/2 px-2">
							<span className="block mb-2">{product.price}</span>
							<h4 className="mb-2">{product.title}</h4>
							<span className="block mb-2">Category: {product.category}</span>
							<ProductTabs product={product} />
						</div>
					</>
				)}
			</div>
		</main>
	)
}

export default ProductPage
