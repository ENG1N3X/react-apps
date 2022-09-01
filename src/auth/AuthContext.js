import React, { createContext, useState } from "react"
import { useRecoilState } from "recoil"
import { userAtom } from "../store/authState"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [users, setUsers] = useRecoilState(userAtom)

	const login = (newUser, callback) => {
		let userFound = null

		setTimeout(() => {
			userFound = users.find((user) => user.login === newUser.login && user.password === newUser.password)
			if (!userFound) return callback("Login failed")

			setUser(userFound)
			callback("Login success")
		}, 1000)
	}

	const logout = (callback) => {
		setUser(null)
		callback("Logout success")
	}

	const register = (newUser, callback) => {
		let userFound = null

		setTimeout(() => {
			userFound = users.find((user) => user.login === newUser.login)
			if (userFound) return callback("Login already in use")

			const newUserData = {
				login: newUser.login,
				password: newUser.password,
			}

			setUsers((oldValue) => [...oldValue, newUserData])
			callback("Register success")

			setUser(newUserData)
		}, 1000)
	}

	const data = { user, login, logout, register }

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
