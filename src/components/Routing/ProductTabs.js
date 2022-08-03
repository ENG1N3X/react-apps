import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const ProductTabs = ({ product }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [currentTab, setCurrentTab] = useState(0)

	useEffect(() => {
		const tab = searchParams.get("tab")
		if (tab) {
			setCurrentTab(tab)
		}
	}, [searchParams])

	const handleChangeTab = (idx) => {
		setSearchParams({ tab: idx })
		setCurrentTab(idx)
	}

	return (
		<div className="border border-white rounded-sm p-2">
			<div className="flex">
				<button type="button" className={"mr-3 " + (Number(currentTab) === 0 ? "underline" : "")} onClick={() => handleChangeTab(0)}>
					Description
				</button>
				<button type="button" className={Number(currentTab) === 1 ? "underline" : ""} onClick={() => handleChangeTab(1)}>
					Raiting
				</button>
			</div>

			<div>
				<div className={Number(currentTab) === 0 ? "" : "hidden"}>
					<p>{product.description}</p>
				</div>
				<div className={Number(currentTab) === 1 ? "" : "hidden"}>
					<p>Count: {product.rating.count}</p>
					<p>Rate: {product.rating.rate}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductTabs
