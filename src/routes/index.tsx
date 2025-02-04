import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../App.tsx";
import {MovieDetails} from "../components/MovieDetails";

export const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path={`/:id`} element={<MovieDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};