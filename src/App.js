import React, { useState } from "react"
import FormSearch from "./components/FormSearch"
import WeatherSearchResult from "./components/WeatherSearchResult"
import WeatherGeo from "./components/WeatherGeo"
import Header from "./components/Header"
import Logo from "./components/Logo"

function App() {
	const [result, setResult] = useState()

	function setResultHandle(obj) {
		setResult(obj)
	}

	return (
		<div className="max-w-screen-lg mx-auto px-4 pb-10">
			<Header />

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

			<Logo />
		</div>
	)
}

export default App
