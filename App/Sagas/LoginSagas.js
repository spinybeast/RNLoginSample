import { put, call } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import { Alert } from 'react-native'
import NavigationService from '../Navigation/NavigationService';

// attempts to login
export function * login (api, { username, password }) {
  const auth = {
    username: username,
    password: password
  }
  response = yield call(api.login, auth);

  if(response.ok) {
    yield put(LoginActions.loginSuccess(response.data));
    NavigationService.navigate('DashboardScreen',{});

  } else {
    Alert.alert('Ошибка', 'Пароль введен неверно',[
      {text: 'OK', onPress: () => { console.log('OK Pressed');} },
    ]);
    yield put(LoginActions.loginFailure(response.error))
  }
}
