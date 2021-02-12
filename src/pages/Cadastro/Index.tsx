import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Container, Title} from './style';
import { useNavigation } from '@react-navigation/native';

import {withFormik} from 'formik';
import Header from '../../components/Header/Index';
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';

const Cadastro = (props: any) => {
  const [state, setState] = useState({value: ''});
  // function handleNavigateToPoint() {}
  const handleTextChange = (newText: any) => setState({value: newText});

  const navigation = useNavigation();
  function handleNavigateToLogin() {
    // navigation.navigate('Login');
  }
  function handleNavigateToAtivacao() {
     navigation.navigate('Home');
  }

  return (
    <Container>
      <View>
        <GeneralStatusBarColor
          backgroundColor="#4B397E"
          barStyle="light-content"
        />
        <Header titulo={''} />
      </View>
      <View style={styles.container}>
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.label}>Qual o seu Telefone</Text>
              <TextInput
                style={styles.input}
                value={props.values.telefone}
                onChangeText={(text) => props.setFieldValue('telefone', text)}
              />
            </View>
            <Text style={styles.label}>Data de Nascimento</Text>
            <TextInput
              style={styles.input}
              value={props.values.datanascimento}
              onChangeText={(text) =>
                props.setFieldValue('datanascimento', text)
              }
            />
            <Text style={styles.label}>Qual seu Endereço</Text>
            <TextInput
              style={styles.input}
              value={props.values.endereco}
              onChangeText={(text) => props.setFieldValue('endereco', text)}
            />
            <Text style={styles.label}>Qual Estado?</Text>
            <TextInput
              style={styles.input}
              value={props.values.estado}
              onChangeText={(text) => props.setFieldValue('estado', text)}
            />
            <Text style={styles.label}>CEP</Text>
            <TextInput
              style={styles.input}
              value={props.values.cep}
              onChangeText={(text) => props.setFieldValue('cep', text)}
            />
            <RectButton
              style={styles.button}
              onPress={() => handleNavigateToAtivacao()}

              // onPress={props.handleSubmit}
            >
              <Text style={styles.buttonText}>></Text>
            </RectButton>
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    lineHeight: 0,
  },
  titulo: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#55418e',
    borderBottomWidth: 2,
    borderColor: '#55418e',
    padding: 0,
    marginTop: 10,
  },
  label: {
    fontSize: 32,
    color: '#55418E',
    fontWeight: 'bold',
    padding: 0,
    textAlign: 'center',
    marginTop: 30,
  },
  criarConta: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginLeft: 5,
  },
  logo: {
    width: 165,
    height: 73,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  avisoSenha: {fontSize: 16, color: '#FFEEE5', marginBottom: 10},
  submit: {},
  button: {
    backgroundColor: '#fff',
    borderColor:'#55418E',
    borderWidth:5,
    height: 60,
    flexDirection: 'row',
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'flex-end',
    marginTop: 20,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    color: '#000',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    borderColor:'#55418E'
  },
});

export default withFormik({
  mapPropsToValues: () => ({
    telefone: '',
    nascimento: '',
    endereco: '',
    estado: '',
    cep: '',
  }),

  handleSubmit: (values) => {
    console.log(values);
  },
})(Cadastro);
