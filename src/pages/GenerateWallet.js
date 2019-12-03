import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { BROWN_GREY, DARK_GREY, ORANGEY_YELLOW, DARK_GREY2, GREYISH_BROWN } from '../constant';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Button from '../components/Button';

// style={seedLength === x ? selectedText : text}

export default class GenerateWallet extends Component {
	state = {
		active: '2',
		seedLength: 12,
		step: 3
	};
	handleOnClick = () => {
		console.log('confirm your seed!!');
	};
	step1 = () => {
		this.setState({ step: 2 });
	};
	step2 = () => {
		this.setState({ step: 3 });
	};
	step3 = () => {
		console.log('check sum...');
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
						<Button buttonStyle={'gray'} label={'Generate'} handleOnClick={this.step1} />
					</Fragment>
				);
			case 2:
				return (
					<Fragment>
						<Image src={'card.png'} />
						<Text2>Please look on your card and write down your seed.</Text2>
						<Button buttonStyle={'gray'} label={'I’ve written my seed!'} handleOnClick={this.step2} />
					</Fragment>
				);
			case 3:
				return (
					<Fragment>
						<Input placeholder={'Your Answer'} />
						<Text2>Sum up ALL the numbers of you seed</Text2>
						<Button buttonStyle={'gray'} label={'Confirm'} handleOnClick={this.step3} />
					</Fragment>
				);
			default:
				return;
		}
	};

	render() {
		const { active } = this.state;
		return (
			<Container>
				<Title>
					<AccountBalanceWalletIcon htmlColor={BROWN_GREY} fontSize="large" />Wallet is empty
				</Title>
				<NavigationBar>
					<NavigationButton onClick={() => this.setState({ active: '1' })} active={active === '1' && true}>
						Input existing seed
					</NavigationButton>
					<NavigationButton onClick={() => this.setState({ active: '2' })} active={active === '2' && true}>
						Generate seed
					</NavigationButton>
				</NavigationBar>

				{active === '1' ? (
					<Fragment>
						<Text>Disconnect from the Internet if you want to be absolutely safe on this step</Text>
						<InfoBox placeholder={'Your seed here'} />
						<Button buttonStyle={'gray'} label={'Confirm'} handleOnClick={this.handleOnClick} />
					</Fragment>
				) : (
					this.generateSteps()
				)}
			</Container>
		);
	}
}
const Input = styled.input`
	width: 200px;
	height: 50px;
	border-radius: 38px;
	background-color: ${DARK_GREY2};
	font-size: 20px;
	color: white;
	border: none;
	text-align: center;
	::placeholder {
		color: ${GREYISH_BROWN};
	}
	&:focus {
		outline: none;
	}
`;
const Image = styled.img`height: 40px;`;
const Text = styled.div`
	width: 270px;
	height: 41px;
	font-size: 18px;
	color: ${BROWN_GREY};
`;
const SeedLength = styled.div`
	font-size: ${(props) => (props.active ? '35px' : '25px')};
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
	background-color: ${(props) => (props.active ? DARK_GREY2 : DARK_GREY)};
	color: ${(props) => (props.active ? ORANGEY_YELLOW : BROWN_GREY)};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const NavigationBar = styled.div`
	width: 588px;
	height: 54px;
	border-radius: 27px;
	background-color: ${DARK_GREY};
	display: flex;
`;

const InfoBox = styled.textarea`
	height: 140px;
	width: 100%;
	border-radius: 5px;
	border: solid 1px ${BROWN_GREY};
	background-color: #202124;
	line-height: 1.64;
	color: ${BROWN_GREY};
	padding: 20px;
	box-sizing: border-box;
	border-radius: 23px;
	::placeholder {
		color: #4c4c4c;
		font-size: 16px;
	}
`;
const Container = styled.div`
	max-width: 604px;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Text2 = styled.div`
	height: 82px;
	font-size: 18px;
	line-height: 1.64;
	color: ${BROWN_GREY};
`;
const Title = styled.div`
	font-size: 25px;
	color: #7f7f7f;
	height: 150px;
	max-width: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
