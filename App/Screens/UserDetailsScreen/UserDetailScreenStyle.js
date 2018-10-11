import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  photo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  name: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  info: {
    marginLeft: 20,
    marginBottom: 20
  }
});
