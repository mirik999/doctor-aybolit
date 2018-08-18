import React, {Component} from 'react';
import { Fa } from 'mdbreact';
import { slide as Menu } from 'react-burger-menu'
import classNames from "classnames";


class AdminBurgerMenu extends Component {
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
      <div className="d-block d-xl-none px-0">
        <Menu styles={styles} left>
          <div className="admin-navbar-logo row justify-content-center p-3">
            <img src={require('../../lib/images/Logo/Logo-footer.svg')} className="img-fluid m-2" />
          </div>
          <div className="row justify-content-center p-3 w-100">
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
        </Menu>
      </div>
    );
  }
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '200px',
    top: '37px'
  },
  bmBurgerBars: {
    background: '#827f7f'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#2D3436'
  },
  bmMenu: {
    background: '#2D3436',
    padding: '1em',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#2D3436'
  },
  bmItemList: {
    color: '#b8b7ad'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    width: '100%'
  }
};

export default AdminBurgerMenu;