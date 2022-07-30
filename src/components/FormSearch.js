import React from "react"

function FormSearch({ setResultHandle }) {
	function handleSubmit(evt) {
		evt.preventDefault()
		if (evt.target[0].value.toLowerCase().trim()) {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${evt.target[0].value.toLowerCase()}&units=metric&appid=6185fc86e8328cd8f85738d34b75b995`)
				.then((resp) => resp.json())
				.then((resp) => {
					if (resp.message) {
						throw resp
					} else {
						setResultHandle(resp)
					}
				})
				.catch((err) => {
					setResultHandle(err)
					console.error(err)
				})
		}
	}

	return (
		<form className="w-full flex" onSubmit={handleSubmit}>
			<input placeholder="Type city here" type="text" className="input primary w-full" required />
			<button type="submit" className="btn primary">
				Search
			</button>
		</form>
	)
}

export default FormSearch
