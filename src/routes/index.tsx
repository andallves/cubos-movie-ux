import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../App.tsx";
import {MovieDetails} from "../components/MovieDetails";
import {Navbar} from "../templates/layout/Navbar";
import {Footer} from "../templates/layout/Footer";
import {BackgroundContainer, Content} from "../App.ts";

export const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<BackgroundContainer>
				<Content>
					<Navbar />
					<Routes>
						<Route path="/" element={<App />} />
						<Route path={`/movie/:id`} element={<MovieDetails />} />
					</Routes>
					<Footer />
				</Content>
			</BackgroundContainer>
		</BrowserRouter>
	);
};