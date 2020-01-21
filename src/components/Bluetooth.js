import React, { Component } from 'react';
import WebBleTransport from '@coolwallets/transport-web-ble';
import CoolWallet from '@coolwallets/wallet';
import Button from './Button';
import { connect } from 'react-redux';
import { getAppIdOrNull, getAppKeysOrGenerate } from '../Utils/sdkUtil';
import {
	setupDevice,
	setupTransport,
	setupIsConnected,
	setupWallet,
	openModal,
	closeModal,
	setupPaired
} from '../actions';
import { processingContent, hintMessageContent } from '../ModalContents';

class Bluetooth extends Component {
	connect = async () => {
		const {
			setupDevice,
			setupIsConnected,
			setupTransport,
			setupWallet,
			openModal,
			closeModal,
			setupPaired
		} = this.props;
		openModal(processingContent('Connecting...'));
		WebBleTransport.listen(async (error, device) => {
			if (device) {
				console.log('device', device);
				this.props.setupDevice(device);
				const transport = await WebBleTransport.connect(device);
				this.props.setupTransport(transport);

				// disconnect listener
				WebBleTransport.setOnDisconnect(device, () => {
					setupIsConnected(false);
					setupTransport(null);
					openModal(
						hintMessageContent('Bluetooth disconnected. Please reconnect again.', true, () => {
							closeModal();
							this.props.history.push({
								pathname: '/'
							});
						})
					);
				});
				setupTransport(transport);
				setupIsConnected(true);
				setupDevice(device);

				// Go to regsiter page if no appId found.
				let appId = getAppIdOrNull();
				const { appPrivateKey } = getAppKeysOrGenerate();

				// sdk
				const wallet = new CoolWallet(transport, appPrivateKey, appId);
				setupWallet(wallet);
				if (appId) {
					// Has local appId
					const isRegistered = await wallet.checkRegistered(); //

					//
					if (isRegistered) {
						// return transport // 有沒有錢包
						const { walletCreated } = await wallet.getCardInfo();
						closeModal();
						if (walletCreated) {
							console.log(`wallet created, return connection status true la`);
							let bc = new BroadcastChannel('coolwallets');
							bc.postMessage({ target: 'connection-status', connected: true });
							this.props.history.push({
								pathname: '/ready'
							});
							return transport;
						} else {
							// 進去 createWallet
							this.props.history.push({
								pathname: '/generateWallet',
								walletCreated // register2 最後會用到
							});
							return;
						}
					} else {
						// 有存Appid 但是卡片不認得，所以無效
						closeModal();
						console.log(`card reset/ different card`);
						appId = null;
					}
				}
				if (!appId) {
					// Has no appId. Must go to register page
					const { paired, walletCreated } = await wallet.getCardInfo();
					setupPaired(paired);
					closeModal();
					// walletCreated 已經有錢包
					// paired 跟其他APP配對過
					//發現可以去同一頁就好，因為做的事一樣，只是之後的流程不同
					this.props.history.push({
						pathname: '/register2',
						walletCreated // register2 最後會用到
						// paired
					});
					return;
				}
				this.props.history.push({
					pathname: '/ready'
				});
			}
			if (error) throw error;
		});
	};

	//這個方法目前看起來沒有用到
	// disconnect = () => {
	// 	const transport = this.props.transport;
	// 	WebBleTransport.disconnect(transport.device.id);
	// 	this.props.isConnected(false);
	// 	// this.setState({ transport: null });
	// 	this.props.setTransport(null);
	// };
	render() {
		return <Button label={'Connect'} handleOnClick={this.connect} />;
	}
}

const mapStateToProps = (state) => ({
	device: state.common.device
});

const mapDispatchToProps = {
	setupDevice,
	setupIsConnected,
	setupTransport,
	setupWallet,
	openModal,
	closeModal,
	setupPaired
};

export default connect(mapStateToProps, mapDispatchToProps)(Bluetooth);
