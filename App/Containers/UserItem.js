import React, { PureComponent } from 'react'
import { Image } from 'react-native'
import { View, Text, Button } from 'native-base'
import styles from './Styles/UserStyles'

class UserItem extends PureComponent {
  render () {
    const {user} = this.props
    return (
      <View style={styles.item}>
        <Image
          style={styles.thumbnail}
          source={{uri: user.picture.thumbnail}}
        />
        <View>
          <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
          <Text>{user.email}</Text>
        </View>
        <Button onPress={() => {
          this.props.navigation.navigate('UserDetailsScreen', {
            user: user
          });
        }}><Text>Details</Text></Button>
      </View>
    )
  }
}

export default UserItem
