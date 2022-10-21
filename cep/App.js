//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import cep from './assets/cep_fundo.png';

export default function App() {
  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <Image source={cep} defaultSource={cep} style={styles.cepinicial}></Image>
        <Text style={styles.appName}> CEP DOS CORREIOS </Text>
        <Text>O App de CEP dos Correios</Text>
        <Text>Aqui aonde você encontra tudo </Text>
        <button onclick="app2.js" imported = 'app2.js'>RESTEAMENTO CEP
        {
          window.location.replace("app2.js")
        }
        </button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#c0c0f0',
  },
  cepinicial: {
    width: 300,
    height: 300
  },
  mainView: {
    flex:1,
    backgroundColor: '#000000'
  }
});
