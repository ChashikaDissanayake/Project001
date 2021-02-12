import {createStackNavigator, createAppContainer} from 'react-navigation';
import app from '../root.js/index';

const navigator = createStackNavigator(
  {
    index: app,
  },
  {
    initialRouterName: 'index',
    defaultNavigationOptions: {
      title: 'app',
    },
  },
);

export default createAppContainer(navigator);
