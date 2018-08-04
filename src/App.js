import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
//user components
import Header from './Components/MainComponents/Header';
import Footer from './Components/MainComponents/Footer';
import BurgerMenu from './Components/MainComponents/BurgerMenu';
import Content from './Components/IndexPage/Content';
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
			      <Route exact location={location} path="/" component={Content} />
		      </Switch>
					<Footer />
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
