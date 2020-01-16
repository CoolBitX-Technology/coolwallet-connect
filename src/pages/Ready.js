import React, { Component } from 'react';
import { EXTRA_LARGE } from '../constant';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Ready extends Component {
	componentDidUpdate = (prevProp) => {
		const { device, isConnected, transport } = this.props;
		if (!prevProp.device && isConnected && transport && device) {
			console.log(`ready for commands`);
			let bc = new BroadcastChannel('coolwallets');
			bc.postMessage({ target: 'connection-status', connected: true });
		}
	};
	render() {
		const { device, isConnected, transport } = this.props;

		return (
			<Title>
				{isConnected && transport && device ? (
					<TextWrapper>
						Connected with <Text>{device.name.split(' ')[1]}</Text>
					</TextWrapper>
				) : (
					'Wallet is not connected'
				)}
			</Title>
		);
	}
}

const mapStateToProps = (state) => ({
	device: state.common.device,
	transport: state.common.transport,
	isConnected: state.common.isConnected
});

export default connect(mapStateToProps, null)(Ready);

const TextWrapper = styled.div`display: flex;`;
const Title = styled.div`
	font-size: ${EXTRA_LARGE};
	color: #7f7f7f;
	height: 150px;
	max-width: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Text = styled.div`
	color: #ffba12;
	margin-left: 8px;
`;
