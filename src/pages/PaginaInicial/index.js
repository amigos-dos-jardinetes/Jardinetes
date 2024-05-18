import React, { useRef } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../PaginaInicial/styles';
import { useNavigation } from '@react-navigation/native';


export default function PaginaInicial() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const scrollToTop = () => {
    console.log('Scrolling to top');
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <ScrollView
      horizontal  // Configuração para permitir rolar horizontalmente

    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground
          source={require('../../assets/PaginaFinal.png')}
          style={styles.backgroundImage}
        >

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

          <Image
            source={require('../../assets/utfpr.jpeg')}
            style={styles.overlayImage}
          />

          <Image
            source={require('../../assets/keep.png')}
            style={styles.keep}
          />

          <Image
            source={require('../../assets/mascote.jpg')}
            style={styles.mascote}
          />

          <View style={styles.utfprBox}>
            <Text style={styles.whiteTextBoxText1}>Sobre a UTFPR{"\n"}O que podemos escrever?</Text>
          </View>


          <View style={styles.quadBox1}>
            <Text style={styles.quadboxText1}>Como o projeto nasceu</Text>
          </View>


          <View style={styles.quadBox2}>
            <Text style={styles.quadboxText2}>Acrescentar algumas frases bem pequenas e importantes que ajudaram a criar o projeto. Pequenos sonhos.</Text>
          </View>

          <View style={styles.quadBox3}>
            <Text style={styles.quadboxText3}>Texto falando do objetivo.</Text>
          </View>

          <View style={styles.quadBox4}>
            <Text style={styles.quadboxText4}>Texto.</Text>
          </View>


          <View style={styles.valbox}>
            <Text style={styles.valboxtext}>NOSSOS VALORES</Text>
          </View>

          <View style={styles.valbox1}>
            <Text style={styles.valboxtext1}>"Sonhamos o voo, mas tememos as alturas. Para voar é preciso amar o vazio. Porque o voo só acontece se houver o vazio. O vazio é o espaço da liberdade, a ausência de certezas. Os homens querem voar, mas temem o vazio. Não podem viver sem certezas. Por isso trocam o voo por gaiolas. As gaiolas são o lugar onde as certezas moram."</Text>
          </View>

          <View style={styles.valbox2}>
            <Text style={styles.valboxtext2}>Rubem Alves</Text>
          </View>

          <View style={styles.valx}>
            <Text style={styles.valxtext}>Desenho com valor tal e uma leve explicação sobre.</Text>
          </View>

          <View style={styles.valy}>
            <Text style={styles.valytext}>Desenho simbolisando valor Y.</Text>
          </View>

          <View style={styles.whiteTextBox}>
            <Text style={styles.whiteTextBoxText}>Nome</Text>
          </View>


          <View style={styles.blackTextBox}>
            <Text style={styles.blackTextBoxText}>Estudante de Engenharia Ambiental na UTFPR que está em seu terceiro período. Descrever sua interação com o curso e os amigos e com o que se identifica; O curso e o que mais gosta de estudar atualmente!</Text>
          </View>

          <View style={styles.cur}>
            <Text style={styles.curtext}>Curiosidades sobre mim:</Text>
          </View>

          <View style={styles.textbox5}>
            <Text style={styles.text5}>5. “As pessoas são solitárias porque constroem muros ao invés de pontes.”
              Como dito anteriormente, o medo pode se tornar uma barreira diante do convívio com o outro. Tal fator, pode gerar ou alimentar problemas, como a depressão, por isso, o isolamento nunca é a melhor saída. Os laços que criamos com outras pessoas podem ajudar e nos fortalecer em momentos de dificuldade.</Text>
          </View>

          <View style={styles.textbox14}>
            <Text style={styles.text14}>14. “Para enxergar claro, bastar mudar a direção do olhar.”
              Quantas vezes você já tentou mudar a direção das coisas, mas focando apenas em um caminho?  Refletimos, anteriormente, que a vida é cheia de caminhos para trilhar. Sendo assim, às vezes é necessário apenas olhar para uma nova direção, tomar um novo rumo. Insistir naquilo que não está funcionando pode não ser a melhor solução.</Text>
          </View>

          <View style={styles.topButtonContainer}>
            <TouchableOpacity
              style={styles.topButton}
              onPress={scrollToTop}
            >

            </TouchableOpacity>
          </View>

        </ImageBackground>


      </ScrollView>
    </ScrollView>
  );
}
