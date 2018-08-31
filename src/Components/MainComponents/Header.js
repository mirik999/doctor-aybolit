import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Fa } from 'mdbreact';
import classNames from 'classnames';
//user components
import Wrapper from './Wrapper.js';
import BurgerMenu from './BurgerMenu.js';
// actions
import { setlocale } from '../../Actions/locale';


class Header extends Component {
  constructor(props) {
    super(props);

    this.txt = {
      mainLink: <FormattedMessage id="main.main-link" />,
      bioLink: <FormattedMessage id="main.bio-link" />,
      mediaLink: <FormattedMessage id="main.media-link" />,
      galleryLink: <FormattedMessage id="main.gallery-link" />,
      artLink: <FormattedMessage id="main.art-link" />,
      contactLink: <FormattedMessage id="main.contact-link" />,
    };
  }

	render() {
    const { lang } = this.props;

		return (
			<Wrapper>
				<div className="row justify-content-center border-bottom" style={styles.headerInfoBg}>
          <BurgerMenu txt={this.txt} />
					<div className="col-9 col-md-7 text-left font-16 py-2 px-0 px-sm-2 pl-2 pl-md-0" style={styles.headerInfo}>
            <span className="ml-2 ml-md-0 mr-1 mr-sm-2"><Fa icon="phone" /></span>
            <a href="tel:994503184345" className="text-color">+994 50 8805880</a>
            <span className="ml-2 ml-md-5 mr-1 mr-sm-2"><Fa icon="envelope-o" /></span>
            <a href="mailto:hekim@fermanhesenov.az" className="text-color">dr_farman59@mail.ru</a>
					</div>
					<div className="col-3 col-md-3 d-flex justify-content-end py-2 px-0 px-sm-2">
						<div className="header-social d-none d-sm-flex align-items-center mr-2 pr-1 border-right">
							<a href="https://www.facebook.com/drfarmanhasanov" target="_blank" className="mr-3 cursor-pointer font-16" style={styles.headerInfo}><Fa icon="facebook-f" /></a>
							<a href="https://twitter.com/drfarmanhasanov" target="_blank" className="mr-3 cursor-pointer font-16" style={styles.headerInfo}><Fa icon="twitter" /></a>
							<a href="https://www.youtube.com/channel/UC3ttamdtGlr-F82Mc2lGiLQ" target="_blank" className="mr-3 cursor-pointer font-16" style={styles.headerInfo}><Fa icon="youtube" /></a>
						</div>
						<div className="header-lang d-flex align-items-center font-16 ml-1 mr-3 mr-md-0" style={styles.headerInfo}>
							<span className={classNames({
                "mr-3 cursor-pointer": true,
                "text-color-blue font-weight-bold": lang === "az"
              })} onClick={() => { this.props.setlocale("az") }}>AZ</span>
							<span className={classNames({
                "mr-3 cursor-pointer": true,
                "text-color-blue font-weight-bold": lang === "en"
              })} onClick={() => { this.props.setlocale("en") }}>EN</span>
							<span className={classNames({
                "cursor-pointer": true,
                "text-color-blue font-weight-bold": lang === "ru"
              })} onClick={() => { this.props.setlocale("ru") }}>RU</span>
						</div>
					</div>
				</div>
			{/* second header part */}
				<div className="d-none d-lg-block row justify-content-center" style={styles.headerNavBarFix}></div>
				<div className="row justify-content-start justify-content-lg-center" style={styles.headerNavBar}>
          <div className="d-none d-md-block d-lg-none col-1"></div>
					<div className="col-3 col-lg-3 d-flex align-start px-md-0">
            <NavLink exact to="/">
							<img src={require('../../lib/images/Logo/Logo-header.svg')} alt="logo" className="img-fluid header-logo" />
						</NavLink>
					</div>
					<div className="col-lg-7 d-none d-lg-flex justify-content-end align-items-start px-0">
						<NavLink exact to="/" className="header-nav-links font-18" activeClassName="active-link">{ this.txt.mainLink }</NavLink>
						<NavLink exact to="/biography" className="header-nav-links font-18" activeClassName="active-link">{ this.txt.bioLink }</NavLink>
						<NavLink exact to="/media" className="header-nav-links font-18" activeClassName="active-link">{ this.txt.mediaLink }</NavLink>
						<NavLink exact to="/gallery" className="header-nav-links font-18" activeClassName="active-link">{ this.txt.galleryLink }</NavLink>
						<NavLink to="/articles" className="header-nav-links font-18" activeClassName="active-link">{ this.txt.artLink }</NavLink>
						<NavLink exact to="/contact" className="header-nav-links font-18" activeClassName="active-link">{ this.txt.contactLink }</NavLink>
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

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale },  null, { pure: false })(Header);