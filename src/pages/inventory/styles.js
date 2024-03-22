import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        width: width * 0.7,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});
