import React from 'react';
import { View, Image, Text } from 'react-native';
import { StatusBar } from 'react-native';

import { Container } from '../../GlobalStyle/styleGlobal';

export default class Splash extends React.Component {
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
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Image
            style={{
              width: 354,
              height: 439,
              alignSelf: 'center',
              marginLeft: 10,
              marginBottom:10
            }}
            source={require('../../assets/images/logo354x439.png')}
          />
        </View>
      </Container>
    );
  }
}
