import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({

		navbar: {
			alignItems: 'center',
			backgroundColor: '#195439',
			flexDirection: 'row',
			height: width * 0.073,
			justifyContent: 'space-around',
			width: '100%',
		},

		navbarButton: {
			color: '#FFF',
			fontSize: width * 0.017,
			fontWeight: 'bold'
		},

		lemon: {
			color: '#89985c',
			fontFamily: "Lemon",
			fontWeight: 400,
			fontStyle: 'normal',
			fontSize: 100,
			marginTop: width * 0.04,
			textAlign: 'center',
			textShadowColor: '#4c6523',
			textShadowOffset: { width: 5, height: 2 },
			textShadowRadius: 0,
		},

		title: {
			height: width * 0.140,
			width: '100%',
		}

	});
};
