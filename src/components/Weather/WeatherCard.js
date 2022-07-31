import React from "react"

function WeatherCard(props) {
	const card = props.card
	if (card && card.message) {
		return <p className="capitalize text-red-400">{card.message}</p>
	} else if (card) {
		return (
			<div>
				<h4>Position: {card.name}</h4>

				<div className="flex items-center">
					<div className="pr-3">
						<h4>{card.weather[0].main}</h4>
						<p className="capitalize">{card.weather[0].description}</p>
					</div>
					<img src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`} alt="weather-icon" />
				</div>

				<div>
					<h4>
						Min: {card.main.temp_min} <i className="icon-celsius"></i>
					</h4>
					<h4>
						Max: {card.main.temp_max} <i className="icon-celsius"></i>
					</h4>
					<h4>
						Feels like: {card.main.feels_like} <i className="icon-celsius"></i>
					</h4>
				</div>

				<h4>{card.visibility} m</h4>

				<div>
					<h4>Sunrise: {new Date(card.sys.sunrise * 1000).toUTCString()}</h4>
					<h4>Sunset: {new Date(card.sys.sunset * 1000).toUTCString()}</h4>
				</div>
			</div>
		)
	} else {
		return <p className="text-yellow-400">Nothing yet...</p>
	}
}
export default WeatherCard
