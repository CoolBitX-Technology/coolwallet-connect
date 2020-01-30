import { Component } from 'react';

export default class IframeComponent extends Component {
	constructor(props) {
		super(props);
		if (window.parent !== window) {
			this.tabReady = false;
			this.bc = new BroadcastChannel('coolwallets');
			this.setupListeners();
		}
	}

	setupListeners() {
		const tabDomain = 'https://coolbitx-technology.github.io/coolwallet-connect/#/';
		// const tabDomain = 'http://localhost:3000'

		// Open as IFRAME
		onmessage = async ({ data, source, origin }) => {
			if (data.target === 'CWS-IFRAME' && source === window.parent) {
				// Open CoolWalletConnect in new tab.
				const tab = this.openOnce(tabDomain, 'coolwallets-tab');

				tab.onbeforeunload = () => {
					this.tabReady = false;
				};

				if (!this.tabReady) this.pingTab();
				while (!this.tabReady) {
					console.log(`blocking`);
					await this.sleep(1000);
				}

				data.target = 'CWS-TAB';
				this.bc.postMessage(data, '*');
			}
		};

		this.bc.onmessage = ({ data, source }) => {
			if (data.target === 'tab-status') {
				this.tabReady = data.ready;
			} else {
				this.sendMessageToExtension(data);
			}
		};
	}

	pingTab() {
		this.bc.postMessage({ target: 'CWS-TAB', action: 'coolwallet-connection-check' });
	}

	sendMessageToExtension(msg) {
		window.parent.postMessage(msg, '*');
	}

	openOnce(url, target) {
		var winref = window.open('', target, '', true);

		// if the "target" window was just opened, change its url
		if (winref.location.href === 'about:blank') {
			winref.location.href = url;
		}
		winref.focus();
		return winref;
	}

	sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	render() {
		return null;
	}
}
