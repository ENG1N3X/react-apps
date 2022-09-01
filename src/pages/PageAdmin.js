import React from "react"

import { useRecoilState } from "recoil"
import { userSelector } from "../store/authState"

const PageAdmin = () => {
	const [user, setUser] = useRecoilState(userSelector)

	return (
		<main className="max-w-screen-lg mx-auto px-4 py-10">
			<div className="text-right">
				<h4 className="inline-block mr-2">Hello, {user.login}</h4>
				<button type="button" className="btn primary" onClick={() => setUser(null)}>
					Logout
				</button>
			</div>
		</main>
	)
}

export default PageAdmin
