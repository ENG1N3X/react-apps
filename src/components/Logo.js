import React from "react"
import { Link } from "react-router-dom"

import logo from "../logo.svg"

function Logo() {
	return (
		<Link to="/" className="absolute left-2 md:left-5 bottom-2 md:bottom-5 w-16 h-16 overflow-hidden">
			<img className="block w-full h-full animate-spin" src={logo} alt="logo" />
		</Link>
	)
}

export default Logo
