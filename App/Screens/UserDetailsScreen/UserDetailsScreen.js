import React, { PureComponent } from 'react'
import { Image } from 'react-native'
import { View, Text } from 'native-base'
import { MapView } from 'expo'
import styles from './UserDetailScreenStyle'

class UserDetailsScreen extends PureComponent {
  static navigationOptions = {
    title: 'User Details'
  }

  getRegionForCoordinates = (points) => {
    // points should be an array of { latitude: X, longitude: Y }
    let minX, maxX, minY, maxY;

    // init first point
    ((point) => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);

    // calculate rect
    points.map((point) => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = (maxX - minX);
    const deltaY = (maxY - minY);

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY
    };
  }
  render () {
    const {navigation} = this.props
    const user = navigation.getParam('user', {})

    return (
      <View style={styles.view}>
        <Image
          style={styles.photo}
          source={{uri: user.picture.large}}
        />
        <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
        <View style={styles.info}>
          <Text>email: {user.email}</Text>
          <Text>phone: {user.phone}</Text>
          <Text>birthday: {new Date(user.dob.date).toLocaleDateString('ru-RU')}</Text>
          <Text>address: {`${user.location.postcode}, ${user.location.state}, ${user.location.city}, ${user.location.street}`}</Text>
        </View>
        <MapView
          style={{alignSelf: 'stretch', height: 300}}
          region={this.getRegionForCoordinates([user.location.coordinates])}
        />
      </View>
    )
  }
}

export default UserDetailsScreen;
