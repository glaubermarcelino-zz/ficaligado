import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StatusBar} from 'react-native';

import {Container} from '../../GlobalStyle/styleGlobal';
import HeaderUser from '../../components/HeaderUser/Index';

const Descontos = () => {
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
        <View
          style={{
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            flexDirection: 'column',
            width: '100%',
            paddingTop: 30,
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 30,
                borderBottomColor: '#AFB3B6',
                borderBottomWidth: 1,
              }}>
              <Image source={require('../../assets/icons/uber.png')} />
              <View>
                <Text style={{fontSize: 16, color: '#000'}}>
                  UBER - Crédito para viagens
                </Text>
                <Text
                  style={{fontSize: 12, color: '#AFB3B6', paddingBottom: 20}}>
                  a partir de 500 pontos
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 30,
                borderBottomColor: '#AFB3B6',
                borderBottomWidth: 1,
              }}>
              <Image
                source={require('../../assets/icons/extra-supermercado.png')}
              />
              <View>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Desconto Extra
                </Text>
                <Text
                  style={{fontSize: 12, color: '#AFB3B6', paddingBottom: 20}}>
                  a partir de 50 pontos
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 30,
                borderBottomColor: '#AFB3B6',
                borderBottomWidth: 1,
              }}>
              <Image source={require('../../assets/icons/raia-farmacia.png')} />
              <View>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Desconto Droga Raia
                </Text>
                <Text
                  style={{fontSize: 12, color: '#AFB3B6', paddingBottom: 20}}>
                  a partir de 100 pontos
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 30,
                borderBottomColor: '#AFB3B6',
                borderBottomWidth: 1,
              }}>
              <Image source={require('../../assets/icons/carrefour.png')} />
              <View>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Desconto Carrefour
                </Text>
                <Text
                  style={{fontSize: 12, color: '#AFB3B6', paddingBottom: 20}}>
                  a partir de 100 pontos
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 30,
                borderBottomColor: '#AFB3B6',
                borderBottomWidth: 1,
              }}>
              <Image
                source={require('../../assets/icons/recarga-celular.png')}
              />
              <View>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Recarregue seu Celular
                </Text>
                <Text
                  style={{fontSize: 12, color: '#AFB3B6', paddingBottom: 20}}>
                  a partir de 15 pontos
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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

export default Descontos;
