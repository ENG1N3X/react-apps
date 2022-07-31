import React from "react"

const ProductTabs = ({tab, product, handleChangeTab}) => {
	return (
		<div className="border border-white rounded-sm p-2">
			<div className="flex">
				<button type="button" className={"mr-3 " + (tab === 0 ? "underline" : "")} onClick={() => handleChangeTab(0)}>
					Description
				</button>
				<button type="button" className={tab === 1 ? "underline" : ""} onClick={() => handleChangeTab(1)}>
					Raiting
				</button>
			</div>

			<div>
				<div className={tab === 0 ? "" : "hidden"}>
					<p>{product.description}</p>
				</div>
				<div className={tab === 1 ? "" : "hidden"}>
					<p>Count: {product.rating.count}</p>
					<p>Rate: {product.rating.rate}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductTabs
