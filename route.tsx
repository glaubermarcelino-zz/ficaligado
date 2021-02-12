import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/Login/Index';
import Home from './src/pages/Home/Index';
import Educacao from './src/pages/Educacao/Index';
import Descontos from './src/pages/Descontos/Index';
import BemVindo from './src/pages/BemVindo/Index';
import HistoricoRotas from './src/pages/HistoricoRotas/Index';
import Cadastro from './src/pages/Cadastro/Index';
import Publicacao from './src/pages/Publicacao/Index';
import Mapa from './src/pages/Mapa/Index';
import NovaOcorrencia from './src/pages/NovaOcorrencia/Index';
import Publicacoes from './src/pages/Publicacao/Index';
import SideMenu from './src/components/SideMenu/Index';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName="Splash"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Cadastro" component={Cadastro} />
        <AppStack.Screen name="HistoricoRotas" component={HistoricoRotas} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Publicacoes" component={Publicacoes} />
        <AppStack.Screen name="Educacao" component={Educacao} />
        <AppStack.Screen name="Descontos" component={Descontos} />
        <AppStack.Screen name="Mapa" component={Mapa} />
        <AppStack.Screen name="NovaOcorrencia" component={NovaOcorrencia} />
        <AppStack.Screen name="BemVindo" component={BemVindo} />
        <AppStack.Screen name="SideMenu" component={SideMenu} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
