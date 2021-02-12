import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
interface HeaderProps {
  titulo: string;
}


const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: '#50E3C2', fontSize: 16,padding:5}}>
          {props.titulo}
        </Text>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo95x110.png')}
        />
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
    width: 95,
    height: 110,
  },
});
export default Header;
