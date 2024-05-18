import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';
import { styles } from '../Impact/styles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Impact() {
    const [userInfo, setUserInfo] = useState(false);
    const auth = getAuth();
    const firestore = getFirestore();
    const storage = getStorage();
    const [userName, setUserName] = useState('');
    const [wallpaper, setWallpaper] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [email, setEmail] = useState('');
    const [pracasSeguidas, setPracasSeguidas] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const novoJardineteDocId = route.params.novoJardineteDocId;
    const { width, height } = Dimensions.get('window');
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
    const [selectedButtonIndex1, setSelectedButtonIndex1] = useState(null);
    const [selectedButtonIndex2, setSelectedButtonIndex2] = useState(null);
    const [selectedButtonIndex3, setSelectedButtonIndex3] = useState(null);
    const [selectedButtonIndex4, setSelectedButtonIndex4] = useState(null);
    const [selectedButtonIndex5, setSelectedButtonIndex5] = useState(null);
    const [selectedButtonIndex6, setSelectedButtonIndex6] = useState(null);
    const [selectedButtonIndex7, setSelectedButtonIndex7] = useState(null);
    const [selectedButtonIndex8, setSelectedButtonIndex8] = useState(null);
    const [selectedButtonIndex9, setSelectedButtonIndex9] = useState(null);
    const [selectedButtonIndex10, setSelectedButtonIndex10] = useState(null);
    const [selectedButtonIndex11, setSelectedButtonIndex11] = useState(null);
    const [selectedButtonIndex12, setSelectedButtonIndex12] = useState(null);
    const [selectedButtonIndex13, setSelectedButtonIndex13] = useState(null);
    const [selectedButtonIndex14, setSelectedButtonIndex14] = useState(null);
    const [selectedButtonIndex15, setSelectedButtonIndex15] = useState(null);
    const [selectedButtonIndex16, setSelectedButtonIndex16] = useState(null);
    const [selectedButtonIndex17, setSelectedButtonIndex17] = useState(null);
    const [selectedButtonIndex18, setSelectedButtonIndex18] = useState(null);
    const [selectedButtonIndex19, setSelectedButtonIndex19] = useState(null);
    const [bemEstar01Value, setBemEstar01Value] = useState(0);
    const [bemEstar02Value, setBemEstar02Value] = useState(0);
    const [bemEstar03Value, setBemEstar03Value] = useState(0);
    const [bemEstar04Value, setBemEstar04Value] = useState(0);
    const [bemEstar05Value, setBemEstar05Value] = useState(0);
    const [infraestrutura01Value, setInfraestrutura01Value] = useState(0);
    const [infraestrutura02Value, setInfraestrutura02Value] = useState(0);
    const [infraestrutura03Value, setInfraestrutura03Value] = useState(0);
    const [infraestrutura04Value, setInfraestrutura04Value] = useState(0);
    const [infraestrutura05Value, setInfraestrutura05Value] = useState(0);
    const [pertencimento01Value, setPertencimento01Value] = useState(0);
    const [pertencimento02Value, setPertencimento02Value] = useState(0);
    const [pertencimento03Value, setPertencimento03Value] = useState(0);
    const [pertencimento04Value, setPertencimento04Value] = useState(0);
    const [pertencimento05Value, setPertencimento05Value] = useState(0);
    const [seguranca01Value, setSeguranca01Value] = useState(0);
    const [seguranca02Value, setSeguranca02Value] = useState(0);
    const [seguranca03Value, setSeguranca03Value] = useState(0);
    const [seguranca04Value, setSeguranca04Value] = useState(0);
    const [seguranca05Value, setSeguranca05Value] = useState(0);
    const [pessoas, setPessoas] = useState(1);

    useEffect(() => {
        const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);
    
        return () => {
          if (unsubscribe && typeof unsubscribe === 'function') {
            unsubscribe();
          }
        };
      }, []);

      const updatePessoasValue = async (incrementValue) => {
        try {
            const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                const currentPessoasValue = data.pessoas || 0;
                const newValue = currentPessoasValue + incrementValue;

                await updateDoc(docRef, {
                    pessoas: newValue,
                });
    
                console.log('Valor de pessoas atualizado no Firebase com sucesso!');
            } else {
                console.log('O documento não existe!');
            }
        } catch (error) {
            console.error('Erro ao atualizar valor de pessoas no Firebase:', error);
        }
    };

      const updateBemEstar01Value = async (incrementValue) => {
        try {
            const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                const currentBemEstar01Value = data.bem_estar_01 || 0;
                const newValue = currentBemEstar01Value + incrementValue;
    
  
                await updateDoc(docRef, {
                    bem_estar_01: newValue,
                });
    
                console.log('Valor de bem_estar_01 atualizado no Firebase com sucesso!');
            } else {
                console.log('O documento não existe!');
            }
        } catch (error) {
            console.error('Erro ao atualizar valor de bem_estar_01 no Firebase:', error);
        }
    };

    const updateBemEstar02Value = async (incrementValue) => {
      try {
          const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
              const data = docSnap.data();
              const currentBemEstar02Value = data.bem_estar_02 || 0;
              const newValue = currentBemEstar02Value + incrementValue;
  
              await updateDoc(docRef, {
                  bem_estar_02: newValue,
              });
  
              console.log('Valor de bem_estar_02 atualizado no Firebase com sucesso!');
          } else {
              console.log('O documento não existe!');
          }
      } catch (error) {
          console.error('Erro ao atualizar valor de bem_estar_01 no Firebase:', error);
      }
  };

  const updateBemEstar03Value = async (incrementValue) => {
    try {
        const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            const currentBemEstar03Value = data.bem_estar_03 || 0;
            const newValue = currentBemEstar03Value + incrementValue;

    
            await updateDoc(docRef, {
                bem_estar_03: newValue,
            });

            console.log('Valor de bem_estar_03 atualizado no Firebase com sucesso!');
        } else {
            console.log('O documento não existe!');
        }
    } catch (error) {
        console.error('Erro ao atualizar valor de bem_estar_03 no Firebase:', error);
    }
};

