import React from "react"
import { Routes, Route } from "react-router-dom"
import Logo from "./components/Logo"

import Header from "./components/Header"
import ProductPage from "./components/Routing/ProductPage"

import PageHome from "./pages/PageHome"
import PageWeather from "./pages/PageWeather"
import PageRouting from "./pages/PageRouting"
import PageNotFound from "./pages/PageNotFound"
import PageAdmin from "./pages/PageAdmin"
import PageLogin from "./pages/PageLogin"
import PageRegister from "./pages/PageRegister"

import LayoutRouting from "./layouts/LayoutRouting"
import LayoutAdmin from "./layouts/LayoutAdmin"

import { AuthProvider } from "./auth/AuthContext"
import AuthMiddleware from "./auth/AuthMiddleware"

function App() {
	return (
		<AuthProvider>
			<Header />
			<Routes>
				<Route path="/" element={<PageHome />} />
				<Route path="/weather" element={<PageWeather />} />
				<Route path="/routing" element={<LayoutRouting />}>
					<Route index element={<PageRouting />} />
					<Route path="product/:id" element={<ProductPage />} />
				</Route>
				<Route path="/admin" element={<LayoutAdmin />}>
					<Route
						index
						element={
							<AuthMiddleware>
								<PageAdmin />
							</AuthMiddleware>
						}
					/>
				</Route>
				<Route path="login" element={<PageLogin />} />
				<Route path="register" element={<PageRegister />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Logo />
		</AuthProvider>
	)
}

export default App
