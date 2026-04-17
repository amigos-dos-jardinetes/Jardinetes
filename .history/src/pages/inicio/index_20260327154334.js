import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, useWindowDimensions } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../components/Menu/Menu';
import Rodape from '../../components/Rodape/Rodape';

export default function Inicio() {

	const navigation = useNavigation();
	const scrollViewRef = useRef(null);
	const myStyles = styles();
	const { width, height } = useWindowDimensions();

	//Redirecionar para o link
	const handlePress = () => {
		Linking.openURL('https://www.instagram.com/amigosdosjardinetes.ct/');
	};

	const openLink = (url) => {
		Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
	};

	//Scrollar para cima ao clicar
	const scrollToTop = () => {
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollTo({
				y: 0,
				animated: true,
			});
		}
	};

	return (
		<ScrollView ref={scrollViewRef} style={myStyles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
			<View style={myStyles.linha}>

				<Menu titulo="Amigos dos Jardinetes" />

				<View style={myStyles.titleView}>
					<View style={myStyles.quadro}>
						<Text style={myStyles.quadroTexto}>O programa Amigos dos Jardinetes é um Projeto de Extensão ligado à disciplina Introdução à Sustentabilidade do DAELN - Departamento de Eletrônica da UTFPR Câmpus Curitiba. Ambos tem como objetivo realizar atividades relacionadas aos Jardinetes - pequenas áreas verdes ou jardins urbanos.</Text>
					</View>
					<Image source={require('../../assets/illustration.png')} style={myStyles.illustration} />
					<Image source={require('../../assets/sobreProjeto.png')} style={myStyles.sobreProjeto} />
					<View style={myStyles.row}>
						<View style={myStyles.retBig}>
							<Text style={myStyles.retBigText}>   Os jardinetes são espaços mantidos pela administração municipal.{"\n"}</Text>
							<Text style={myStyles.retBigText}>   No entanto, a conservação dessas áreas poderia ser reforçada com a participação de estudantes voluntários, os quais podem auxiliar na coleta de resíduos, na rega de árvores em crescimento e na valorização dos espaços próximos às suas residências.{"\n"}</Text>
							<Text style={myStyles.retBigText}>   Os jardinetes fazem parte das unidades de proteção integral da cidade, visando preservar a natureza e permitindo apenas o uso indireto de seus recursos naturais.{"\n"}</Text>
							<Text style={myStyles.retBigText}>   Para este projeto, são selecionados espaços de até 700m², conforme a medição disponível no site da prefeitura. Além dos jardinetes, praças, largos, núcleos ambientais e áreas de manutenção públicas também podem ser considerados.</Text>
						</View>
						<View style={myStyles.column}>
							<View style={myStyles.row}>
								<Image source={require('../../assets/cidades.png')} style={myStyles.cidades} />
								<View style={myStyles.retMenor}>
									<Text style={myStyles.retMenorText}>O projeto está sintonizado com os ODS 3 - Saúde e bem-estar, ODS 4 - Educação de qualidade e ODS 11 - Cidades e comunidades sustentáveis.</Text>
								</View>
							</View>
							<View style={myStyles.row}>
								<Image source={require('../../assets/educacao.png')} style={myStyles.educacao} />
								<View style={myStyles.retMenor2}>
									<Text style={myStyles.retMenorText}>Objetivo do projeto: Reconectar as pessoas aos espaços urbanos por meio do cuidado dos jardinetes e demais áreas verdes das cidades.</Text>
								</View>
							</View>
							<View style={myStyles.row}>
								<View style={myStyles.retMenor3}>
									<Text style={myStyles.retMenorText3}>O projeto contribui para a “ecologia e democracia local”, por meio das ações: (1) participação de pessoas interessadas; (2) educação ambiental; (3) novos modelos de habitação e vizinhança.</Text>
								</View>
								<Image source={require('../../assets/saude.png')} style={myStyles.saude} />
							</View>
						</View>
					</View>

					<Image source={require('../../assets/nossosValores.png')} style={myStyles.nossosValores} />
					<View style={myStyles.row}>
						<View style={myStyles.column1}>
							<Image source={require('../../assets/sustentaInicIcon.png')} style={myStyles.sustentaInicIcon} />
							<Text style={myStyles.valoresText}>Sustentabilidade</Text>
							<Image source={require('../../assets/coletividadeInicIcon.png')} style={myStyles.coletividadeInicIcon} />
							<Text style={myStyles.valoresText1}>Coletividade</Text>
						</View>
						<View style={myStyles.column2}>
							<Image source={require('../../assets/desenvolvimentoInicIcon.png')} style={myStyles.desenvolvimentoInicIcon} />
							<Text style={myStyles.valoresText2}>Desenvolvimento</Text>
						</View>
						<View style={myStyles.column3}>
							<Image source={require('../../assets/bemInicIcon.png')} style={myStyles.bemInicIcon} />
							<Text style={myStyles.valoresText3}>Bem-estar</Text>
							<Image source={require('../../assets/educaInicIcon.png')} style={myStyles.educaInicIcon} />
							<Text style={myStyles.valoresText4}>Educação</Text>
						</View>
					</View>

					<Image source={require('../../assets/conheca.png')} style={myStyles.conheca} />

					<View style={myStyles.row}>
						<Image source={require('../../assets/gaiaInicial.png')} style={myStyles.gaiaInicial} />
						<View style={myStyles.column}>
							<View style={myStyles.row}>
								<View style={myStyles.ponta}></View>
								<View style={myStyles.ponta2}></View>
							</View>
							<View style={myStyles.quadro}>
								<Text style={myStyles.gaiaTitle}>Gaia</Text>
								<Text style={myStyles.gaiaText}>  Olá! Meu nome é Gaia, eu estudo Engenharia Ambiental e Sanitária, na UTFPR.{"\n"}</Text>
								<Text style={myStyles.gaiaText}>  Adoro passar meu tempo ao ar livre, observando a beleza da vida e aprendendo sobre práticas sustentáveis.{"\n"}</Text>
								<Text style={myStyles.gaiaText}>  Estou sempre pronta para enfrentar desafios e fazer a diferença no mundo!</Text>
							</View>
						</View>

					</View>

					<Image source={require('../../assets/curiosidadesTitle.png')} style={myStyles.curiosidadestitle} />
					<View style={myStyles.curioText}>
						<Text style={myStyles.curiosidades}>1. Sou defensora das áreas verdes e estou sempre dedicada em preservar e proteger a biodiversidade.</Text>
						<Text style={myStyles.curiosidades}>2. Sou especialista em reciclagem e reutilização de materiais, promovo práticas de consumo sustentável e de redução de resíduos.</Text>
						<Text style={myStyles.curiosidades}>3. Estou sempre pronta para oferecer orientação e inspiração para aqueles que desejam fazer a diferença no mundo.</Text>
						<Text style={myStyles.curiosidades}>4. Tenho compromisso com a preservação ambiental e me empenho para garantir um futuro sustentável para as próximas gerações.</Text>
						<Text style={myStyles.curiosidades}>5. Adoro ser fonte de inspirações para ações positivas, pois cada pequena ação pode fazer uma grande diferença na proteção do planeta.</Text>
					</View>

					<View style={myStyles.row}>
						<Image source={require('../../assets/bigTree.png')} style={myStyles.bigTree} />
						<Image source={require('../../assets/smallTree.png')} style={myStyles.smallTree} />
						<TouchableOpacity onPress={scrollToTop}>
							<Image source={require('../../assets/final.png')} style={myStyles.final} />
						</TouchableOpacity>

						<View style={myStyles.column}>
							<TouchableOpacity style={myStyles.ret1} onPress={handlePress}>
								<Text style={myStyles.noticias}>Mais notícias</Text>
							</TouchableOpacity>
							<View style={myStyles.ret2}></View>
						</View>

					</View>

				</View>

				<Rodape />

			</View>
		</ScrollView>
	);
}
