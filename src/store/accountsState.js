import { atom } from "recoil"

export const accountsState = atom({
	key: "accountsState",
	default: [
		{
			login: "admin",
			password: "admin",
		},
		{
			login: "login",
			password: "login",
		},
	],
})
