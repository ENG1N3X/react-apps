import { atom, selector } from "recoil"

export const userAtom = atom({
	key: "userAtom",
	default: null,
})

export const userSelector = selector({
	key: "userSelector",
	get: ({ get }) => get(userAtom),
	set: ({ set }, newValue) => set(userAtom, newValue),
})

export const usersAtom = atom({
	key: "usersAtom",
	default: [
		{
			login: "login",
			password: "password",
		},
	],
})

export const usersSelector = selector({
	key: "usersSelector",
	get: ({ get }) => get(usersAtom),
	set: ({ set, get }, newUser) => {
		const userList = get(usersAtom)
		const userFound = userList.find((user) => user.login === newUser.login)
		if (userFound) return console.error("Login already in use")

		set(userAtom, newUser)
		set(usersAtom, [...userList, newUser])
	},
})
