import React, { createContext, useState } from "react"
import users from "./users.json"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const login = (newUser, callback) => {
		let userFound = null

		setTimeout(() => {
			userFound = users.find((user) => user.login === newUser.login && user.passowrd === newUser.password)
			if (!userFound) return callback("Login failed")

			setUser(userFound)
			callback("Login success")
		}, 1000)
	}

	const logout = (callback) => {
		setUser(null)
		callback("Logout success")
	}

	const data = { user, login, logout }

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
