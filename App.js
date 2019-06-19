import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import  Vitri from './components/Vitri'
import  Listview from './components/Listview'
 

const RootStack = createStackNavigator({


  Vitri:{
    screen:Vitri
    },
 


});

const App = createAppContainer(RootStack);

export default App;