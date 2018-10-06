import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { AppLoading, Asset, Font } from 'expo';
import { useScreens } from 'react-native-screens';

useScreens();
// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     assets: false
   };
  }


  async _loadAssetsAsync () {
    await Font.loadAsync({
      'MaterialIcons' : require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
      'Ionicons'       : require('@expo/vector-icons/fonts/Ionicons.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }


  render () {
    if (!this.state.assets) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ assets: true })}
        />
      );
    }


    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default App
