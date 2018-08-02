import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Fa } from 'mdbreact';
//user components
import Wrapper from './Wrapper.js';


class Header extends Component {
	render() {
		return (
			<Wrapper>
				<div className="row justify-content-center" style={styles.headerInfoBg}>
					<div className="col-8 col-md-7 text-left font-16 p-2" style={styles.headerInfo}>
						<span className="mr-1 mr-sm-2"><Fa icon="phone" /></span>
						<span>+994 12 7654321</span>
						<span className="ml-2 ml-md-5 mr-1 mr-sm-2"><Fa icon="envelope-o" /></span>
						<span>melumat@fermanhesenov.az</span>
					</div>
					<div className="col-4 col-md-3 d-flex justify-content-end p-2">
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
				<div className="row justify-content-center" style={styles.headerNavBarFix}>

				</div>
				<div className="row justify-content-center" style={styles.headerNavBar}>
					<div className="col-4 col-md-3 d-flex align-items-start">
						<img src={require('../../lib/images/Logo/Logo-header.svg')} alt="logo" className="img-fluid" />
					</div>
					<div className="col-8 col-md-7 d-flex justify-content-end align-items-start p-2">
						<NavLink exact to="/" className="header-nav-links font-18" activeClassName="active">ƏSAS SƏHİFƏ</NavLink>
						<NavLink exact to="/test1" className="header-nav-links font-18" activeClassName="active">BİOQRAFİYA</NavLink>
						<NavLink exact to="/test2" className="header-nav-links font-18" activeClassName="active">MEDİA</NavLink>
						<NavLink exact to="/test3" className="header-nav-links font-18" activeClassName="active">QALEREYA</NavLink>
						<NavLink exact to="/test4" className="header-nav-links font-18" activeClassName="active">MƏQALƏLƏR</NavLink>
						<NavLink exact to="/test5" className="header-nav-links font-18" activeClassName="active">ƏLAQƏ</NavLink>
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
}

export default Header;