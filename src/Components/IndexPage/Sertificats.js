import React, {PureComponent} from 'react';
import OwlCarousel from 'react-owl-carousel';
//user components
import Lightbox from 'react-images';
import { sert } from '../../data';


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
  860 : {
    items: 3,
    nav:false,
  },
  // breakpoint from 768 up
  1150 : {
    items: 4,
    nav:false,
  },
  1700 : {
    items: 5,
    nav:false,
  }
};

class Sertificats extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sertificats: [],
      isOpen: false,
      currentImage: 0
    }
  }

  componentDidMount() {
    this.setState({ sertificats: sert })
  }

  openLightbox = (num) => {
    this.setState({ isOpen: true, currentImage: num })
  };

  gotoPrevLightboxImage = () => {
    this.setState({ currentImage: this.state.currentImage - 1 })
  };

  gotoNextLightboxImage = () => {
    this.setState({ currentImage: this.state.currentImage + 1 })
  };

  closeLightbox = () => {
    this.setState({ isOpen: false })
  };

  render() {
    const { sertificats } = this.state;

    if (sertificats.length === 0) return <div></div>

    return (
      <div className="row justify-content-center p-2 p-md-5" style={styles.bg}>
        <div className="col-12">
          <OwlCarousel
            className="owl-first owl-theme"
            controlsClass="position-relative"
            responsive={owlResponsiveFirst}
            dots={false}
          >
            {
              sertificats.map((sert, idx) => {
                return(  <img src={sert.src} alt="sertifikat-1"
                              key={idx}
                              className="doctors-sert mx-auto" onClick={() => this.openLightbox(idx)}/> )
              })
            }
          </OwlCarousel>
        </div>
        <Lightbox
          images={sertificats}
          currentImage={this.state.currentImage}
          isOpen={this.state.isOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
};

const styles = {
  bg: {
    background: "linear-gradient(#01A3A4, #00D2D3)"
  }
};

export default Sertificats;