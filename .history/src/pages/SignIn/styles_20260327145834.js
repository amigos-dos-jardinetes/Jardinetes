import { StyleSheet, useWindowDimensions, Platform } from 'react-native';

// 📐 Largura da tela de design que você usou como base
const DESIGN_WIDTH = 1440; 

// 📱 Opção: Definir um ponto de quebra (breakpoint) para dispositivos móveis, se necessário
const MOBILE_BREAKPOINT = 768; 

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  // 📏 Fator de escala: a proporção entre a largura atual da tela e a largura de design.
  // Usado para escalar todos os valores baseados em pixel.
  const scaleFactor = width / DESIGN_WIDTH; 

  // 2️⃣ Helper para aplicar o fator de escala (para valores em pixels do design)
  const scale = (size) => size * scaleFactor;

  // 📝 Opção: Determinar o tipo de dispositivo (útil para media queries)
  const isMobile = width < MOBILE_BREAKPOINT;

  // -------------------------------------------------------------
  // 💡 Lógica de Estilo Condicional:
  // Se quiser que o card ocupe mais espaço na vertical em telas menores:
  const cardHeight = isMobile ? '70%' : '50%';
  const navbarTop = isMobile ? '10%' : '18%';
  // -------------------------------------------------------------

  return StyleSheet.create({
    // 🧱 Estilos de Contêiner Básico
    container: {
      // Usar flex: 1 é geralmente melhor para ocupar 100% da altura do contêiner pai
      // ou deixar '100%' se o contêiner pai tiver altura definida
      flex: 1, 
      width: '100%', // Use '100%' em vez de 'width' para ser mais idiomático
      resizeMode: 'contain',
    },

    // 🖼️ Estilo da Imagem
    image: {
      // Usando a constante de design: (1024 é a altura original, 1440 a largura original)
      width: '100%',
      height: scale(1024), // height = 1024 * scaleFactor
      resizeMode: 'contain',
    },

    // ⛔ Estilo de Texto de Erro
    errorText: {
      color: 'red',
      // Se o fontSize original for 10.5px
      fontSize: scale(10.5), 
      // Se o marginVertical original for 3.75px
      marginVertical: scale(3.75), 
      textAlign: 'center',
    },

    // 🧭 Estilo da Barra de Navegação
    navbar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
      position: 'absolute', 
      left: '12.7%',
      // Se a largura original for 1117.5px
      width: scale(1117.5), 
      top: navbarTop, // Usando o valor condicional
      justifyContent: 'space-around',
      // Adição responsiva: usar margin-bottom para empurrar o conteúdo abaixo em telas menores (se for relevante)
      // marginBottom: isMobile ? scale(20) : 0, 
    },

    // 🔘 Estilo do Botão da Barra de Navegação
    navbarButton: {
      fontFamily: 'Helvetica',
      alignItems: 'center',
      justifyContent: 'center',
      // Se o fontSize original for 20.88px
      fontSize: scale(20.88), 
      fontWeight: 'bold',
      color: '#271C00',
      // Nota: '50px' não é a unidade de estilo do React Native, deve ser um número ou valor percentual.
      marginBottom: scale(50), 
      // Se o marginRight original for 21.6px
      marginRight: scale(21.6), 
    },

    // 💳 Estilo do Card
    card: {
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      position: 'absolute',
      backgroundColor: '#FFFEF4', 
      // Se o borderRadius original for 63.75px
      borderRadius: scale(63.75), 
      top: '28%',
      // Opção de estilo responsivo: 
      width: isMobile ? '80%' : '30%', // Ocupa mais largura no celular
      height: cardHeight, // Usando o valor condicional
      // Cálculo de 'left' original: left = width - (width / 1.52) => left = width * (1 - 1/1.52) ≈ width * 0.342
      // Para manter o card centralizado em telas pequenas:
      left: isMobile ? '10%' : width - (width / 1.52),
    },

    // 🌳 Estilos das Árvores (Mantendo a lógica de proporção/posição original)
    // ... use a função scale() para todos os tamanhos baseados em pixel (width * 0.XXX)
    
    // ...
    // Exemplo para 'smallTree' (se a largura original fosse 90.75px e a altura fosse 214.5px):
    smallTree: {
      width: scale(90.75), 
      height: scale(214.5), 
    },
    
    // ...
    
    // ⬇️ Exemplo para 'buttonLogin' (se o borderRadius original fosse 22.5px):
    buttonLogin: {
      marginTop: scale(22.5),
      backgroundColor: '#166034', 
      color: 'white', 
      paddingVertical: '1%', 
      paddingHorizontal: '12%', 
      borderRadius: scale(22.5),
    },
    // ...

  });
};