import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
interface HeaderProps {
  titulo: string;
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
        <Text style={{color: '#50E3C2', fontSize: 16, padding: 5}}>
          {props.titulo}
        </Text>
      </View>
      <View style={{backgroundColor: '#4B397E', height: 9}} />
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
    marginTop:-50
  },
  logoUser: {
    justifyContent: 'flex-end',
    width: 60.72,
    height: 60.69,
  },
});
export default HeaderUser;
