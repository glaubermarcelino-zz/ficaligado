import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StatusBar} from 'react-native';

import {Container} from '../../GlobalStyle/styleGlobal';
import HeaderUser from '../HeaderUser/Index';

const SideMenu = () => {
  //Oculta a barra de status
  StatusBar.setHidden(true);
  return (
    <Container>
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
          <Image
            source={require('../../assets/images/bg.png')}
            style={{position: 'absolute'}}
          />
          <View
            style={{
              justifyContent: 'flex-start',
              alignContent: 'flex-start',
              flexDirection: 'column',
              width: '100%',
              // borderWidth: 2,
              // borderColor: 'red',
              paddingLeft: 30,
            }}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignContent: 'flex-start',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 30,
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Home</Text>
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
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Perfil</Text>
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
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Ocorrência</Text>
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
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Configurações</Text>
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
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Ajuda</Text>
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
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>
                  Politica e Privacidade
                </Text>
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
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>
                  Termos e Condições
                </Text>
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
                }}>
                <Text style={{fontSize: 16, color: '#fff'}}>Sair</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </Container>
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

SideMenu.navigationOptions = {
  title: 'Menu',
};
export default SideMenu;
