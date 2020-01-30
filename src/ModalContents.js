export const signingContent = {
	logo: 'contract.png',
	message: 'Signing...'
};

export const processingContent = (message, title) => ({
	title,
	logo: 'Processing',
	message: message || 'Processing...',
	disableBackdropClick: true
});

export const confirmOnCardContent = {
	logo: 'card.png',
	message: 'Please confirm on your card',
	disableBackdropClick: true
};

export const resetContent = (callback) => ({
	title: 'Can\'t find your password?',
	logo: '',
	message: 'Would you like to reset your wallet?',
	action: {
		okCallback: callback,
		okText: 'Reset',
		CancelText: 'Cancel'
	}
});

export const checkSumFail = (callback) => ({
	logo: '',
	message: 'Check sum fail, please check your seed and try again',
	action: {
		okCallback: callback,
		okText: 'ok'
	}
});

export const errorMessageContent = (error) => ({
	title: 'Error',
	logo: '',
	message: error
});

export const hintMessageContent = (message, disableBackdropClick, callback) => ({
	title: 'Notice',
	logo: '',
	message: message,
	disableBackdropClick,
	action: {
		okCallback: callback,
		okText: 'Ok'
	}
});
