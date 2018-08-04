import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Fa } from 'mdbreact';
import { slide as Menu } from 'react-burger-menu'
//user components
import Wrapper from './Wrapper.js';
import BurgerMenu from './BurgerMenu.js';


class Header extends Component {
	render() {
		return (
			<Wrapper>
				<div className="row justify-content-center" style={styles.headerInfoBg}>
          <BurgerMenu />
					<div className="col-8 col-md-7 text-left font-16 py-2 px-0 px-sm-2" style={styles.headerInfo}>
						<span className="ml-2 ml-md-0 mr-1 mr-sm-2"><Fa icon="phone" /></span>
						<span>+994 12 7654321</span>
						<span className="ml-2 ml-md-5 mr-1 mr-sm-2"><Fa icon="envelope-o" /></span>
						<span>melumat@fermanhesenov.az</span>
					</div>
					<div className="col-4 col-md-3 d-flex justify-content-end py-2 px-0 px-sm-2">
						<div className="header-social d-flex align-items-center mr-2 border-right">
							<a href="#" className="mr-2 cursor-pointer font-16" style={styles.headerInfo}><Fa icon="facebook-f" /></a>
							<a href="#" className="mr-2 cursor-pointer font-16" style={styles.headerInfo}><Fa icon="twitter" /></a>
							<a href="#" className="mr-2 cursor-pointer font-16" style={styles.headerInfo}><Fa icon="youtube" /></a>
						</div>
						<div className="header-lang d-flex align-items-center font-16 ml-1" style={styles.headerInfo}>
							<span className="mr-2 cursor-pointer">RU</span>
							<span className="cursor-pointer">EN</span>
						</div>
					</div>
				</div>
			{/* second header part */}
				<div className="d-none d-lg-block row justify-content-center" style={styles.headerNavBarFix}></div>
				<div className="row justify-content-start justify-content-lg-center" style={styles.headerNavBar}>
          <div className="d-none d-md-block d-lg-none col-1"></div>
					<div className="col-3 col-lg-3 d-flex align-start px-md-0">
						<img src={require('../../lib/images/Logo/Logo-header.svg')} alt="logo" className="img-fluid header-logo" />
					</div>
					<div className="col-lg-7 d-none d-lg-flex justify-content-end align-items-start px-0">
						<NavLink exact to="/" className="header-nav-links font-18" activeClassName="active-link">ƏSAS SƏHİFƏ</NavLink>
						<NavLink exact to="/test1" className="header-nav-links font-18" activeClassName="active-link">BİOQRAFİYA</NavLink>
						<NavLink exact to="/test2" className="header-nav-links font-18" activeClassName="active-link">MEDİA</NavLink>
						<NavLink exact to="/test3" className="header-nav-links font-18" activeClassName="active-link">QALEREYA</NavLink>
						<NavLink exact to="/test4" className="header-nav-links font-18" activeClassName="active-link">MƏQALƏLƏR</NavLink>
						<NavLink exact to="/test5" className="header-nav-links font-18" activeClassName="active-link">ƏLAQƏ</NavLink>
					</div>
				</div>
			</Wrapper>
		);
	}
}

const styles = {
	headerInfoBg: {
		backgroundColor: '#FCFCFC'
	},
	headerInfo: {
		color: '#4F4F4F'
	},
	headerNavBar: {
		height: '83px'
	},
	headerNavBarFix: {
		height: '63px'
	},
};


export default Header;