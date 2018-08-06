import React, {PureComponent} from 'react';
import { Fa } from 'mdbreact';
//user components
import Wrapper from './Wrapper.js';


class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="row justify-content-center" style={styles.bg1}>
          <div className="col-12 col-md-10 p-3 py-md-5 pb-0">
            <div className="row justify-content-center" style={styles.footerColor}>
              <div className="col-10 col-sm-8 col-xl-3 d-flex flex-column align-items-center">
                <img src={require('../../lib/svg/Logo/Logo (white).svg')} alt="white-logo" className="img-fluid my-2 my-md-3" />
                <small className="text-justify my-2 my-md-3">
                  Lorem İpsum – dizayn nəşrlərində istifadə olunan düzgün olmayan mətndir. Dəqiq quruluşa malik olmayan
                  bu mətn latincada hələ XVI əsrdə öz qəlib formasını almışdır. Həmin zamanlarda naməlum bir çapçı Lorem
                  Ipsum`dan istifadə edərək müxtəlif ölçü və formalarda şriftlər kolleksiyası yaratdı və öz nümunələrini çap elədi.
                </small>
                <div className="social-links w-100">
                  <a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}><Fa icon="facebook-f" /></a>
                  <a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}><Fa icon="twitter" /></a>
                  <a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}><Fa icon="youtube" /></a>
                </div>
              </div>
              <div className="col-12 col-md-4 col-xl-2 d-none d-md-flex flex-column align-items-center">
                <span className="footer-heading font-28 font-weight-bold my-2 my-md-3 pb-3">QISA KEÇİDLƏR</span>
                <ul className="px-1">
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>BİOQRAFİYA</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>MEDİA</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>QALEREYA</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>BLOQ</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>ƏLAQƏ</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center mt-2 mt-md-4 mt-xl-0">
                <span className="footer-heading font-28 font-weight-bold my-2 my-md-3 pb-3">SON MƏQALƏLƏR</span>
                <div className="footer-art-wrap d-flex w-100">
                  <img src={require('../../lib/images/article3.jpg')} alt="" className="img-fluid footer-art-img" />
                  <div className="d-flex flex-column w-100 ml-2">
                    <span className="footer-art-name font-weight-bold" style={{ color: '#00D2D3' }}>Numune meqale</span>
                    <small className="font-12">Lorem İpsum – dizayn nəşrlərində istifadə olunan düzgün olmayan
                      mətndir. Dəqiq quruluşa <a href="#" className="font-weight-bold" style={styles.footerColor}>DEVAMINI OXU ></a>
                    </small>
                  </div>
                </div>
                <div className="footer-art-wrap d-flex w-100 mt-2 mt-xl-4">
                  <img src={require('../../lib/images/article3.jpg')} alt="" className="img-fluid footer-art-img" />
                  <div className="d-flex flex-column w-100 ml-2">
                    <span className="footer-art-name font-weight-bold" style={{ color: '#00D2D3' }}>Numune meqale</span>
                    <small className="font-12">Lorem İpsum – dizayn nəşrlərində istifadə olunan düzgün olmayan
                      mətndir. Dəqiq quruluşa <a href="#" className="font-weight-bold" style={styles.footerColor}>DEVAMINI OXU ></a>
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-xl-3 d-flex flex-column align-items-center mt-2 mt-md-4 mt-xl-0">
                <span className="footer-heading font-28 font-weight-bold my-2 my-md-3 pb-3 text-center">ƏLAQƏ MƏLUMATLARI</span>
                <div className="d-flex flex-column w-100">
                  <div className="add-phone d-flex align-items-center add-info-wrap pb-2">
                    <span className="footer-add-icon mr-2 mr-xl-3"><Fa icon="phone" /></span>
                    <div className="add-nums d-flex flex-xl-column">
                      <a href="tel:994127654321" className="footer-color mr-3 mr-xl-0">+994 12 7654321</a>
                      <a href="tel:994557654321" className="footer-color">+994 55 7654321</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column mt-2 w-100">
                  <div className="add-phone d-flex align-items-center add-info-wrap pb-2">
                    <span className="footer-add-icon mr-2 mr-xl-3"><Fa icon="envelope-o" /></span>
                    <div className="add-nums d-flex align-items-center justify-content-center">
                      <a href="mailto:info@fermanhesenov.az" className="footer-color">
                        <small>info@fermanhesenov.az</small></a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column mt-2 w-100">
                  <div className="add-phone d-flex pb-2 align-items-center w-100">
                    <span className="footer-add-icon mr-3 mr-xl-4"><Fa icon="map-marker" /></span>
                    <div className="add-nums d-flex">
                      <a href="#" className="footer-color">
                        <small>kademik Mirəsədulla <br/>Mirqasımov, 1</small></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={styles.bg2}>
          <div className="col-12 col-md-10 text-left p-2 px-md-3 d-flex align-items-center" style={styles.footerColor}>
            <small className="ml-2 ml-md-0">2018 © Dr.Fərman Hüseynov. Bütün hüquqları qorunur.</small>
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

export default Footer;