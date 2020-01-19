import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
        title: "DevRadar"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
        title: "Perfil do Github"
    }
  },
},
{
    defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerStyle: {
            backgroundColor: "#7D40E7"
        }
    }
});

export default createAppContainer(AppNavigator);
