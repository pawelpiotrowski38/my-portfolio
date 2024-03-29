import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path='/about' element={<About />} /> */}
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	)
}
