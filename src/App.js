import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Connect from './pages/Connect';
import { Provider } from 'react-redux';
import store from './store';
import Register2 from './pages/Register2';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Container>
				<Register2 />
			</Container>
		</Provider>
	);
}

export default App;
