import { useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "./AuthContext"

const AuthMiddleware = ({ children }) => {
	const data = useContext(AuthContext)

	const { user } = data

	if (!user) {
		return <Navigate to="/login" replace={true} />
	}

	return children
}

export default AuthMiddleware
