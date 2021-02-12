import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
interface HeaderProps {
  titulo: string;
  ImgSource: string;
}

const HeaderUser: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo34x37.png')}
        />

        <Image
          style={styles.logoUser}
          source={require('../../assets/images/user-rounded.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: '#50E3C2', fontSize: 16, padding: 5}}>
            {props.titulo}
          </Text>
          <Text style={{color: '#fff', fontSize: 13}}>250 pontos</Text>
        </View>
        <Image
          style={{marginLeft: 10}}
          source={require('../../assets/images/separador.png')}
        />
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#50E3C2',
              marginLeft: 30,
              borderRadius: 10,
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: 118,
              height: 42,
            }}
            onPress={() => {}}
            activeOpacity={0.6}>
            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                flexDirection: 'column',
                width: '100%',
              }}></View>
            <Image
              source={require('../../assets/icons/chamar-emergencia.png')}
            />
            <Text style={{fontSize: 10, color: '#55418e'}}>
              Chamar Emergência
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: '#4B397E', height: 9}}>
        <Image
          style={{
            width: 18,
            height: 12,
            justifyContent: 'flex-start',
            marginTop: -15,
          }}
          source={require('../../assets/icons/menu-hamburguer.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  header: {
    backgroundColor: '#4B397E',
    height: 120,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    justifyContent: 'flex-end',
    width: 34,
    height: 37,
    marginTop: -50,
  },
  logoUser: {
    justifyContent: 'flex-end',
    width: 60.72,
    height: 60.69,
  },
});
export default HeaderUser;
