import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StatusBar} from 'react-native';

import {Container} from '../../GlobalStyle/styleGlobal';
import HeaderUser from '../../components/HeaderUser/Index';
import CarouselCards from '../../components/Carrousel/Index';

const Educacao = () => {
  //Oculta a barra de status
  StatusBar.setHidden(true);
  return (
    <>
      <HeaderUser
        titulo={'Danilo Nunes'}
        ImgSource={'../../assets/images/user-rounded.png'}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection:'row',alignContent:'space-around',marginTop:20}}>
            <Image style={{width:194,height:119}} source={require('../../assets/images/item-carrousel1.png')}/>
            <Image style={{width:194,height:119}} source={require('../../assets/images/item-carrousel2.png')}/>
        </View>
        <View style={{flexDirection:'row',alignContent:'space-around',marginTop:20}}>
            <Image style={{width:400,height:222}} source={require('../../assets/images/banner-principal.png')}/>
        </View>
        <View style={{flexDirection:'row',alignContent:'space-around',marginTop:20}}>
            <Image style={{width:194,height:119}} source={require('../../assets/images/item-carrousel3.png')}/>
            <Image style={{width:194,height:119}} source={require('../../assets/images/item-carrousel4.png')}/>
        </View>
        <View style={{flexDirection:'row',alignContent:'space-around',marginTop:20}}>
            <Image style={{width:400,height:222}} source={require('../../assets/images/item-carrousel5.png')}/>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Educacao;
