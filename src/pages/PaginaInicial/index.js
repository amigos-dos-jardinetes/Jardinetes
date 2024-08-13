import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, } from 'react-native';
import { styles } from '../PaginaInicial/styles';
import { useNavigation } from '@react-navigation/native';


export default function PaginaInicial() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const handlePress = () => {
    Linking.openURL('https://www.instagram.com/amigosdosjardinetes.ct/'); // Substitua pelo link desejado
  };

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };


  return (
    <ScrollView ref={scrollViewRef}  style={styles.container3}>
    <View style={styles.container}>
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
                <Text style={styles.navbarButton}>PÁGINA INICIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('')}>
                <Text style={styles.navbarButton}>AÇÕES SOCIAIS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
                <Text style={styles.navbarButton}>FAÇA SUA PARTE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('')}>
                <Text style={styles.navbarButton}>QUEM SOMOS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Contato')}>
                <Text style={styles.navbarButton}>CONTATO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                <Text style={styles.navbarButton}>LOGIN</Text>
            </TouchableOpacity>
        </View>


<View style={styles.titleView}>
<Image source={require('../../assets/amigosTitle.png')}  style={styles.amigosTitle} />
<Image source={require('../../assets/utfpr.jpeg')}  style={styles.utfprImage} />
<Image source={require('../../assets/oneProject.png')}  style={styles.projetoUTFPR} />
<View style={styles.orangeRet}><Text style={styles.orangeText}>A Universidade Tecnológica Federal do Paraná (UTFPR) é uma instituição pública de ensino superior com foco em ciência e tecnologia. Tem como missão desenvolver a educação tecnológica de excelência, construir e compartilhar o conhecimento voltado à solução dos reais desafios da sociedade.</Text></View>
<Image source={require('../../assets/illustration.png')}  style={styles.illustration} />
<Image source={require('../../assets/sobreProjeto.png')}  style={styles.sobreProjeto} />
<View style={styles.row}>
  <View style={styles.retBig}>
    <Text style={styles.retBigText}>   Os jardinetes são espaços mantidos pela administração municipal.{"\n"}</Text>
    <Text style={styles.retBigText}>   No entanto, a conservação dessas áreas poderia ser reforçada com a participação de estudantes voluntários, os quais podem auxiliar na coleta de resíduos, na rega de árvores em crescimento e na valorização dos espaços próximos às suas residências.{"\n"}</Text>
    <Text style={styles.retBigText}>   Os jardinetes fazem parte das unidades de proteção integral da cidade, visando preservar a natureza e permitindo apenas o uso indireto de seus recursos naturais.{"\n"}</Text>
    <Text style={styles.retBigText}>   Para este projeto, são selecionados espaços de até 700m², conforme a medição disponível no site da prefeitura. Além dos jardinetes, praças, largos, núcleos ambientais e áreas de manutenção públicas também podem ser considerados.</Text>
  </View>
<View style={styles.column}>
  <View style={styles.retMenor}>
      <Text style={styles.retMenorText}>O projeto está sintonizado com os ODS 3 - Saúde e bem-estar, ODS 4 - Educação de qualidade e ODS 11 - Cidades e comunidades sustentáveis.</Text>
  </View>
  <View style={styles.retMenor2}>
      <Text style={styles.retMenorText}>Objetivo do projeto: Reconectar as pessoas aos espaços urbanos por meio do cuidado dos jardinetes e demais áreas verdes das cidades.</Text>
  </View>
  <View style={styles.retMenor}>
      <Text style={styles.retMenorText3}>O projeto contribui para a “ecologia e democracia local”, por meio das ações: (1) participação de pessoas interessadas; (2) educação ambiental; (3) novos modelos de habitação e vizinhança.</Text>
  </View>
  </View>
</View>

<Image source={require('../../assets/conheca.png')}  style={styles.conheca} />

<View style={styles.row}>

<Image source={require('../../assets/gaiaInicial.png')}  style={styles.gaiaInicial} />
<View style={styles.column}>
<View style={styles.row}>
<View style={styles.ponta}></View>
<View style={styles.ponta2}></View>
</View>
<View style={styles.quadro}>
  <Text style={styles.gaiaTitle}>Gaia</Text>
  <Text style={styles.gaiaText}>  Olá! Meu nome é Gaia, eu estudo Engenharia Ambiental e Sanitária, na UTFPR.{"\n"}</Text>
  <Text style={styles.gaiaText}>  Adoro passar meu tempo ao ar livre, observando a beleza da vida e aprendendo sobre práticas sustentáveis.{"\n"}</Text>
  <Text style={styles.gaiaText}>  Estou sempre pronta para enfrentar desafios e fazer a diferença no mundo!</Text>
</View>
</View>

</View>


<Image source={require('../../assets/curiosidadesTitle.png')}  style={styles.curiosidadestitle} />
<View style={styles.curioText}>
<Text style={styles.curiosidades}>1. Sou defensora das áreas verdes e estou sempre dedicada em preservar e proteger a biodiversidade.</Text>
<Text style={styles.curiosidades}>2. Sou especialista em reciclagem e reutilização de materiais, promovo práticas sustentáveis de consumo e de redução de resíduos.</Text>
<Text style={styles.curiosidades}>3. Estou sempre pronta para oferecer orientação e inspiração para aqueles que desejam fazer a diferença no mundo.</Text>
<Text style={styles.curiosidades}>4. Tenho compromisso com a preservação ambiental e me empenho para garantir um futuro sustentável para as próximas gerações.</Text>
<Text style={styles.curiosidades}>5. Adoro ser fonte de inspirações para ações positivas, pois cada pequena ação pode fazer uma grande diferença na proteção do planeta.</Text>
</View>

<View style={styles.row}>
    <Image source={require('../../assets/bigTree.png')}  style={styles.bigTree} />
    <Image source={require('../../assets/smallTree.png')}  style={styles.smallTree} />
    <TouchableOpacity onPress={scrollToTop}>
              <Image source={require('../../assets/final.png')} style={styles.final} />
    </TouchableOpacity>

    <View style={styles.column}>
    <TouchableOpacity style={styles.ret1} onPress={handlePress}>
              <Text style={styles.noticias}>Mais notícias</Text>
            </TouchableOpacity>
      <View style={styles.ret2}></View>
    </View>

</View>


</View>


<View style={styles.navbar2}>
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage3} />
      </View>
      </View>

        </View>
        </ScrollView>
  );
}
