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
			color: '#BBD089',
			fontFamily: "Lemon",
			fontWeight: '400',
			fontStyle: 'normal',
			fontSize: width * 0.08,
			textAlign: 'center',
			zIndex: 2,
		},

		lemonShadow: {
			color: '#2f4b20',
			fontFamily: "Lemon",
			fontWeight: '400',
			fontStyle: 'normal',
			fontSize: width * 0.08,
			textAlign: 'center',
			position: 'absolute',
			left: 0,
			right: 0,
			zIndex: 1,
			transform: [{ translateX: width * 0.005 }, { translateY: width * 0.003 }],
		},

		title: {
			height: width * 0.16,
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'relative',
		}

	});
};
