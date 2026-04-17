import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
	const { width, height } = useWindowDimensions();

	// dimensões responsivas
	const footerHeight = Math.max(56, width * 0.09);
	const araucariasHeight = Math.max(72, width * 0.13);
	const logoScale = Math.max(0.04, width * 0.0007);

	return StyleSheet.create({

		// espaço reservado para evitar sobreposição do conteúdo
		spacer: {
			// sempre reservar pelo menos 120px para garantir que o rodapé caiba
			height: Math.max(footerHeight + araucariasHeight * 0.9, 120),
			width: '100%',
		},

		// imagem araucarias posicionada acima do rodapé, no canto direito
		araucarias: {
			position: 'absolute',
			right: width * 0.04,
			bottom: footerHeight + (araucariasHeight * 0.05),
			width: araucariasHeight * 1.4,
			height: araucariasHeight,
			resizeMode: 'contain',
			zIndex: 11,
		},

		imgAraucarias: {
			width: '100%',
			height: '100%',
			resizeMode: 'contain',
		},

		// rodapé fixo
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
