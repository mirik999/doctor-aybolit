import React, {PureComponent, Fragment} from 'react';
import { Fa } from 'mdbreact';
import classNames from 'classnames';
//css
import './AdminPanel.css';



class AdminNavBar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      section: 'gallery'
    };

    this.setSection = this.setSection.bind(this);
  }

  setSection = (section) => {
    this.props.section(section);
    this.setState({ section })
  };

  render() {
    const { section } = this.state;

    return (
      <div className="admin-navbar d-none d-xl-block col-xl-2">
        <div className="admin-navbar-logo row justify-content-center p-0 p-lg-3">
          <img src={require('../../lib/images/Logo/Logo-footer.svg')} className="img-fluid m-2" />
        </div>
        <div className="row p-0 w-100 m-0">
          <div className="d-flex flex-column m-2 w-100">
            <span className={classNames({
              "admin-navbar-link-active" : section === 'gallery',
              "admin-navbar-link" : section !== 'gallery',
            })} onClick={() => this.setSection('gallery')}>
              <Fa icon="file-photo-o" className="mr-2"/> Qalereya
            </span>
            <span className={classNames({
                "admin-navbar-link-active" : section === 'wordpad',
                "admin-navbar-link" : section !== 'wordpad',
            })} onClick={() => this.setSection('wordpad')}>
              <Fa icon="file-code-o" className="mr-2"/> Sözlər köşkü
            </span>
            <span className={classNames({
                  "admin-navbar-link-active" : section === 'media',
                  "admin-navbar-link" : section !== 'media',
            })} onClick={() => this.setSection('media')}>
              <Fa icon="file-movie-o" className="mr-2"/> Media
            </span>
            <span className={classNames({
                    "admin-navbar-link-active" : section === 'articles',
                    "admin-navbar-link" : section !== 'articles',
            })} onClick={() => this.setSection('articles')}>
              <Fa icon="file-text-o" className="mr-2"/> Məqalələr
            </span>
          </div>
        </div>
      </div>
    );
  }
}


export default AdminNavBar;