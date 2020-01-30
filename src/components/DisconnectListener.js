import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import WebBleTransport from '@coolwallets/transport-web-ble';
import { setupTransport, setupIsConnected, setupIsReady, openModal, closeModal } from '../actions';

class DisconnectListener extends Component {
	componentDidMount = async () => {
		WebBleTransport.listen(async (error, device) => {
			if (device) {
				WebBleTransport.setOnDisconnect(device, () => {
					console.log('disconnect!!!');
					setupIsConnected(false);
					setupTransport(null);
					setupIsReady(false)
				});
			}
		});
	};
	componentDidUpdate = (prevProps) => {
		console.log('this.props.device', this.props.device);
		console.log('prevProps.device', prevProps.device);
		if (prevProps.device && !this.props.device) {
			console.log('disconnect!!!');
			// setupIsConnected(false);
			// setupTransport(null);
		}
	};
	render() {
		return <Fragment />;
	}
}

const mapStateToProps = (state) => ({
	device: state.common.device
});

const mapDispatchToProps = {
	setupIsReady,
	setupIsConnected,
	setupTransport,
	openModal,
	closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectListener);
