import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/Header/Index';
import HeaderUser from '../../components/HeaderUser/Index';
import CardMenu from '../../components/CardMenu/Index';
import CarouselCards from '../../components/Carrousel/Index';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  const navigation = useNavigation();

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate(page:string) {
    navigation.navigate(page);
  }
  interface CardMenuItem {
    Title: string;
    NavigateToPage: string;
    ImgCard: string;
  }

  const CardMenuItem: CardMenuItem[] = [
    {
      Title: 'Passos',
      NavigateToPage: 'Passos',
      ImgCard: '../../assets/images/user-rounded.png',
    },
    {
      Title: 'Ocorrências',
      NavigateToPage: 'Ocorrencias',
      ImgCard: '../../assets/images/user-rounded.png',
    },
    {
      Title: 'Descontos',
      NavigateToPage: 'Descontos',
      ImgCard: '../../assets/images/user-rounded.png',
    },
    {
      Title: 'Campanhas',
      NavigateToPage: 'Campanhas',
      ImgCard: '../../assets/images/user-rounded.png',
    },
    {
      Title: 'Km Rodados',
      NavigateToPage: 'KmRodados',
      ImgCard: '../../assets/images/user-rounded.png',
    },
    {
      Title: 'Mapa',
      NavigateToPage: 'Mapa',
      ImgCard: '../../assets/images/user-rounded.png',
    },
  ];
  return (
    <>
      <View>
        <GeneralStatusBarColor
          backgroundColor="#4B397E"
          barStyle="light-content"
        />
        <HeaderUser
          titulo={'Danilo Nunes'}
          ImgSource={'../../assets/images/user-rounded.png'}
        />
        <CarouselCards />
      </View>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
            }}>
          </View>
          <View style={styles.servicos}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate('Home')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      fontSize: 32,
                      color: '#50E3C2',
                      textAlign: 'center',
                    }}>
                    6325
                  </Text>
                </View>
                <Text style={styles.itemTitle}>Passos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate('Home')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      fontSize: 32,
                      color: '#50E3C2',
                      textAlign: 'center',
                    }}>
                    485
                  </Text>
                </View>
                <Text style={styles.itemTitle}>KM Rodados</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate('Publicacoes')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/ocorrencias.png')} />
                </View>
                <Text style={styles.itemTitle}>Ocorrências</Text>
              </TouchableOpacity>
              {/* </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}> */}
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('Educacao')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'space-around',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/campanhas.png')} />
                </View>
                <Text style={styles.itemTitle}>Campanhas</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate('Descontos')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/descontos.png')} />
                </View>
                <Text style={styles.itemTitle}>Descontos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate('Mapa')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/mapa.png')} />
                </View>
                <Text style={styles.itemTitle}>Mapa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  servicos: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
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
  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#55418E',
  },
});

export default Home;
