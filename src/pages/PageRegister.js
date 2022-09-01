import React from "react"
import { Navigate } from "react-router-dom"

import { useRecoilValue, useSetRecoilState } from "recoil"
import { userSelector, usersSelector } from "../store/authState"

const PageRegister = () => {
	const user = useRecoilValue(userSelector)
	const setUsers = useSetRecoilState(usersSelector)

	const handleSubmit = (evt) => {
		evt.preventDefault()
		const newUserData = {
			login: evt.target.login.value,
			password: evt.target.password.value,
		}

		setUsers(newUserData)
	}

	if (user) {
		return <Navigate to="/admin" replace={true} />
	}
	return (
		<form onSubmit={handleSubmit} className="max-w-sm mx-auto text-center py-10">
			<h1 className="text-center mb-2">Register</h1>

			<input type="text" name="login" className="input primary block w-full mb-1" placeholder="Login" defaultValue="admin" />
			<input type="text" name="password" className="input primary block w-full mb-1" placeholder="Password" defaultValue="admin" />
			<button type="submit" className="btn primary block w-full">
				Register
			</button>
		</form>
	)
}

export default PageRegister
