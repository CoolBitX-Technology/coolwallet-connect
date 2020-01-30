import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import {
	BROWN_GREY,
	DARK_GREY,
	ORANGEY_YELLOW,
	DARK_GREY2,
	GREYISH_BROWN,
	LIGHT_YELLOW,
	DARK_GREY3,
	LARGE,
	MEDIUM,
	HUGE,
	EXTRA_LARGE,
	SMALL,
	DARK_RED
} from '../constant';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Button from '../components/Button';
import { checkSumFail, processingContent, errorMessageContent } from '../ModalContents';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions';
import { type } from '../Utils/bip39Utils';
import { removeInvalidChar, addSpace } from '../Utils/validateInput';
import { letters, number, validateNmemonic, validateLength } from '../Utils/bip39Utils';

const bip39 = require('bip39');
const themeDarkGray = {
	button: {
		background: '#212529',
		color: GREYISH_BROWN,
		hoverBackground: '#212529',
		hoverColor: GREYISH_BROWN,
		cursor: 'default'
	}
};

const main = {
	button: {
		background: ORANGEY_YELLOW,
		color: 'white',
		hoverBackground: LIGHT_YELLOW,
		hoverColor: 'white'
	}
};

class GenerateWallet extends Component {
	state = {
		active: '1',
		seedLength: 12,
		step: 1,
		sum: 0,
		seed: '',
		errorMessage: '',
		seedType: '',
		isSeedValidated: false,
		isFormatValidated: true
	};
	handleOnClick = async () => {
		const { wallet } = this.props;
		const { seed, isFormatValidated, seedType } = this.state;
		const { openModal, closeModal } = this.props;
		if (!isFormatValidated || !validateLength(seed)) {
			return;
		}
		if (!validateNmemonic(seed, seedType === 'number' ? number : letters)) {
			this.setState({ errorMessage: 'Invalid Mnemonic' });
			return;
		}

		openModal(processingContent('Recovering Wallet...'));
		//須先將seed 做Hex
		const hexSeed = bip39.mnemonicToSeedSync(seed).toString('hex');
		if (!wallet) return;
		try {
			const result = await wallet.setSeed(hexSeed);
			if (result) {
				closeModal();
				this.props.history.push({
					pathname: '/ready'
				});
			}
		} catch (error) {
			closeModal();
			openModal(errorMessageContent(error));
			console.log('error', error);
		}
	};
	step1 = async () => {
		const { wallet } = this.props;
		const { seedLength } = this.state;
		const { openModal, closeModal } = this.props;
		openModal(processingContent('Creating Wallet...'));
		try {
			const result = await wallet.createWallet(seedLength);
			closeModal();
			if (result) {
				this.setState({ step: 2 });
			}
		} catch (error) {
			openModal(errorMessageContent(error.message));
			console.log('createWallet error', error);
		}
	};
	step2 = () => {
		this.setState({ step: 3 });
	};
	step3 = async () => {
		const { wallet } = this.props;
		const { closeModal, openModal } = this.props;
		const { sum } = this.state;
		const numberSum = Number(sum);
		openModal(processingContent('Validating...'));
		try {
			const result = await wallet.sendCheckSum(numberSum);
			if (result) {
				closeModal();
				this.props.history.push({
					pathname: '/'
				});
			}
		} catch (error) {
			console.log('checkSumFail error', error);
			openModal(checkSumFail(closeModal));
		}
	};
	generateSteps = () => {
		const { step, seedLength } = this.state;
		switch (step) {
			case 1:
				return (
					<Fragment>
						<SeedLengthWrapper>
							{[ 12, 18, 24 ].map((x, i) => (
								<LengthButton
									key={i}
									onClick={() => {
										this.setState({ seedLength: x });
									}}
								>
									<SeedLength active={!!(seedLength === x)}>{x}</SeedLength>
								</LengthButton>
							))}
						</SeedLengthWrapper>
						<Text2>length of seed</Text2>
						<Button label={'Generate'} handleOnClick={this.step1} />
					</Fragment>
				);
			case 2:
				return (
					<Fragment>
						<Image src={'card.png'} />
						<Text2>Please look on your card and write down your seed.</Text2>
						<Button label={'I’ve written my seed!'} handleOnClick={this.step2} />
					</Fragment>
				);
			case 3:
				return (
					<Fragment>
						<Input
							onChange={({ target }) => this.setState({ sum: target.value })}
							placeholder={'Your Answer'}
						/>
						<Text2>Sum up ALL the numbers of you seed</Text2>
						<Button label={'Confirm'} handleOnClick={this.step3} />
					</Fragment>
				);
			default:
				return;
		}
	};

