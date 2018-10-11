import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../Screens/LoginScreen'
import DashboardScreen from '../Screens/DashboardScreen'
import UserDetailsScreen from '../Screens/UserDetailsScreen'
import styles from './Styles/NavigationStyles'
// Manifest of possible screens

const DashboardStack = createStackNavigator({DashboardScreen, UserDetailsScreen})

const PrimaryNav = createSwitchNavigator(
  {
    LoginScreen: LoginScreen,
    Dashboard: DashboardStack
  },
  {
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)
export default PrimaryNav
