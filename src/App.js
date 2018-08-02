import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
//user components
import Header from './Components/MainComponents/Header';
import Main from './Components/IndexPage/Main';
//locale data
import messages from './messages';


class App extends PureComponent {
  render() {
	  const { location, lang } = this.props;

    return (
	    <IntlProvider locale={lang} messages={messages[lang]}>
	      <div className="container-fluid">
	      	<Header />
		      <Switch>
			      <Route exact location={location} path="/" component={Main} />
		      </Switch>
	      </div>
	    </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
	return {
		lang: state.locale.lang
	}
}

export default connect(mapStateToProps)(App);
