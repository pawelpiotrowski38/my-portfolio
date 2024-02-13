import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './AppLayout';
import Home from './pages/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path='/' element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
