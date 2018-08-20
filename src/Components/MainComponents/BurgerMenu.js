import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'


class BurgerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { txt } = this.props;

    return (
        <div className="col-12 d-block d-lg-none px-0">
          <Menu styles={styles} right isOpen={this.state.isOpen}>
            <div className="d-flex flex-column justify-content-center align-items-center px-0">
              <img src={require('../../lib/images/Logo/Logo-footer.svg')} alt="white-logo" className="img-fluid mb-4" />
              <NavLink exact to="/" className="burger-nav-links" activeClassName="active-link-burger">{ txt.mainLink }</NavLink>
              <NavLink exact to="/biography" className="burger-nav-links" activeClassName="active-link-burger">{ txt.bioLink }</NavLink>
              <NavLink exact to="/media" className="burger-nav-links" activeClassName="active-link-burger">{ txt.mediaLink }</NavLink>
              <NavLink exact to="/gallery" className="burger-nav-links" activeClassName="active-link-burger">{ txt.galleryLink }</NavLink>
              <NavLink exact to="/articles" className="burger-nav-links" activeClassName="active-link-burger">{ txt.artLink }</NavLink>
              <NavLink exact to="/contact" className="burger-nav-links" activeClassName="active-link-burger">{ txt.contactLink }</NavLink>
            </div>
          </Menu>
        </div>
    );
  }
}

const styles = {
  bmBurgerButton: {
    position: 'absolute',
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

export default BurgerMenu;