const updateBemEstar04Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentBemEstar04Value = data.bem_estar_04 || 0;
          const newValue = currentBemEstar04Value + incrementValue;

  
          await updateDoc(docRef, {
              bem_estar_04: newValue,
          });

          console.log('Valor de bem_estar_04 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de bem_estar_04 no Firebase:', error);
  }
};

const updateBemEstar05Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentBemEstar05Value = data.bem_estar_05 || 0;
          const newValue = currentBemEstar05Value + incrementValue;

  
          await updateDoc(docRef, {
              bem_estar_05: newValue,
          });

          console.log('Valor de bem_estar_05 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de bem_estar_05 no Firebase:', error);
  }
};

const updateInfraestrutura01Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentInfraestrutura01Value = data.infraestrutura_01 || 0;
          const newValue = currentInfraestrutura01Value + incrementValue;

        
          await updateDoc(docRef, {
              infraestrutura_01: newValue,
          });

          console.log('Valor de infraestrutura_01 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de infraestrutura_01 no Firebase:', error);
  }
};

const updateInfraestrutura02Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentInfraestrutura02Value = data.infraestrutura_02 || 0;
          const newValue = currentInfraestrutura02Value + incrementValue;

        
          await updateDoc(docRef, {
              infraestrutura_02: newValue,
          });

          console.log('Valor de infraestrutura_02 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de infraestrutura_02 no Firebase:', error);
  }
};


const updateInfraestrutura03Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentInfraestrutura03Value = data.infraestrutura_03 || 0;
          const newValue = currentInfraestrutura03Value + incrementValue;

        
          await updateDoc(docRef, {
              infraestrutura_03: newValue,
          });

          console.log('Valor de infraestrutura_03 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de infraestrutura_03 no Firebase:', error);
  }
};


