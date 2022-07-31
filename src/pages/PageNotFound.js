import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
	const navigate = useNavigate()

	return (
		<div className="bg-slate-600 h-screen flex justify-center items-center text-center">
			<div>
				<h1 className="mb-4">Something went wrong!</h1>
				<button type="button" className="btn primary" onClick={() => navigate("/")}>
					Homepage
				</button>
			</div>
		</div>
	)
}

export default PageNotFound
