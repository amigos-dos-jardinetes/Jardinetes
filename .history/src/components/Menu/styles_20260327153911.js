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



	});
};