const updateInfraestrutura04Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentInfraestrutura04Value = data.infraestrutura_04 || 0;
          const newValue = currentInfraestrutura04Value + incrementValue;

        
          await updateDoc(docRef, {
              infraestrutura_04: newValue,
          });

          console.log('Valor de infraestrutura_04 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de infraestrutura_04 no Firebase:', error);
  }
};

const updateInfraestrutura05Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentInfraestrutura05Value = data.infraestrutura_05 || 0;
          const newValue = currentInfraestrutura05Value + incrementValue;

        
          await updateDoc(docRef, {
              infraestrutura_05: newValue,
          });

          console.log('Valor de infraestrutura_05 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de infraestrutura_05 no Firebase:', error);
  }
};

const updatePertencimento01Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentPertencimento01Value = data.pertencimento_01 || 0;
          const newValue = currentPertencimento01Value + incrementValue;

          await updateDoc(docRef, {
              pertencimento_01: newValue,
          });

          console.log('Valor de pertencimento_01 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de pertencimento_01 no Firebase:', error);
  }
};


const updatePertencimento02Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentPertencimento02Value = data.pertencimento_02 || 0;
          const newValue = currentPertencimento02Value + incrementValue;

          await updateDoc(docRef, {
              pertencimento_02: newValue,
          });

          console.log('Valor de pertencimento_02 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de pertencimento_02 no Firebase:', error);
  }
};

const updatePertencimento03Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentPertencimento03Value = data.pertencimento_03 || 0;
          const newValue = currentPertencimento03Value + incrementValue;

          await updateDoc(docRef, {
              pertencimento_03: newValue,
          });

          console.log('Valor de pertencimento_03 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de pertencimento_03 no Firebase:', error);
  }
};

const updatePertencimento04Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentPertencimento04Value = data.pertencimento_04 || 0;
          const newValue = currentPertencimento04Value + incrementValue;

          await updateDoc(docRef, {
              pertencimento_04: newValue,
          });

          console.log('Valor de pertencimento_04 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de pertencimento_04 no Firebase:', error);
  }
};

const updatePertencimento05Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentPertencimento05Value = data.pertencimento_05 || 0;
          const newValue = currentPertencimento05Value + incrementValue;

          await updateDoc(docRef, {
              pertencimento_05: newValue,
          });

          console.log('Valor de pertencimento_05 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de pertencimento_05 no Firebase:', error);
  }
};

const updateSeguranca01Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentSeguranca01Value = data.seguranca_01 || 0;
          const newValue = currentSeguranca01Value + incrementValue;

          await updateDoc(docRef, {
              seguranca_01: newValue,
          });

          console.log('Valor de seguranca_01 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de seguranca_01 no Firebase:', error);
  }
};

const updateSeguranca02Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentSeguranca02Value = data.seguranca_02 || 0;
          const newValue = currentSeguranca02Value + incrementValue;

          await updateDoc(docRef, {
              seguranca_02: newValue,
          });

          console.log('Valor de seguranca_02 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de seguranca_02 no Firebase:', error);
  }
};

const updateSeguranca03Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentSeguranca03Value = data.seguranca_03 || 0;
          const newValue = currentSeguranca03Value + incrementValue;

          await updateDoc(docRef, {
              seguranca_03: newValue,
          });

          console.log('Valor de seguranca_03 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de seguranca_03 no Firebase:', error);
  }
};


const updateSeguranca04Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentSeguranca04Value = data.seguranca_04 || 0;
          const newValue = currentSeguranca04Value + incrementValue;

          await updateDoc(docRef, {
              seguranca_04: newValue,
          });

          console.log('Valor de seguranca_04 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de seguranca_04 no Firebase:', error);
  }
};


