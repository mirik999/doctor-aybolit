import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Fa } from 'mdbreact';
import { slide as Menu } from 'react-burger-menu'
//user components
import Wrapper from './Wrapper.js';


class Header extends Component {
  render() {
    return (
        <div className="col-12 d-block d-lg-none px-0">
          <Menu styles={styles} right>
            <div className="d-flex flex-column justify-content-center align-items-center px-0">
              <img src={require('../../lib/svg/Logo/Logo (white).svg')} alt="white-logo" className="img-fluid mb-4" />
              <NavLink exact to="/" className="burger-nav-links" activeClassName="active-link-burger">ƏSAS SƏHİFƏ</NavLink>
              <NavLink exact to="/biography" className="burger-nav-links" activeClassName="active-link-burger">BİOQRAFİYA</NavLink>
              <NavLink exact to="/media" className="burger-nav-links" activeClassName="active-link-burger">MEDİA</NavLink>
              <NavLink exact to="/gallery" className="burger-nav-links" activeClassName="active-link-burger">QALEREYA</NavLink>
              <NavLink exact to="/articles" className="burger-nav-links" activeClassName="active-link-burger">MƏQALƏLƏR</NavLink>
              <NavLink exact to="/contact" className="burger-nav-links" activeClassName="active-link-burger">ƏLAQƏ</NavLink>
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
    right: '36px',
    top: '60px'
  },
  bmBurgerBars: {
    background: '#00D2D3'
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

export default Header;