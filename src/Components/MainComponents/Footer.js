import React, {PureComponent} from 'react';
import { Fa } from 'mdbreact';
//user components
import Wrapper from './Wrapper.js';


class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div className="row justify-content-center" style={styles.bg1}>
          <div className="col-12 col-md-10 p-3 py-md-5">
            <div className="row justify-content-center" style={styles.footerColor}>
              <div className="col-10 col-sm-8 col-xl-5 d-flex flex-column align-items-center">
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
              <div className="d-none col-md-6 col-xl-3 d-md-flex flex-column align-items-center">
                <span className="footer-heading font-28 font-weight-bold my-2 my-md-3 pb-3">QISA KEÇİDLƏR</span>
                <ul className="px-1">
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>BİOQRAFİYA</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>MEDİA</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>QALEREYA</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>BLOQ</a></li>
                  <li><a href="#" className="mr-2 cursor-pointer font-16" style={styles.footerColor}>ƏLAQƏ</a></li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center">
                <span className="footer-heading font-28 font-weight-bold my-2 my-md-3 pb-3">SON MƏQALƏLƏR</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center" style={styles.bg2}>
          <div className="col-12 col-md-10 text-left p-2 px-md-3" style={styles.footerColor}>
            <small className="ml-2 ml-md-0">2018 © Dr.Fərman Hüseynov. Bütün hüquqları qorunur.</small>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const styles = {
  bg1: {
    backgroundColor: '#2D3436'
  },
  bg2: {
    backgroundColor: '#232829'
  },
  footerColor: {
    color: '#DFE6E9'
  }
};

export default Footer;