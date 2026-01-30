import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({

		araucarias: {
			height: width * 0.146875,
			alignItems: 'flex-end',
			paddingRight: 100,
			width: '100%',
		},

		imgAraucarias: {
			height: width * 0.146875,
			width: 347,
			height: 300,
		},

		rodape: {
			alignItems: 'center',
			backgroundColor: '#195439',
			flexDirection: 'column',
			height: width * 0.1,
			justifyContent: 'space-around',
			width: '100%',
		},

		linha: {
			flexDirection: 'row',
			width: '100%',
		},

		coluna: {
			flex: 1,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},

		logoUTFPR: {
			width: 144 * (width * 0.000677),
			height: 57 * (width * 0.000677),
		},

		navBt: {
			marginTop: (10 / 1920) * width,
			marginBottom: (10 / 1920) * width,
		},

		textNav: {
			fontSize: (20 / 1920) * width,
			color: '#ffffff',
		},

		instaNav: {
			width: ((512 * 0.1) / 1920) * width,
			height: ((512 * 0.1) / 1920) * width,
			marginTop: (10 / 1920) * width,
			marginBottom: (10 / 1920) * width,
		},

	});
};
