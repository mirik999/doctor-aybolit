import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
//user components
import Header from './Components/MainComponents/Header';
import Footer from './Components/MainComponents/Footer';
import IndexPage from './Components/IndexPage/IndexPage';
import BiographyPage from './Components/BiographyPage/BiographyPage';
import MediaPage from './Components/MediaPage/MediaPage';
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
			      <Route exact location={location} path="/" component={IndexPage} />
			      <Route exact location={location} path="/biography" component={BiographyPage} />
			      <Route exact location={location} path="/media" component={MediaPage} />
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
