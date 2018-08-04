import React, {PureComponent} from 'react';
import OwlCarousel from 'react-owl-carousel';


const owlResponsiveFirst = {
  0 : {
    items: 1,
    nav:false,
  },
  // breakpoint from 480 up
  660 : {
    items: 2,
    nav:false,
  },
  // breakpoint from 768 up
  1100 : {
    items: 3,
    nav:false,
  },
  1400 : {
    items: 4,
    nav:false,
  },
  1700 : {
    items: 5,
    nav:false,
  }
};

class Sertificats extends PureComponent {
  render() {
    return (
      <div className="row justify-content-center p-2 p-md-5" style={styles.bg}>
        <div className="col-12">
          <OwlCarousel
            className="owl-first owl-theme"
            loop={true}
            controlsClass="position-relative"
            responsive={owlResponsiveFirst}
            autoplay
            dots={false}
          >
            <img src={require('../../lib/images/sert1.jpg')} alt="sertifikat-1" className="doctors-sert mx-auto" />
            <img src={require('../../lib/images/sert2.jpg')} alt="sertifikat-2" className="doctors-sert mx-auto" />
            <img src={require('../../lib/images/sert3.jpg')} alt="sertifikat-3" className="doctors-sert mx-auto" />
            <img src={require('../../lib/images/sert4.jpg')} alt="sertifikat-4" className="doctors-sert mx-auto" />
            <img src={require('../../lib/images/sert4.jpg')} alt="sertifikat-4" className="doctors-sert mx-auto" />
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

const styles = {
  bg: {
    background: "linear-gradient(#01A3A4, #00D2D3)"
  }
};

export default Sertificats;