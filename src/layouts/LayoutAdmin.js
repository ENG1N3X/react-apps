import React from "react"
import { Outlet } from "react-router-dom"

const LayoutAdmin = () => {
	return (
		<>
			<div className="text-center bg-slate-400 py-3">
				<h1 className="underline text-red-600">Admin Panel</h1>
			</div>
			<Outlet />
		</>
	)
}

export default LayoutAdmin
