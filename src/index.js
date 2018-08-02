import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//localization
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
//user components
import App from './App';
//actions
import { setlocale } from './Actions/locale';
//reducers
import rootReducer from './Reducers/rootReducer';
//css
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/mdbreact'; 
import './globalStyles.css';

//setting localization
addLocaleData(en)
addLocaleData(ru)
//create store
export const store = createStore (
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

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
