import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<div>page1</div>} />
				<Route path='/:id' element={<div>user page</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
