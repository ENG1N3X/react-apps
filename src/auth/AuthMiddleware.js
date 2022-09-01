import { Navigate } from "react-router-dom"

import { useRecoilValue } from "recoil"
import { userSelector } from "../store/authState"

const AuthMiddleware = ({ children }) => {
	const user = useRecoilValue(userSelector)

	if (!user) {
		return <Navigate to="/login" replace={true} />
	}

	return children
}

export default AuthMiddleware
