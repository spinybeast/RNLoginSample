import { createStackNavigator } from 'react-navigation'

import LoginScreen from '../Screens/LoginScreen'
import DashboardScreen from '../Screens/DashboardScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  DashboardScreen: { screen: DashboardScreen}
}, {
  // Default config for all screens
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
