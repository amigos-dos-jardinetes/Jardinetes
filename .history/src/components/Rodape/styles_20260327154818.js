import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
	const { width, height } = useWindowDimensions();


	const footerHeight = Math.max(56, width * 0.10);
	const araucariasHeight = Math.max(80, width * 0.14);
	const logoScale = Math.max(0.04, width * 0.0007);

	return StyleSheet.create({

		spacer: {
			height: footerHeight + araucariasHeight * 0.4,
			width: '100%',
		},

		araucarias: {
			width: '100%',
			height: araucariasHeight,
			alignItems: 'flex-end',
			paddingRight: width * 0.05,
			backgroundColor: 'transparent',
		},

		imgAraucarias: {
			width: araucariasHeight * 1.2,
			height: araucariasHeight,
			resizeMode: 'contain',
		},

		rodape: {
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: 0,
			alignItems: 'center',
			backgroundColor: '#195439',
			flexDirection: 'column',
			height: footerHeight,
			justifyContent: 'center',
			paddingHorizontal: width * 0.04,
			zIndex: 10,
		},

		linha: {
			flexDirection: 'row',
			width: '100%',
			alignItems: 'center',
			justifyContent: 'space-between',
		},

		coluna: {
			flex: 1,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},

		logoUTFPR: {
			width: 144 * logoScale,
			height: 57 * logoScale,
			resizeMode: 'contain',
		},

		navBt: {
			marginVertical: Math.max(6, (10 / 1920) * width),
		},

		textNav: {
			fontSize: Math.max(12, (20 / 1920) * width),
			color: '#ffffff',
		},

		instaNav: {
			width: Math.max(24, ((512 * 0.1) / 1920) * width),
			height: Math.max(24, ((512 * 0.1) / 1920) * width),
			marginVertical: Math.max(6, (10 / 1920) * width),
			resizeMode: 'contain',
		},

	});
};
