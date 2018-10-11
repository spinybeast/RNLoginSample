import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  name: {
    fontWeight: 'bold'
  }
})
