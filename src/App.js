import React from 'react';
import { Provider } from 'react-redux';
import {
	// BrowserRouter as Router, 
	Switch, Route, HashRouter 
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Connect from './pages/Connect';
import store from './store';
import Register2 from './pages/Register2';
import IframeScript from './scripts/iframeScript';
import Modal from './components/Modal';
import GenerateWallet from './pages/GenerateWallet';
import Ready from './pages/Ready';

function App() {
	return (
		<HashRouter>
			<Switch>
				<Provider store={store}>
					<Header />
					<Modal />
					<Container>
						<Route exact path="/" component={Connect} />
						<Route path="/iframe" component={IframeScript} />
						<Route path="/register2" component={Register2} />
						<Route path="/generateWallet" component={GenerateWallet} />
						<Route path="/ready" component={Ready} />
					</Container>
				</Provider>
			</Switch>
		</HashRouter>
	);
}

export default App;
