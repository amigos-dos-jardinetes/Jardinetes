import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, Modal, CheckBox } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../SignUp/styles';
import { checkUserLoggedInSignUp, handleRegister, pickImageAsync, uploadImageToFirebase } from '../../../functions';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
    authDomain: "amigosdosjardinetes.firebaseapp.com",
    projectId: "amigosdosjardinetes",
    storageBucket: "amigosdosjardinetes.appspot.com",
    messagingSenderId: "381072997535",
    appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const firebase_initialize = initializeApp(firebaseConfig);
const auth = getAuth(firebase_initialize);
const firestore = getFirestore();
const storage = getStorage(firebase_initialize);

export default function SignUp() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [checkBoxClicked, setCheckBoxClicked] = useState(false); // Novo estado para controlar se a CheckBox foi clicada

    useEffect(() => {
        const checkLoggedInUser = async () => {
            const user = await checkUserLoggedInSignUp(auth);
            if (user) {
                console.log('Usuário logado:', user);
                setIsLoggedIn(true);
                navigation.replace('Menu');
            } else {
                console.log('Nenhum usuário logado');
                setIsLoggedIn(false);
            }
        };

        checkLoggedInUser();
    }, []);

    const handleRegisterPress = async () => {
        if (!agreedToTerms) {
            Alert.alert("Erro", "Você deve concordar com os termos de serviço para continuar.");
            return;
        }
        await handleRegister(auth, firestore, storage, email, password, username, selectedImage, navigation);
    };

    const handlePickImageAsync = async () => {
        const uri = await pickImageAsync();
        if (uri) {
            setSelectedImage(uri);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Ajuste o valor conforme necessário
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Registre-se</Text>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <TouchableOpacity style={styles.image} onPress={handlePickImageAsync}>
                            {selectedImage ? (
                                <Image
                                    source={{ uri: selectedImage }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            ) : (
                                <Image
                                    style={styles.image}
                                    source={require('../../assets/camera.png')}
                                />
                            )}
                        </TouchableOpacity>

                        <Text style={styles.title}>Usuário</Text>
                        <TextInput
                            placeholder="Digite um nome de usuário"
                            style={styles.input}
                            value={username}
                            onChangeText={text => setUsername(text)}
                        />

                        <Text style={styles.title}>Email</Text>
                        <TextInput
                            placeholder="Digite um email"
                            style={styles.input}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />

                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder="Sua senha"
                            style={styles.input}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
  
    <TouchableOpacity onPress={() => setAgreedToTerms(!agreedToTerms)}>
        <CheckBox value={agreedToTerms} onValueChange={setAgreedToTerms} />
    </TouchableOpacity>
    
  
   
        <Text style={{ marginLeft: 5 }}>Concordo com os</Text>

    
   
    <TouchableOpacity onPress={() => setShowTermsModal(true)}>
        <Text style={{ textDecorationLine: 'underline', marginLeft: 5 }}>termos de serviço</Text>
    </TouchableOpacity>
</View>

                        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('SignIn')}>
                            <Text>Voltar ao login</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </ScrollView>

            {/* Terms Modal */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={showTermsModal}
                onRequestClose={() => setShowTermsModal(false)}
            >
                <View style={styles.termsModalContainer}>
                    <View style={styles.termsModalContent}>
                        <ScrollView>
                            <Text style={styles.termsModalText}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Política de Privacidade{'\n'}</Text>
                            A presente Política de Privacidade foi elaborada em conformidade com a lei federal nº 12.965, de 23 de abril de 2014 (Marco Civil da Internet) e lei nº 13.709, de 14 de agosto 2018 (Lei Geral de Proteção de Dados Pessoais).
A Universidade Tecnológica Federal do Paraná criou esta aplicação como um sistema gratuito. Este aplicativo é fornecido pela Universidade Tecnológica Federal do Paraná, sem nenhum custo, e destina-se ao uso como está. Esta página é usada para informar os visitantes sobre nossas políticas de coleta, uso e divulgação de informações pessoais, se alguém decidir usar nosso serviço. 
Se você optar por usar nossa aplicação, concorda em coletar e usar informações em relação a esta política. As informações pessoais que coletamos são usadas para fornecer e melhorar o serviço. Não usaremos ou compartilharemos suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.
Os termos usados nesta Política de Privacidade têm os mesmos significados que em nossos Termos e Condições, que são acessíveis, a menos que definido de outra forma nesta Política de Privacidade.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Coleta e uso de informações{'\n'}</Text>
Para uma experiência melhor, ao usar nosso aplicativo, podemos solicitar que você nos forneça certas informações de identificação pessoal, incluindo, entre outras: nome, redes sociais.
As informações que solicitamos serão retidas por nós e usadas conforme descrito nesta política de privacidade.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Das permissões de acesso ao dispositivo{'\n'}</Text>
Esta aplicação pode solicitar certas permissões de acesso aos dados do dispositivo do usuário. Por padrão essas permissões devem ser concedidas pelo usuário antes que as respectivas informações possam ser acessadas. Uma vez que for dada essa permissão, esta pode ser revogada a qualquer momento pelo usuário, alterando as configurações no próprio dispositivo. A revogação das permissões de acesso poderá afetar o funcionamento apropriado da aplicação.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Permissão de localização aproximada do jardinete{'\n'}</Text>
Essa permissão será utilizada para acessar a localização aproximada do dispositivo do usuário. Este aplicativo poderá coletar e utilizar a localização aproximada, a modo de que usuários podem ter um mapa para localizar o jardinete.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Provedores de serviço{'\n'}</Text>
Podemos empregar empresas devido aos seguintes motivos:
Facilitar nosso serviço;
Fornecer o serviço em nosso nome;
Executar serviços relacionados à aplicação; ou
Para nos ajudar a analisar como nossa aplicação é usada.
Desejamos  informar aos usuários desta aplicação que esses terceiros têm acesso às suas informações pessoais. O motivo é executar as tarefas atribuídas a eles em nosso nome. No entanto, eles são obrigados a não divulgar ou usar as informações para qualquer outra finalidade.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Segurança{'\n'}</Text>
Valorizamos sua confiança em nos fornecer suas informações pessoais; portanto, estamos nos esforçando para usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se de que nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro e confiável, portanto não podemos garantir sua segurança absoluta.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Links para outros sites{'\n'}</Text>
Este serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por nós. Portanto, recomendamos que você reveja a Política de Privacidade desses sites. Não temos controle e não assumimos nenhuma responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites ou serviços de terceiros.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Privacidade das crianças{'\n'}</Text>
Esta aplicação não trata de menores de 13 anos. Não coletamos intencionalmente informações de identificação pessoal de crianças menores de 13 anos. No caso de descobrirmos que uma criança menor de 13 anos nos forneceu informações pessoais, a excluiremos imediatamente de nossos servidores. Se você é pai, mãe ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos realizar as ações necessárias. {'\n'}
Alterações a esta Política de Privacidade{'\n'}
Podemos atualizar nossa Política de Privacidade periodicamente. Portanto, é recomendável revisar esta página periodicamente para verificar se há alterações. Iremos notificá-lo de quaisquer alterações publicando a nova Política de Privacidade nesta página.{'\n'}
Esta política é eficaz a partir de 24/03/2024.{'\n'}
<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Contate-nos{'\n'}</Text>
Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contactar em <Text style={{ fontWeight: 'bold', fontSize: 16 }}>jardinetes-ct@utfpr.edu.br</Text>.

                            </Text>
                        </ScrollView>
                        
                        
                            <TouchableOpacity onPress={() => { setShowTermsModal(false); setAgreedToTerms(true); }}>
                                <Text style={styles.agreeButton}>Concordo com os termos</Text>
                            </TouchableOpacity>
                   
                        
                        <TouchableOpacity onPress={() => { setShowTermsModal(false); setAgreedToTerms(false); }}>
                            <Text style={styles.disagreeButton}>Não concordo com os termos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};
