import React, { Component, PropTypes } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Container,  Content, Text, Button } from 'native-base';

import { NavigationActions, StackActions } from 'react-navigation'

import styles from './DashboardScreenStyle';
import LoginActions from '../../Redux/LoginRedux'
import UserItem from '../../Containers/UserItem'
import * as users from '../../Data/users.json';

class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Главный экран'
  }
  constructor (props) {
    super(props)
    this.state = {users: users.data}
  }

  _handlePressLogout = () => {
    this.props.logout();
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render () {
    return (
      <Container>
        <Content style={styles.mainContainer}>
          <Text>HELLO {this.props.user.email}</Text>
          <Button onPress={this._handlePressLogout}><Text>Logout</Text></Button>

          <FlatList
            data={this.state.users}
            renderItem={({item}) => <UserItem user={item} navigation={this.props.navigation} />}
            keyExtractor={item => item.email}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LoginActions.logout())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
