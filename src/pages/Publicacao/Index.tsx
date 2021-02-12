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
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Index';
import HeaderUser from '../../components/HeaderUser/Index';
import CardMenu from '../../components/CardMenu/Index';
import CarouselCards from '../../components/Carrousel/Index';
import {RectButton} from 'react-native-gesture-handler';
// import { NavigationActions } from 'react-navigation';

const Publicacoes = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  // const navigation = useNavigation();

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Sistema Offline', 'Sistema indisponível no momento');
  }
  interface CardMenuItem {
    Title: string;
    NavigateToPage: string;
    ImgCard: string;
  }

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
            }}></View>
          <View style={styles.servicos}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignContent: 'center',
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '70%',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#A8192C',
                        textAlign: 'left',
                      }}>
                      Falta de Sinalização
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#6e6f70',
                        textAlign: 'left',
                      }}>
                      Rua Fulano de tal,nº 1234
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 12}}>DATA</Text>
                    <Text style={{fontSize: 12, color: '#6E6F70'}}>
                      20/09/2020
                    </Text>
                    <RectButton onPress={() => {}}>
                      <Text style={{fontSize: 14, color: '#25988B'}}>
                        <Image
                          source={require('../../assets/icons/acompanhar.png')}
                        />
                        Acompanhe
                      </Text>
                    </RectButton>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '70%',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#A8192C',
                        textAlign: 'left',
                      }}>
                      Falta de Sinalização
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#6e6f70',
                        textAlign: 'left',
                      }}>
                      Rua Fulano de tal,nº 1234
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 12}}>DATA</Text>
                    <Text style={{fontSize: 12, color: '#6E6F70'}}>
                      20/09/2020
                    </Text>
                    <RectButton onPress={() => {}}>
                      <Text style={{fontSize: 14, color: '#25988B'}}>
                        <Image
                          source={require('../../assets/icons/acompanhar.png')}
                        />
                        Acompanhe
                      </Text>
                    </RectButton>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '70%',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#A8192C',
                        textAlign: 'left',
                      }}>
                      Falta de Sinalização
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#6e6f70',
                        textAlign: 'left',
                      }}>
                      Rua Fulano de tal,nº 1234
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 12}}>DATA</Text>
                    <Text style={{fontSize: 12, color: '#6E6F70'}}>
                      20/09/2020
                    </Text>
                    <RectButton onPress={() => {}}>
                      <Text style={{fontSize: 14, color: '#25988B'}}>
                        <Image
                          source={require('../../assets/icons/acompanhar.png')}
                        />
                        Acompanhe
                      </Text>
                    </RectButton>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '70%',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#A8192C',
                        textAlign: 'left',
                      }}>
                      Falta de Sinalização
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#6e6f70',
                        textAlign: 'left',
                      }}>
                      Rua Fulano de tal,nº 1234
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 12}}>DATA</Text>
                    <Text style={{fontSize: 12, color: '#6E6F70'}}>
                      20/09/2020
                    </Text>
                    <RectButton onPress={() => {}}>
                      <Text style={{fontSize: 14, color: '#25988B'}}>
                        <Image
                          source={require('../../assets/icons/acompanhar.png')}
                        />
                        Acompanhe
                      </Text>
                    </RectButton>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '70%',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#A8192C',
                        textAlign: 'left',
                      }}>
                      Falta de Sinalização
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#6e6f70',
                        textAlign: 'left',
                      }}>
                      Rua Fulano de tal,nº 1234
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 12}}>DATA</Text>
                    <Text style={{fontSize: 12, color: '#6E6F70'}}>
                      20/09/2020
                    </Text>
                    <RectButton onPress={() => {}}>
                      <Text style={{fontSize: 14, color: '#25988B'}}>
                        <Image
                          source={require('../../assets/icons/acompanhar.png')}
                        />
                        Acompanhe
                      </Text>
                    </RectButton>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'row',
                    width: '70%',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column',
                      width: '100%',
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#A8192C',
                        textAlign: 'left',
                      }}>
                      Falta de Sinalização
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#6e6f70',
                        textAlign: 'left',
                      }}>
                      Rua Fulano de tal,nº 1234
                    </Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 12}}>DATA</Text>
                    <Text style={{fontSize: 12, color: '#6E6F70'}}>
                      20/09/2020
                    </Text>
                    <RectButton onPress={() => {}}>
                      <Text style={{fontSize: 14, color: '#25988B'}}>
                        <Image
                          source={require('../../assets/icons/acompanhar.png')}
                        />
                        Acompanhe
                      </Text>
                    </RectButton>
                  </View>
                </View>
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
    height: 81,
    width: 379,
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

export default Publicacoes;
