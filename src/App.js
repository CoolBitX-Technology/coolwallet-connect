import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Connect from './pages/Connect';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Container>
				<Connect />
			</Container>
		</Provider>
	);
}

export default App;
