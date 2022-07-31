import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import ProductTabs from "./ProductTabs"

const ProductPage = () => {
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [tab, setTab] = useState(0)
	const { id } = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((resp) => resp.json())
			.then((resp) => {
				setProduct(resp)
				setLoading(false)
			})
			.catch((err) => {
				setLoading(false)
				setError(true)
				console.error(err)
			})
	}, [id])

	const handleChangeTab = (idx) => {
		setTab(idx)
	}

	if (loading) {
		return (
			<main className="max-w-screen-lg mx-auto px-4 py-10">
				<p>Loading...</p>
			</main>
		)
	} else if (error) {
		return navigate("/")
	}
	return (
		<main className="max-w-screen-lg mx-auto px-4 py-10">
			<div className="flex flex-wrap">
				{product && (
					<>
						<div className="w-full">
							<h1 className="mb-4">Product Page</h1>
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
							<ProductTabs tab={tab} product={product} handleChangeTab={handleChangeTab} />
						</div>
					</>
				)}
			</div>
		</main>
	)
}

export default ProductPage
