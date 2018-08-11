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
import GalleryPage from './Components/GalleryPage/GalleryPage';
import ArticlesPage from './Components/ArticlesPage/ArticlesPage';
import ArticleRead from "./Components/ArticlesPage/ArticleRead";
import ContactPage from "./Components/ContactPage/ContactPage";
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
			      <Route exact location={location} path="/gallery" component={GalleryPage} />
			      <Route exact location={location} path="/articles" component={ArticlesPage} />
			      <Route exact location={location} path="/articles/:id" component={ArticleRead} />
			      <Route exact location={location} path="/contact" component={ContactPage} />
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