const updateSeguranca05Value = async (incrementValue) => {
  try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          const data = docSnap.data();
          const currentSeguranca05Value = data.seguranca_05 || 0;
          const newValue = currentSeguranca05Value + incrementValue;

          await updateDoc(docRef, {
              seguranca_05: newValue,
          });

          console.log('Valor de seguranca_05 atualizado no Firebase com sucesso!');
      } else {
          console.log('O documento não existe!');
      }
  } catch (error) {
      console.error('Erro ao atualizar valor de seguranca_05 no Firebase:', error);
  }
};

      useEffect(() => {

        const sendVariablesToFirebase = async () => {
            try {
                const docRef = doc(firestore, 'jardinetes', novoJardineteDocId); 
                await updateDoc(docRef, {
                    bem_estar_01: 0,
                    bem_estar_02: 0,
                    bem_estar_03: 0,
                    bem_estar_04: 0,
                    bem_estar_05: 0,
                    infraestrutura_01: 0,
                    infraestrutura_02: 0,
                    infraestrutura_03: 0,
                    infraestrutura_04: 0,
                    infraestrutura_05: 0,
                    pertencimento_01: 0,
                    pertencimento_02: 0,
                    pertencimento_03: 0,
                    pertencimento_04: 0,
                    pertencimento_05: 0,
                    seguranca_01: 0,
                    seguranca_02: 0,
                    seguranca_03: 0,
                    seguranca_04: 0,
                    seguranca_05: 0,
                    pessoas: 0,
                });
                console.log('Variáveis enviadas para o Firebase com sucesso!');
            } catch (error) {
                console.error('Erro ao enviar variáveis para o Firebase:', error);
            }
        };
    

        sendVariablesToFirebase();
    

        return () => {

        };
    }, []);


    const handleContinuarPress = () => {
      updateBemEstar01Value(bemEstar01Value, 'bem_estar_01');
      updateBemEstar02Value(bemEstar02Value, 'bem_estar_02');
      updateBemEstar03Value(bemEstar03Value, 'bem_estar_03');
      updateBemEstar04Value(bemEstar04Value, 'bem_estar_04');
      updateBemEstar05Value(bemEstar05Value, 'bem_estar_05');
      updateBemEstar05Value(bemEstar05Value, 'bem_estar_05');
      updateInfraestrutura01Value(infraestrutura01Value, 'infraestrutura_01');
      updateInfraestrutura02Value(infraestrutura02Value, 'infraestrutura_02');
      updateInfraestrutura03Value(infraestrutura03Value, 'infraestrutura_03');
      updateInfraestrutura04Value(infraestrutura04Value, 'infraestrutura_04');
      updateInfraestrutura05Value(infraestrutura05Value, 'infraestrutura_05');
      updatePertencimento01Value(pertencimento01Value, 'pertencimento_01');
      updatePertencimento02Value(pertencimento02Value, 'pertencimento_02');
      updatePertencimento03Value(pertencimento03Value, 'pertencimento_03');
      updatePertencimento04Value(pertencimento04Value, 'pertencimento_04');
      updatePertencimento05Value(pertencimento05Value, 'pertencimento_05');
      updateSeguranca01Value(seguranca01Value, 'seguranca_01');
      updateSeguranca02Value(seguranca02Value, 'seguranca_02');
      updateSeguranca03Value(seguranca03Value, 'seguranca_03');
      updateSeguranca04Value(seguranca04Value, 'seguranca_04');
      updateSeguranca05Value(seguranca05Value, 'seguranca_05');
      updatePessoasValue(pessoas, 'pessoas');

      navigation.navigate('');
  };
  

  return (
    <ScrollView>


<View style={styles.navbar}>
            <View style={styles.imageContainer}>
              {imageUrl ? (
                <Image
                  style={styles.logoImage}
                  source={{
                    uri: imageUrl,
                  }}
                />
              ) : (
                <Text>Imagem não disponível</Text>
              )}
            </View>
          </View>

    <View style={styles.forma}></View>
    <View style={styles.forma2}></View>

    <View style={styles.um}>
      <Text style={styles.textNumber}>1</Text>
    </View>
    
    <View style={styles.dois}>
      <Text style={styles.textNumber}>2</Text>
    </View>
    
    <View style={styles.tres}>
      <Text style={styles.textNumber}>3</Text>
    </View>

    <View style={styles.quatro}>
      <Text style={styles.textNumber}>4</Text>
    </View>


          <View style={styles.global}>
    <View style={styles.ret}>
        <Text style={styles.retText}>Deixe aqui suas impressões sobre o Jardinete</Text>
    </View>
    <View style={styles.bem}>
        <Image source={require('../../assets/bem_estar.png')} style={{width: '100%', height: '100%'}} />
    </View>

    <View style={styles.card1}> 
    <View style={styles.textContainer}>
    <Text style={styles.formText}>1. A PAV melhora a qualidade da minha vida e das pessoas ao meu redor (vizinhos e familiares)</Text>
    </View>

    <View style={styles.row}>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex === 4 && styles.selectedButton]}
  onPress={() => {
      setSelectedButtonIndex(4);
      setBemEstar01Value(1);
  }}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex === 3 && styles.selectedButton]}
  onPress={() => {
      setSelectedButtonIndex(3);
      setBemEstar01Value(2);
  }}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity> 


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex === 2 && styles.selectedButton]}
  onPress={() => {
      setSelectedButtonIndex(2);
      setBemEstar01Value(3);
  }}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>
   

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex === 1 && styles.selectedButton]}
  onPress={() => {
      setSelectedButtonIndex(1);
      setBemEstar01Value(4);
  }}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>




 <TouchableOpacity 
  style={[styles.button, selectedButtonIndex === 0 && styles.selectedButton]}
  onPress={() => {
      setSelectedButtonIndex(0);
      setBemEstar01Value(5);
  }}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


