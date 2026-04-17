import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Rodape() {
    const navigation = useNavigation();
    const myStyles = styles();

    // calcular dinamicamente a altura de reserva usada no spacer
    return (
        <>
            <View style={myStyles.spacer} />

            <View style={myStyles.araucarias} pointerEvents="none">
                <Image source={require('../../assets/araucarias.png')} style={myStyles.imgAraucarias} />
            </View>

            <View style={myStyles.rodape}>
                <View style={myStyles.linha}>
                    <View style={myStyles.coluna}>
                        <View>
                            <Image
                                source={require("../../assets/UtfprBottom.png")}
                                style={myStyles.logoUTFPR}
                            />
                        </View>
                    </View>
                    <View style={myStyles.coluna}>
                        <TouchableOpacity
                            style={myStyles.navBt}
                            onPress={() => navigation.navigate("Contato")}
                        >
                            <Text style={myStyles.textNav}>Fale conosco</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.coluna}>
                        <TouchableOpacity style={myStyles.navBt}>
                            <Text style={myStyles.textNav}>Termos de uso</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={myStyles.navBt}
                            onPress={() =>
                                openLink("https://www.utfpr.edu.br/acesso-a-informacao/lgpd")
                            }
                        >
                            <Text style={myStyles.textNav}>LGPD</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={myStyles.coluna}>
                        <TouchableOpacity
                            onPress={() =>
                                openLink("https://www.instagram.com/amigosdosjardinetes.ct/")
                            }
                        >
                            <Image
                                source={require("../../assets/instagramNav.png")}
                                style={myStyles.instaNav}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </>
    );
}
