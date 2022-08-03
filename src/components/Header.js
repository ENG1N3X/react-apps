import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
	const activeStyle = {
		textDecoration: "underline",
	}
	return (
		<header className="max-w-screen-lg mx-auto border-b border-white">
			<nav className="text-center py-3">
				<NavLink to="/" className="px-3" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Home
				</NavLink>
				<NavLink to="/weather" className="px-3" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Weather App
				</NavLink>
				<NavLink to="/routing" className="px-3" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Routing App
				</NavLink>
				<NavLink to="/login" className="px-3" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					Login
				</NavLink>
			</nav>
		</header>
	)
}

export default Header
