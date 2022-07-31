import React, { useState } from "react"
import FormSearch from "../components/Weather/FormSearch"
import WeatherSearchResult from "../components/Weather/WeatherSearchResult"
import WeatherGeo from "../components/Weather/WeatherGeo"

const PageWeather = () => {
	const [result, setResult] = useState(null)

	function setResultHandle(obj) {
		setResult(obj)
	}

	return (
		<main className="max-w-screen-lg mx-auto px-4 py-10">
			<div className="flex justify-center items-center py-8">
				<a href="https://openweathermap.org/" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80 px-3">
					OpenWeather
				</a>
				<a href="https://ip-api.com/" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-80 px-3">
					IP Geolocation API
				</a>
			</div>

			<FormSearch setResultHandle={setResultHandle} />

			<div className="flex flex-wrap py-6">
				<div className="w-full mb-6">
					<h1 className="text-center">Weather</h1>
				</div>
				<div className="w-full md:w-3/5 mb-10">
					<WeatherSearchResult heading="Weather based on search" result={result} />
				</div>
				<div className="w-full md:w-2/5 mb-10">
					<WeatherGeo heading="Weather at current location" />
				</div>
			</div>
		</main>
	)
}

export default PageWeather
