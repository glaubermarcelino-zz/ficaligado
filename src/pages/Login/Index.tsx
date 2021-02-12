import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Container} from './style';
import { useNavigation } from '@react-navigation/native';

const Login = (props: any) => {
  const navigation = useNavigation();
  function handleNavigateToNewAccount() {
     navigation.navigate('Cadastro');
  }
function handleNavigateToLogin(){
  
  navigation.navigate('Home');
}

  StatusBar.setHidden(true);
  return (
    <Container>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/bg.png')}
          style={{position: 'absolute'}}
        />
        <View>
          <View>
            <View style={styles.criarConta}>
              <TouchableOpacity onPress={() => handleNavigateToLogin()}>
                <Text
                  style={{fontSize: 20, color: '#50E3C2', textAlign: 'right'}}>
                  Entrar
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo206x257.png')}
            />
          </View>
          <RectButton
            style={styles.button}
            // onPress={props.handleSubmit}>
            onPress={() => handleNavigateToCadastro()}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.buttonText}>
                <Image source={require('../../assets/icons/google.png')}/>
                Continuar com Google
              </Text>
            </View>
          </RectButton>
          <TouchableOpacity
            style={styles.buttonTransparent}
            // onPress={props.handleSubmit}>
            onPress={() => handleNavigateToNewAccount()}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
  },

  criarConta: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    width: 206,
    height: 257,
    alignSelf: 'flex-start',
    marginBottom: 250,
  },
  button: {
    backgroundColor: '#6D47BE',
    height: 60,
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonTransparent: {
    borderColor:'#6D47BE',
    height: 60,
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'space-between',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Login;
