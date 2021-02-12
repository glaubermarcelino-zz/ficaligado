import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {Container} from '../../GlobalStyle/styleGlobal';

export default class BemVindo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   setTimeout(() => {
  //     this.props.navigation.navigate('Login');
  //   }, 8000);
  // }

  render() {
    //Oculta a barra de status
    StatusBar.setHidden(true);
    return (
      <Container>
        <Image
          source={require('../../assets/images/bg.png')}
          style={{position: 'absolute'}}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Image
            style={{
              width: 241,
              height: 298,
              alignSelf: 'center',
              marginLeft: 10,
              marginBottom: 10,
            }}
            source={require('../../assets/images/logo241x298.png')}
          />
          <Text style={{color: '#fff', fontSize: 20, marginBottom: 120}}>
            Bem Vindo ao Fica Ligado!
          </Text>
          <RectButton style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Acessar</Text>
          </RectButton>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    height: 60,
    flexDirection: 'row',
    borderRadius: 50,
    overflow: 'hidden',
    marginTop: 20,
    borderColor:'#6D47BE',
    borderWidth:10
    
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight:'bold',
    alignContent:'center',
    textAlign:"center"
  },
});
