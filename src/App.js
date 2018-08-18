import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
//user components
import UserIsAuth from './Components/MainComponents/UserIsAuth';
import UserNotAuth from './Components/MainComponents/UserNotAuth';
import Header from './Components/MainComponents/Header';
import Footer from './Components/MainComponents/Footer';
import IndexPage from './Components/IndexPage/IndexPage';
import BiographyPage from './Components/BiographyPage/BiographyPage';
import MediaPage from './Components/MediaPage/MediaPage';
import GalleryPage from './Components/GalleryPage/GalleryPage';
import ArticlesPage from './Components/ArticlesPage/ArticlesPage';
import ArticleRead from "./Components/ArticlesPage/ArticleRead";
import ContactPage from "./Components/ContactPage/ContactPage";
//admin
import AdminPanel from "./Components/Admin/AdminPanel";
import AdminNavBar from "./Components/Admin/AdminNavBar";
import AdminBurgerMenu from "./Components/Admin/AdminBurgerMenu";
import AdminDashboard from "./Components/Admin/AdminDashboard";
//locale data
import messages from './messages';



class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      section: 'gallery'
    };

    this.setSection = this.setSection.bind(this);
  }

  setSection = (section) => {
    this.setState({ section })
  };

  render() {
    const { section } = this.state;
    const {location, lang, user} = this.props;

    const isOnline = Object.keys(user).length !== 0;

    if (this.props.location.pathname.indexOf('admin') !== 1) {
      return (
        <IntlProvider locale={lang} messages={messages[lang]}>
          <div className="container-fluid">
            <Header lang={lang} />
            <Switch>
              <Route exact location={location} path="/" component={IndexPage}/>
              <Route exact location={location} path="/biography" component={BiographyPage}/>
              <Route exact location={location} path="/media" component={MediaPage}/>
              <Route exact location={location} path="/gallery" component={GalleryPage}/>
              <Route exact location={location} path="/articles" component={ArticlesPage}/>
              <Route exact location={location} path="/articles/:id" component={ArticleRead}/>
              <Route exact location={location} path="/contact" component={ContactPage}/>
            </Switch>
            <Footer lang={lang} />
          </div>
        </IntlProvider>
      );
    }
    // admin route
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div className="container-fluid" style={{ height: "100%" }}>
          <div className="row admin-all-content" style={{ height: "100%" }}>
            { isOnline && <AdminNavBar section={this.setSection} /> }
            { isOnline && <AdminBurgerMenu section={this.setSection} /> }
            <Switch>
              <UserIsAuth exact location={location} path="/admin" component={AdminPanel} />
              <UserNotAuth exact location={location} path="/admin/dashboard" section={section} component={AdminDashboard} />
            </Switch>
          </div>
          <div className="admin-footer"></div>
        </div>
      </IntlProvider>
    )

  }
}

function mapStateToProps(state) {
	return {
		lang: state.locale.lang,
    user: state.user
	}
}

export default connect(mapStateToProps)(App);
