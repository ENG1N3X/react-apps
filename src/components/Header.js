import React from "react"

function Header(props) {
	return (
		<header className="flex justify-center items-center py-8">
			<a href="https://openweathermap.org/" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80 px-3">
				OpenWeather
			</a>
			<a href="https://ip-api.com/" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80 px-3">
				IP Geolocation API
			</a>
			<a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80 px-3">
				React
			</a>
		</header>
	)
}

export default Header
