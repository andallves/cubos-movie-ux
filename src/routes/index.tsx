import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "../App.tsx";

export const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					{/*<Route path={`/:1`} element={<FirstStep />} />*/}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};