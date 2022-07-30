import React, { useState, useEffect } from "react"
import WeatherCard from "./WeatherCard"

function WeatherGeo(props) {
	const [result, setResult] = useState()

	// Get user location
	useEffect(function () {
		fetch(`http://ip-api.com/json/?fields=status,message,city,lat,lon`)
			.then((resp) => {
				if (resp.status >= 200 && resp.status < 300) {
					return resp.json()
				} else {
					throw resp
				}
			})
			.then((resp) => getGeoWeather(resp))
			.catch((err) => {
				console.error(err)
			})
	}, [])

	// Get user weather based on geo location
	function getGeoWeather(obj) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lon}&units=metric&appid=6185fc86e8328cd8f85738d34b75b995`)
			.then((resp) => {
				if (resp.status >= 200 && resp.status < 300) {
					return resp.json()
				} else {
					throw resp
				}
			})
			.then((resp) => setResult(resp))
			.catch((err) => {
				setResult("")
				console.error(err)
			})
	}

	return (
		<div>
			<h2 className="mb-4">{props.heading}</h2>

			<WeatherCard card={result} />
			
		</div>
	)
}

export default WeatherGeo
