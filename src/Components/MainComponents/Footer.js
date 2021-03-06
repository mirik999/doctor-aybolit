import React, {PureComponent} from 'react';
import { Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import _ from "lodash";
//user components
import Wrapper from './Wrapper.js';
//api requests
import api from '../../api';
//actions
import { setlocale } from "../../Actions/locale";


class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

    this.onScrollUp = this.onScrollUp.bind(this);

    this.txt = {
      readmore: <FormattedMessage id="main.readmore" />,
      adress: <FormattedMessage id="contact.adress" />,
      allrights: <FormattedMessage id="main.allrights" />,
      shortlinks: <FormattedMessage id="main.shorlinks" />,
      lastarts: <FormattedMessage id="main.lastarts" />,
      contactinfo: <FormattedMessage id="main.contactinfo" />,
      mainLink: <FormattedMessage id="main.main-link" />,
      bioLink: <FormattedMessage id="main.bio-link" />,
      mediaLink: <FormattedMessage id="main.media-link" />,
      galleryLink: <FormattedMessage id="main.gallery-link" />,
      artLink: <FormattedMessage id="main.art-link" />,
      contactLink: <FormattedMessage id="main.contact-link" />,
      aboutFH: <FormattedMessage id="footerFH" />,
      doctorName: <FormattedMessage id="main.doctor.name" />,
    }
  }

  async componentDidMount() {
    const articles = await api.admin.getArticles();
    this.setState({ articles: articles.reverse().slice(Math.max(articles.length - 2, 0)) })
  }

  onScrollUp = () => {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      top: 0
    })
  };

  render() {
    const { articles } = this.state;

    return (
      <Wrapper>
        <div className="row justify-content-center" style={styles.bg1}>
          <div className="col-12 col-md-10 p-3 py-md-5 pb-0">
            <div className="row justify-content-center" style={styles.footerColor}>
              <div className="col-10 col-sm-8 col-xl-3 d-flex flex-column align-items-center">
                <img src={require('../../lib/images/Logo/Logo-footer.svg')} alt="white-logo" className="img-fluid my-2 my-md-3" />
                <small className="text-justify my-2 my-md-3">
                  { this.txt.aboutFH }
                </small>
                <div className="social-links w-100">
                  <a href="https://www.facebook.com/drfarmanhasanov" target="_blank" className="mr-3 cursor-pointer font-16" style={styles.footerColor}><Fa icon="facebook-f" /></a>
                  <a href="https://twitter.com/drfarmanhasanov" target="_blank" className="mr-3 cursor-pointer font-16" style={styles.footerColor}><Fa icon="twitter" /></a>
                  <a href="https://www.youtube.com/channel/UC3ttamdtGlr-F82Mc2lGiLQ" target="_blank" className="mr-3 cursor-pointer font-16" style={styles.footerColor}><Fa icon="youtube" /></a>
                </div>
              </div>
              <div className="col-12 col-md-4 col-xl-2 d-none d-md-flex flex-column align-items-center pl-4">
                <div className="my-2 my-md-3 pb-3 w-100"><span className="footer-heading font-28 font-weight-bold pb-3">{ this.txt.shortlinks }</span></div>
                <div className="w-100">
                  <ul className="pl-3">
                    <li><Link to="/" onClick={this.onScrollUp} className="mr-2 cursor-pointer font-16" style={styles.footerColor}>{ this.txt.mainLink }</Link></li>
                    <li><Link to="/biography" onClick={this.onScrollUp} className="mr-2 cursor-pointer font-16" style={styles.footerColor}>{ this.txt.bioLink }</Link></li>
                    <li><Link to="/media" onClick={this.onScrollUp} className="mr-2 cursor-pointer font-16" style={styles.footerColor}>{ this.txt.mediaLink }</Link></li>
                    <li><Link to="/gallery" onClick={this.onScrollUp} className="mr-2 cursor-pointer font-16" style={styles.footerColor}>{ this.txt.galleryLink }</Link></li>
                    <li><Link to="/articles" onClick={this.onScrollUp} className="mr-2 cursor-pointer font-16" style={styles.footerColor}>{ this.txt.artLink }</Link></li>
                    <li><Link to="/contact" onClick={this.onScrollUp} className="mr-2 cursor-pointer font-16" style={styles.footerColor}>{ this.txt.contactLink }</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mt-2 mt-md-4 mt-xl-0">
                <div className="my-2 my-md-3 pb-3 w-100"><span className="footer-heading font-28 font-weight-bold pb-3">{ this.txt.lastarts }</span></div>
                {
                  articles.map((art, idx) => {
                    return(
                      <div className="footer-art-wrap d-flex align-items-center w-100 my-2" key={idx}>
                        <img src={art.artThumbnail} alt="" className="img-fluid footer-art-img" />
                        <div className="d-flex flex-column w-100 ml-2">
                          <small className="footer-art-name font-weight-bold" style={{ color: '#00D2D3' }}>
                            <Link to={`/articles/${art._id}`} className="text-color-blue">{ _.truncate(art.artTitle, { 'length': 30 }) }</Link>
                          </small>
                          <small className="font-12">
                            { _.truncate(art.artText, { 'length': 80 }).replace(/<\/?[^>]+>/g,'').replace('&nbsp;', ' ') }
                            <Link to={`/articles/${art._id}`} className="font-weight-bold out-none" style={styles.footerColor}> { this.txt.readmore }</Link>
                          </small>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="col-12 col-sm-6 col-xl-3 d-flex flex-column align-items-center mt-2 mt-md-4 mt-xl-0">
                <div className="my-2 my-md-3 pb-3 w-100"><span className="footer-heading font-28 font-weight-bold pb-3">{ this.txt.contactinfo }</span></div>
                <div className="d-flex flex-column w-100">
                  <div className="add-phone d-flex align-items-center add-info-wrap pb-2">
                    <span className="footer-add-icon mr-2 mr-xl-3"><Fa icon="phone" /></span>
                    <div className="add-nums d-flex flex-xl-column">
                      <a href="tel:994508805880" className="footer-color mr-3 mr-xl-0"><small>+994 50 8805880</small></a>
                      <a href="tel:994508805880" className="footer-color mr-3 mr-xl-0"><small>+994 50 3184345</small></a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column mt-2 w-100">
                  <div className="add-phone d-flex align-items-center add-info-wrap pb-2">
                    <span className="footer-add-icon mr-2 mr-xl-3"><Fa icon="envelope-o" /></span>
                    <div className="add-nums d-flex align-items-center justify-content-center">
                      <a href="mailto:dr_farman59@mail.ru" className="footer-color">
                        <small>dr_farman59@mail.ru</small></a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column mt-2 w-100">
                  <div className="add-phone d-flex pb-2 align-items-center w-100">
                    <span className="footer-add-icon mr-3 mr-xl-4"><Fa icon="map-marker" /></span>
                    <div className="add-nums d-flex">
                      <a href="#" className="footer-color">
                        <small>{ this.txt.adress }</small></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={styles.bg2}>
          <div className="col-12 col-md-10 text-left p-2 px-md-3 d-flex align-items-center" style={styles.footerColor}>
            <small className="ml-2 ml-md-0">2018 © { this.txt.doctorName } { this.txt.allrights }</small>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const styles = {
  bg1: {
    backgroundColor: '#2D3436',
    minHeight: '400px'
  },
  bg2: {
    backgroundColor: '#232829'
  },
  footerColor: {
    color: '#DFE6E9',
    minHeight: '50px'
  }
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale })(Footer);