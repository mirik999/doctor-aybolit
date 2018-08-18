import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//localization
import { addLocaleData } from 'react-intl';
import az from 'react-intl/locale-data/az';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
//user components
import App from './App';
//actions
import { setlocale, LoginDispatch } from './Actions/locale';
//reducers
import rootReducer from './Reducers/rootReducer';
//css
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'mdbreact/dist/mdbreact'; 
import './globalStyles.css';

//setting localization
addLocaleData(az);
addLocaleData(en);
addLocaleData(ru);
//create store
export const store = createStore (
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.Login) {
  const payload = decode(localStorage.Login);
  const user = {
    email: payload.email,
    token: localStorage.Login
  };
  store.dispatch(LoginDispatch(user));
}

//check locale language
if (localStorage.devsLang) {
	store.dispatch(setlocale(localStorage.devsLang))
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root'));
registerServiceWorker();
