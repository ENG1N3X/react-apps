import React from "react"
import { Navigate } from "react-router-dom"

import { useRecoilState } from "recoil"
import { userSelector } from "../store/authState"

const PageLogin = () => {
	const [user, setUser] = useRecoilState(userSelector)

	const handleSubmit = (evt) => {
		evt.preventDefault()

		const auth = {
			login: evt.target.login.value,
			password: evt.target.password.value,
		}

		setUser(auth)
	}

	if (user) {
		return <Navigate to="/admin" replace={true} />
	}
	return (
		<form onSubmit={handleSubmit} className="max-w-sm mx-auto text-center py-10">
			<h1 className="text-center mb-2">Login</h1>

			<input type="text" name="login" className="input primary block w-full mb-1" placeholder="Login" defaultValue="admin" />
			<input type="text" name="password" className="input primary block w-full mb-1" placeholder="Password" defaultValue="admin" />
			<button type="submit" className="btn primary block w-full">
				Login
			</button>
		</form>
	)
}

export default PageLogin
