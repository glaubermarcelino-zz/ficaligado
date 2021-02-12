import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface CardMenuProps {
  NavigateToPage: string;
  ImgCard: string;
  Title: string;
}
const CardMenu: React.FC<CardMenuProps> = (props: CardMenuProps) => {
  
  const NavigateTo = (page: string) => {
    Alert.alert('Navegação', 'Você quer navegar para ' + page);
  };

  return (
    <>
    {console.log(props)}
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={[styles.item]}
          onPress={() => NavigateTo(props.NavigateToPage || '/')}
          activeOpacity={0.6}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Image source={{uri: props.ImgCard}} />
          </View>
          <Text style={styles.itemTitle}>{props.Title || 'Não Informado'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6D47BE',
    height: 130,
    width: 158,
    borderRadius: 35,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#6D47BE',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#55418E',
  },
});
export default CardMenu;
