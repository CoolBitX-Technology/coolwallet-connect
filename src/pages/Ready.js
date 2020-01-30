import React, { Component } from 'react';
import { EXTRA_LARGE } from '../constant';
import { connect } from 'react-redux';
import styled from 'styled-components';

class Ready extends Component {

	componentDidMount = () => {
		const { device, isConnected, transport } = this.props;
		if (isConnected && transport && device) {
			let bc = new BroadcastChannel('coolwallets');
			bc.postMessage({ target: 'tab-status', ready: true });
		} else {
			this.props.history.push({
				pathname: '/'
			});
		}
	};

	render() {
		const { device, isConnected, transport } = this.props;

		return (
			<Wrapper>
				<Title>
					{isConnected &&
					transport &&
					device && (
						<TextWrapper>
							Connected with <Text>{device.name.split(' ')[1]}</Text>
						</TextWrapper>
					)}
				</Title>
				<IconWrapper>
					<Image src={'laptop.png'} />
					<Image src={'bluetooth.png'} />
					<Image src={'card.png'} />
				</IconWrapper>
			</Wrapper>
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
const Image = styled.img`
	height: 40px;
	@media (max-width: 480px) {
		margin: 0 10%;
	}
`;
const IconWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 115px;
	@media (max-width: 480px) {
		width: 80%;
	}
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 480px;
	height: 500px;
	flex-flow: column;
	@media (max-width: 480px) {
		width: 100%;
	}
`;
