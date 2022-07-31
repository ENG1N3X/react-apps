import React from "react"
import WeatherCard from "./WeatherCard"

function WeatherSearchResult(props) {
	return (
		<div>
			<h2 className="mb-4">{props.heading}</h2>

			<WeatherCard card={props.result} />
		</div>
	)
}

export default WeatherSearchResult
