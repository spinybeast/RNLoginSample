import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container, Button, Content, Text, Form, Item, Input } from 'native-base';

import LoginActions from '../../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation';

import styles from './LoginScreenStyle'


class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Авторизация'
  }

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }


  _handlePressLogin = () => {
    const { username, password } = this.state
    this.props.loginRequest(username, password);
  }

  _handleChangeUsername = (text) => {
    this.setState({ username: text });
  }

  _handleChangePassword = (text) => {
    this.setState({ password: text });
  }

  render () {
    const { username, password } = this.state
    const { fetching } = this.props;
    const editable     = !fetching;

    return (
      <Container >
        <Content style={[styles.mainContainer]}>
          <Form>
            <Item>
              <Input placeholder="Логин"  onChangeText={this._handleChangeUsername}/>
            </Item>
            <Item last>
              <Input placeholder="Пароль" secureTextEntry keyboardType="numeric" onChangeText={this._handleChangePassword}/>
            </Item>
          </Form>
          <Button onPress={this._handlePressLogin} block>
            <Text>Войти</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