</View>


    <View style={styles.textContainer}>
    <Text style={styles.formText}>2. Sinto que a PAV é um bom lugar para as crianças</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex1 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex1(4); setBemEstar02Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

   

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex1 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex1(3); setBemEstar02Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex1 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex1(2); setBemEstar02Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex1 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex1(1); setBemEstar02Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>



   <TouchableOpacity 
  style={[styles.button, selectedButtonIndex1 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex1(0); setBemEstar02Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>


    <View style={styles.textContainer}>
    <Text style={styles.formText}>3. Sinto que a PAV é um bom lugar para os idosos</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex2 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex2(4); setBemEstar03Value(1); }}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex2 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex2(3); setBemEstar03Value(2); }}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex2 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex2(2); setBemEstar03Value(3); }}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex2 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex2(1); setBemEstar03Value(4); }}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>
    


  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex2 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex2(0); setBemEstar03Value(5); }}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText}>4. Sinto que a PAV é um bom lugarpara adolescentes e/ ou jovens adultos.</Text>
    </View>
    <View style={styles.row}>


  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex3 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex3(4); setBemEstar04Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex3 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex3(3); setBemEstar04Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>



<TouchableOpacity 
  style={[styles.button, selectedButtonIndex3 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex3(2); setBemEstar04Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex3 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex3(1); setBemEstar04Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>     

 <TouchableOpacity 
  style={[styles.button, selectedButtonIndex3 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex3(0); setBemEstar04Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText}>5. Sinto que a PAV é bom lugar para pets. </Text>
    </View>
    <View style={styles.row}>

 
  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex4 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex4(4); setBemEstar05Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex4 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex4(3); setBemEstar05Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex4 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex4(2); setBemEstar05Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex4 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex4(1); setBemEstar05Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>  

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex4 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex4(0); setBemEstar05Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>
 
    </View>

    </View> 

    <View style={styles.infra}>
        <Image source={require('../../assets/Infraestrutura.png')} style={{width: '100%', height: '100%'}} />
    </View>

    <View style={styles.card2}> 
    <View style={styles.textContainer}>
    <Text style={styles.formText2}>1. Sinto que a prefeitura faz a manutenção corretamente do PAV;</Text>
    </View>
    <View style={styles.row}>
 
  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex5 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex5(4); setInfraestrutura01Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex5 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex5(3); setInfraestrutura01Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex5 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex5(2); setInfraestrutura01Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex5 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex5(1); setInfraestrutura01Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex5 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex5(0); setInfraestrutura01Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>2. Sinto que a quantidade de árvores é suficiente?</Text>
    </View>
    <View style={styles.row}>


  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex6 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex6(4); setInfraestrutura02Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex6 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex6(3); setInfraestrutura02Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex6 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex6(2); setInfraestrutura02Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

  
<TouchableOpacity 
  style={[styles.button, selectedButtonIndex6 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex6(1); setInfraestrutura02Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex6 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex6(0); setInfraestrutura02Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>3. Sinto que os bancos são suficientes e estão em bom estado;</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex7 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex7(4); setInfraestrutura03Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex7 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex7(3); setInfraestrutura03Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex7 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex7(2); setInfraestrutura03Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex7 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex7(1); setInfraestrutura03Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>    


  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex7 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex7(0); setInfraestrutura03Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>4. Sinto que a academia ao ar livre ou o parque infantil estão em bom estado;</Text>
    </View>
    <View style={styles.row}>
 
 

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex8 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex8(4); setInfraestrutura04Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>



<TouchableOpacity 
  style={[styles.button, selectedButtonIndex8 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex8(3); setInfraestrutura04Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex8 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex8(2); setInfraestrutura04Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex8 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex8(1); setInfraestrutura04Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>    


  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex8 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex8(0); setInfraestrutura04Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>5. Sinto que campos ou as quadras esportivas estão em bom estado.</Text>
    </View>
    <View style={styles.row}>


  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex9 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex9(4); setInfraestrutura05Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex9 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex9(3); setInfraestrutura05Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex9 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex9(2); setInfraestrutura05Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex9 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex9(1); setInfraestrutura05Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

   

   <TouchableOpacity 
  style={[styles.button, selectedButtonIndex9 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex9(0); setInfraestrutura05Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    </View> 


    <View style={styles.pertence}>
        <Image source={require('../../assets/Pertencimento.png')} style={{width: '100%', height: '100%'}} />
    </View>

    <View style={styles.card1}> 
    <View style={styles.textContainer}>
    <Text style={styles.formText}>1. Vou com frequência ao PAV. </Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex10 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex10(4); setPertencimento01Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex10 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex10(3); setPertencimento01Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex10 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex10(2); setPertencimento01Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity> 

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex10 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex10(1); setPertencimento01Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


 <TouchableOpacity 
  style={[styles.button, selectedButtonIndex10 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex10(0); setPertencimento01Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>



    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText}>2. Eu sinto que os moradores próximos à PAV ajudam a manter o local limpo;</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex11 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex11(4); setPertencimento02Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex11 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex11(3); setPertencimento02Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex11 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex11(2); setPertencimento02Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex11 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex11(1); setPertencimento02Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>
    

 <TouchableOpacity 
  style={[styles.button, selectedButtonIndex11 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex11(0); setPertencimento02Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText}>3. Se vejo lixo jogado no chão da PAV, eu recolho;</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex12 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex12(4); setPertencimento03Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

 
<TouchableOpacity 
  style={[styles.button, selectedButtonIndex12 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex12(3); setPertencimento03Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex12 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex12(2); setPertencimento03Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex12 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex12(1); setPertencimento03Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

     

 <TouchableOpacity 
  style={[styles.button, selectedButtonIndex12 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex12(0); setPertencimento03Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText}>4. Eu gostaria que o PAV perto da minha casa fosse mais frequentado;</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex13 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex13(4); setPertencimento04Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex13 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex13(3); setPertencimento04Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex13 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex13(2); setPertencimento04Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex13 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex13(1); setPertencimento04Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>  

   <TouchableOpacity 
  style={[styles.button, selectedButtonIndex13 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex13(0); setPertencimento04Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText}>5. Quando tem muitas pessoas no PAV, eu fico animado/a para ir ; </Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex14 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex14(4); setPertencimento05Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex14 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex14(3); setPertencimento05Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex14 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex14(2); setPertencimento05Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex14 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex14(1); setPertencimento05Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


    <TouchableOpacity 
  style={[styles.button, selectedButtonIndex14 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex14(0); setPertencimento05Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


    </View>

    </View> 



    <View style={styles.seguranca}>
        <Image source={require('../../assets/seguranca.png')} style={{width: '100%', height: '100%'}} />
    </View>


    <View style={styles.card3}> 
    <View style={styles.textContainer}>
    <Text style={styles.formText2}>1. Me sinto segura(o) enquanto frequento ou passo pela PAV;</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex15 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex15(4); setSeguranca01Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>



<TouchableOpacity 
  style={[styles.button, selectedButtonIndex15 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex15(3); setSeguranca01Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex15 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex15(2); setSeguranca01Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex15 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex15(1); setSeguranca01Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

     <TouchableOpacity 
  style={[styles.button, selectedButtonIndex15 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex15(0); setSeguranca01Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>2. Acredito que a PAV tem iluminação suficiente;</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex16 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex16(4); setSeguranca02Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex16 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex16(3); setSeguranca02Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex16 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex16(2); setSeguranca02Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex16 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex16(1); setSeguranca02Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity> 

   <TouchableOpacity 
  style={[styles.button, selectedButtonIndex16 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex16(0); setSeguranca02Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>



    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>3. O PAV que eu frequento possui animais abandonados.</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex17 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex17(4); setSeguranca03Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex17 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex17(3); setSeguranca03Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex17 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex17(2); setSeguranca03Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex17 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex17(1); setSeguranca03Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>    

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex17 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex17(0); setSeguranca03Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>4. Sei que acontecem atividades ilegais no PAV;</Text>
    </View>
    <View style={styles.row}>
  

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex18 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex18(4); setSeguranca04Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex18 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex18(3); setSeguranca04Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex18 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex18(2); setSeguranca04Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex18 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex18(1); setSeguranca04Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>
   

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex18 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex18(0); setSeguranca04Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>

    <View style={styles.textContainer}>
    <Text style={styles.formText2}>5. É um local seguro contra acidentes;</Text>
    </View>
    <View style={styles.row}>

  <TouchableOpacity 
  style={[styles.button, selectedButtonIndex19 === 4 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex19(4); setSeguranca05Value(1);}}>
  <Image
    source={require('../../assets/red.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>



<TouchableOpacity 
  style={[styles.button, selectedButtonIndex19 === 3 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex19(3); setSeguranca05Value(2);}}>
  <Image
    source={require('../../assets/orange.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>


<TouchableOpacity 
  style={[styles.button, selectedButtonIndex19 === 2 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex19(2); setSeguranca05Value(3);}}>
  <Image
    source={require('../../assets/yellow.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

<TouchableOpacity 
  style={[styles.button, selectedButtonIndex19 === 1 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex19(1); setSeguranca05Value(4);}}>
  <Image
    source={require('../../assets/green.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>
     

 <TouchableOpacity 
  style={[styles.button, selectedButtonIndex19 === 0 && styles.selectedButton]}
  onPress={() => {setSelectedButtonIndex19(0); setSeguranca05Value(5);}}>
  <Image
    source={require('../../assets/blue.png')}
    style={{ width: width * 0.0411458333333333, height: width * 0.0411458333333333 }}
  />
</TouchableOpacity>

    </View>
   
    </View> 
    
</View>

<View style={styles.continuar}>
<TouchableOpacity onPress={() => handleContinuarPress()}>
            <LinearGradient
                colors={['#4C6523', '#99CB47']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    borderRadius: width * 0.0260416666666667, 
                    paddingHorizontal: width * 0.0260416666666667,
                    paddingVertical: width * 0.0104166666666667,
                }}>
                <Text style={{ color: '#271C00', fontSize: width * 0.021875, fontWeight: 'bold' }}>Continuar</Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>



<View style={styles.imageContainer3}>
          <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias} />
      </View>


<View style={styles.navbar2}>
      <View style={styles.imageContainer2}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage} />
      </View>

  

</View>



    </ScrollView>
  );
};
