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
  TextInput,
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
import {withFormik} from 'formik';

const NovaPublicacao = (props) => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  // const navigation = useNavigation();

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Sistema Offline', 'Sistema indisponível no momento');
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
          <View style={{margin: 20}}>
            <View>
              <View>
                <View>
                  <Text>Categoria</Text>
                  <TextInput
                    style={{
                      width: 379,
                      height: 57,
                      borderColor: '#6D47BE',
                      borderWidth: 2,
                      borderRadius: 15,
                    }}
                    value={props.values.categoria}
                    onChangeText={(text) =>
                      props.setFieldValue('categoria', text)
                    }
                  />
                </View>
                <Text>Local:</Text>
                <TextInput
                  style={{
                    width: 379,
                    height: 57,
                    borderColor: '#6D47BE',
                    borderWidth: 2,
                    borderRadius: 15,
                  }}
                  value={props.values.local}
                  onChangeText={(text) => props.setFieldValue('local', text)}
                />
                <Text>Descrição</Text>
                <TextInput
                  style={{
                    width: 379,
                    height: 185,
                    borderColor: '#6D47BE',
                    borderWidth: 2,
                    borderRadius: 15,
                  }}
                  value={props.values.descricao}
                  onChangeText={(text) =>
                    props.setFieldValue('descricao', text)
                  }
                />
                <View
                  style={{
                    marginTop: 10,
                    width: 379,
                    height: 57,
                    borderColor: '#6D47BE',
                    borderWidth: 2,
                    borderRadius: 15,
                  }}>
                  <RectButton
                    onPress={() => {}}
                    style={{
                      width: 114,
                      height: 57,
                      borderColor: '#6D47BE',
                      borderWidth: 1,
                      backgroundColor: '#50E3C2',
                      borderRadius: 15,
                      alignItems:'flex-end'
                    }}>
                    <TextInput
                      placeholder="Tire uma foto"
                      style={{textAlign: 'center', justifyContent: 'center'}}>
                      Foto
                    </TextInput>
                  </RectButton>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity
                    style={[styles.item, {backgroundColor: '#50E3C2'}]}
                    onPress={() => {}}
                    activeOpacity={0.6}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        Publicar
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.item, {backgroundColor: 'red'}]}
                    onPress={() => {}}
                    activeOpacity={0.6}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'row',
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        Cancelar
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
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
    height: 57,
    width: 114,
    borderRadius: 15,
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

export default withFormik({
  mapPropsToValues: () => ({cnpj: '', senha: ''}),

  handleSubmit: (values) => {
    console.log(values);
  },
})(NovaPublicacao);
