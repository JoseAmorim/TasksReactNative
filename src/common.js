import { Alert, Platform } from 'react-native';

const server = Platform.OS === 'ios' ? 'http://localhost:3333' : 'http://192.168.0.22:3333';

function showError(err) {
    Alert.alert('Ops! Ocorreu um erro.', `Mensagem: ${err}`);
}

export { server, showError };