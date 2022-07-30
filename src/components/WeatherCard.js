import React from "react"

function WeatherCard(props) {
	const card = props.card
	if (card && card.message) {
		return <p className="capitalize text-red-400">{card.message}</p>
	} else if (card) {
		return (
			<div>
				<h4>Position: {props.card.name}</h4>

				<div className="flex items-center">
					<div className="pr-3">
						<h4>{props.card.weather[0].main}</h4>
						<p className="capitalize">{props.card.weather[0].description}</p>
					</div>
					<img src={`http://openweathermap.org/img/wn/${props.card.weather[0].icon}@2x.png`} alt="weather-icon" />
				</div>

				<div>
					<h4>
						Min: {props.card.main.temp_min} <i className="icon-celsius"></i>
					</h4>
					<h4>
						Max: {props.card.main.temp_max} <i className="icon-celsius"></i>
					</h4>
					<h4>
						Feels like: {props.card.main.feels_like} <i className="icon-celsius"></i>
					</h4>
				</div>

				<h4>{props.card.visibility} m</h4>

				<div>
					<h4>Sunrise: {new Date(props.card.sys.sunrise * 1000).toUTCString()}</h4>
					<h4>Sunset: {new Date(props.card.sys.sunset * 1000).toUTCString()}</h4>
				</div>
			</div>
		)
	} else {
		return <p className="text-yellow-400">Nothing yet...</p>
	}
}
export default WeatherCard
