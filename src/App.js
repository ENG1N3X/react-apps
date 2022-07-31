import React from "react"
import { Routes, Route } from "react-router-dom"
import Logo from "./components/Logo"

import Header from "./components/Header"
import ProductPage from "./components/Routing/ProductPage"

import PageHome from "./pages/PageHome"
import PageWeather from "./pages/PageWeather"
import PageRouting from "./pages/PageRouting"
import PageNotFound from "./pages/PageNotFound"

import LayoutRouting from "./layouts/LayoutRouting"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<PageHome />} />
				<Route path="/weather" element={<PageWeather />} />
				<Route path="/routing" element={<LayoutRouting />}>
					<Route index path="" element={<PageRouting />} />
					<Route path="product/:id" element={<ProductPage />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Logo />
		</>
	)
}

export default App
