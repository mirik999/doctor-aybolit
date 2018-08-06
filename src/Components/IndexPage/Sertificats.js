import React, {PureComponent} from 'react';
import OwlCarousel from 'react-owl-carousel';
//user components
import Lightbox from 'react-images';


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

const sertImages = [
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1533465144/sert1.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1533465581/sert3.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1533465581/sert2.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1533465582/sert4.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1533465581/sert2.jpg'
  },
];

class Sertificats extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currentImage: 0
    }
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
              sertImages.map((sert, idx) => {
                return(  <img src={sert.src} alt="sertifikat-1"
                              key={idx}
                              className="doctors-sert mx-auto" onClick={() => this.openLightbox(idx)}/> )
              })
            }
          </OwlCarousel>
        </div>
        <Lightbox
          images={sertImages}
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