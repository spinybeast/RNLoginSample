import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Container,  Content, Text } from 'native-base';

import { NavigationActions } from 'react-navigation';

import styles from './DashboardScreenStyle'


class DashboardScreen extends Component {
  static navigationOptions = {
    title: 'Главный экран'
  }
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Content style={styles.mainContainer}>
          <Text style={styles.sectionText}>HELLO {this.props.user.email}</Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
  }
}



export default connect(mapStateToProps, null)(DashboardScreen)