	render() {
		const { active, step, isSeedValidated, isFormatValidated, seed, errorMessage } = this.state;
		console.log('isSeedValidated', isSeedValidated);
		return (
			<Container>
				<Title>
					<AccountBalanceWalletIcon htmlColor={BROWN_GREY} fontSize="large" />Wallet is empty
				</Title>
				{step === 1 && (
					<NavigationBar>
						<NavigationButton
							onClick={() => this.setState({ active: '1' })}
							active={active === '1' && true}
						>
							Import existing seed
						</NavigationButton>
						<NavigationButton
							onClick={() => this.setState({ active: '2' })}
							active={active === '2' && true}
						>
							Generate seed
						</NavigationButton>
					</NavigationBar>
				)}

				{active === '1' ? (
					<Fragment>
						<Text>Enter your mnenomic seed phrase to recover you wallet</Text>
						<InfoBox
							value={seed}
							isSeedValidated={isSeedValidated}
							isFormatValidated={isFormatValidated}
							placeholder={'Your seed here'}
							onChange={(e) => {
								this.setState({ errorMessage: '' });
								let formattedText = removeInvalidChar(e.target.value, 'both');
								if (type(e.target.value) === 'mixed') {
									this.setState({
										seedType: 'mixed',
										isFormatValidated: false,
										seed: formattedText,
										errorMessage: 'Invalid format'
									});
								} else if (type(e.target.value) === 'number') {
									this.setState({
										seed: e.keyCode === 8 ? formattedText : addSpace(formattedText),
										seedType: 'number',
										isFormatValidated: true
									});
								} else {
									formattedText = formattedText.toLowerCase();
									this.setState({
										seed: formattedText,
										seedType: 'letters',
										isFormatValidated: true
									});
								}
							}}
						/>
						<RedText>{errorMessage}</RedText>
						<Button
							// avtive={validateNmemonic(seed, seedType === 'number' ? number : letters)}
							theme={validateLength(seed) && isFormatValidated ? main : themeDarkGray}
							label={'Confirm'}
							handleOnClick={this.handleOnClick}
						/>
					</Fragment>
				) : (
					this.generateSteps()
				)}
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	modalContent: state.common.modalContent,
	wallet: state.common.wallet
});

const mapDispatchToProps = {
	openModal,
	closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateWallet);

const RedText = styled.div`
	color: ${DARK_RED};
	height: 80px;
	padding-top: 20px;
	box-sizing: border-box;
`;
const Input = styled.input`
	width: 200px;
	height: 50px;
	border-radius: 38px;
	background-color: ${DARK_GREY2};
	font-size: ${LARGE};
	color: white;
	border: none;
	text-align: center;
	margin: 75px 0 10px 0;
	::placeholder {
		color: ${GREYISH_BROWN};
	}
	&:focus {
		outline: none;
	}
`;
const Image = styled.img`
	height: 40px;
	margin: 50px;
`;
const Text = styled.div`
	max-width: 520px;
	width: 80%;
	font-size: ${MEDIUM};
	color: #7f7f7f;
	margin: 40px 20px;
	color: ${BROWN_GREY};
	display: flex;
	align-items: center;
`;
const SeedLength = styled.div`
	font-size: ${(props) => (props.active ? HUGE : EXTRA_LARGE)};
	color: ${(props) => (props.active ? 'white' : '#6d7278')};
	justify-content: center;
	display: flex;
	cursor: pointer;
	margin: 10px;
`;
const SeedLengthWrapper = styled.div`
	margin-top: 50px;
	align-items: center;
	justify-content: center;
	height: 40px;
	margin-bottom: 20px;
	display: flex;
`;
const LengthButton = styled.div`
	margin: 25px;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	display: flex;
`;
const NavigationButton = styled.div`
	width: 288px;
	height: 54px;
	border-radius: 27px;
	background-color: ${(props) => (props.active ? DARK_GREY3 : DARK_GREY)};
	color: ${(props) => (props.active ? LIGHT_YELLOW : BROWN_GREY)};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border: ${(props) => props.active && 'solid 1px rgb(51, 51, 51)'};
	box-shadow: ${(props) => props.active && 'rgba(0, 0, 0, 0.05) 0px 4px 8px 0px'};
	&:hover {
		color: ${ORANGEY_YELLOW};
		background-color: ${(props) => (props.active ? DARK_GREY2 : DARK_GREY)};
	}
`;

const NavigationBar = styled.div`
	width: 100%;
	max-width: 577px;
	height: 54px;
	border-radius: 27px;
	background-color: ${DARK_GREY};
	display: flex;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
`;

const InfoBox = styled.textarea`
  font-size: ${LARGE}
	max-width: 577px;
	height: 140px;
	width: 100%;
	border-radius: 5px;
	border: solid 1px rgb(51, 51, 51);
	background-color: #202124;
	line-height: 1.64;
	color: white;
	padding: 20px;
	box-sizing: border-box;
	border-radius: 23px;
	resize: none;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
	&:focus {
		outline: none;
		border: solid 1px ${(props) => (props.isFormatValidated ? ORANGEY_YELLOW : DARK_RED)} ;
	}
	::placeholder {
		color: ${GREYISH_BROWN};
		font-size: ${SMALL};
	}
`;
const Container = styled.div`
	max-width: 604px;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-flow: column;
`;
const Text2 = styled.div`
	height: 82px;
	font-size: ${SMALL};
	line-height: 1.64;
	color: ${BROWN_GREY};
`;
const Title = styled.div`
	margin: 30px
	font-size: ${EXTRA_LARGE};
	color: #7f7f7f;
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: space-between;
	width: 230px;
`;
