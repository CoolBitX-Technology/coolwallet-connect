import React, { Component, Fragment } from 'react';
import { BROWN_GREY, ORANGEY_YELLOW, EXTRA_LARGE, MEDIUM, SMALL } from '../constant';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import styled from 'styled-components';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { openModal, closeModal, setupDevice, setupPaired } from '../actions';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { resetContent, confirmOnCardContent, errorMessageContent } from '../ModalContents';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

import CWSWallet from '@coolwallets/wallet';
import { getAppKeysOrGenerate, setAppId } from '../Utils/sdkUtil';

class Register2 extends Component {
	constructor(props) {
		super(props);
		const { appPrivateKey } = getAppKeysOrGenerate();
		const { transport } = this.props;
		this.state = {
			test: [ 'CoolBitX Crypto (Android)', 'Zerion' ],
			showModal: false,
			pairingPassword: '',
			wallet: new CWSWallet(transport, appPrivateKey)
		};
	}

	toggle = () => {
		const { showModal } = this.state;
		this.setState({ showModal: !showModal });
	};
	handleOnClick = async () => {
		const { walletCreated } = this.props.history.location;
		const { appPublicKey } = getAppKeysOrGenerate();
		const { openModal, closeModal } = this.props;
		try {
			openModal(confirmOnCardContent);
			const appId = await this.state.wallet.register(
				appPublicKey,
				this.state.pairingPassword,
				'CoolWalletConnect'
			);
			if (appId) {
				closeModal();
			}
			await setAppId(appId);
			if (!walletCreated) {
				console.log('walletCreated!!', walletCreated);
				this.props.history.push({
					pathname: '/generateWallet'
				});
			} else {
				console.log('wallet has been created, walletCreated');
				this.props.history.push({
					pathname: '/ready'
				});
			}
		} catch (error) {
			openModal(errorMessageContent(error.message));
		}
	};
	renderConditionalComponent = (comp1, comp2) => {
		const { paired } = this.props;
		return paired ? comp1 : comp2;
	};
	resetCard = async () => {
		// const { history, setupDevice } = this.props;
		const { wallet } = this.state;
		const { closeModal, openModal, setupPaired } = this.props;
		openModal(confirmOnCardContent);
		const result = await wallet.resetCard();
		if (result) {
			setupPaired(null);
			closeModal();
		}
	};
	render() {
		const { openModal } = this.props;
		return (
			<Container>
				{/* {this.whitelist()} */}
				<Title>
					{this.renderConditionalComponent(
						<Fragment>
							<AccountBalanceWalletIcon htmlColor={ORANGEY_YELLOW} fontSize="large" />Wallet is paired.
						</Fragment>,
						<Fragment>
							<AccountBalanceWalletOutlinedIcon htmlColor={BROWN_GREY} fontSize="large" />New Wallet
						</Fragment>
					)}
				</Title>
				<InfoBox>
					{this.renderConditionalComponent(
						<Fragment>
							{/* Please use the pairing password to add CoolWallet Connect to{' '} */}
							Please enter the pairing password to register this browser to the device. If you're using
							CoolBitX App, you can find your pairing password under setting session.
						</Fragment>,
						// Brand new wallet.
						'Please specify a 8 digit number as pairing password and click register.'
					)}
				</InfoBox>
				<Wrapper>
					<PairingPasswordInput
						maxLength="8"
						placeholder={'Pairing Password'}
						style={{ color: 'white' }}
						onChange={({ target }) => this.setState({ pairingPassword: target.value })}
					/>
					<Button width={200} label={'Register'} handleOnClick={this.handleOnClick} />
				</Wrapper>
				{this.renderConditionalComponent(
					<Hint onClick={() => openModal(resetContent(() => this.resetCard()))}>
						Can't find your password?
					</Hint>,
					null
				)}
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	showModal: state.common.showModal,
	modalContent: state.common.modalContent,
	transport: state.common.transport,
	wallet: state.common.wallet,
	paired: state.common.paired
});

const mapDispatchToProps = {
	openModal,
	closeModal,
	setupDevice,
	setupPaired
};

export default connect(mapStateToProps, mapDispatchToProps)(Register2);

const Container = styled.div`
	max-width: 604px;
	width: 90%;
`;

// const TextUnderline = styled.div`
// 	text-decoration: underline;
// 	cursor: pointer;
// `;

const Title = styled.div`
	font-size: ${EXTRA_LARGE};
	color: ${BROWN_GREY};
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 265px;
	display: flex;
	margin: auto;
	margin-bottom: 30px;
`;
const InfoBox = styled.div`
	height: 300px;
	width: 100%;
	border-radius: 5px;
	border: solid 1px ${BROWN_GREY};
	background-color: #202124;
	line-height: 1.64;
	color: ${BROWN_GREY};
	padding: 20px;
	box-sizing: border-box;
`;
const Wrapper = styled.div`
	margin: 50px 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
const PairingPasswordInput = styled.input`
	width: 100%;
	max-width: 371px;
	height: 55px;
	border-radius: 27px;
	background-color: #212529;
	border: 0;
	padding: 5px 20px;
	box-sizing: border-box;
	margin-right: 10px;
	&:focus {
		outline: none;
	}
	::placeholder {
		color: #4c4c4c;
		font-size: ${SMALL};
	}
`;
const Hint = styled.div`
	width: 100%;
	height: 21px;
	font-size: ${MEDIUM};
	text-align: center;
	color: ${BROWN_GREY};
	text-decoration: underline;
	cursor: pointer;
`;
