import React from "react"
import logo from '../logo.svg';

function Logo() {
	return (
		<a href='/' className="absolute left-2 md:left-5 bottom-2 md:bottom-5 w-16 h-16 overflow-hidden">
			<img className='block w-full h-full animate-spin' src={logo} alt="logo" />
		</a>
	)
}

export default Logo