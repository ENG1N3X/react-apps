import React, { useContext } from "react"

import { AuthContext } from "../auth/AuthContext"

const PageAdmin = () => {
	const { user, logout } = useContext(AuthContext)

	return (
		<main className="max-w-screen-lg mx-auto px-4 py-10">
			<div className="text-right">
				<h4 className="inline-block mr-2">Hello, {user.login}</h4>
				<button type="button" className="btn primary" onClick={() => logout((status) => console.log(status))}>
					Logout
				</button>
			</div>
		</main>
	)
}

export default PageAdmin
