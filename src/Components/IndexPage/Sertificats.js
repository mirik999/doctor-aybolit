import React, {PureComponent} from 'react';
import OwlCarousel from 'react-owl-carousel';
import ProgressiveImage from 'react-progressive-image';
//user components
import Lightbox from 'react-images';

const sert = [
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503590/1.png',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503590/1.png'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503588/2.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503588/2.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503587/3.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503587/3.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503575/4.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503575/4.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503574/5.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503574/5.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/6.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/6.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/7.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/7.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/8.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/8.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/9.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/9.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/10.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/10.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/11.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/11.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/12.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/12.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/13.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/13.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/14.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/14.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/15.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/15.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/16.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/16.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/17.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/17.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/18.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/18.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/19.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/19.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/20.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/20.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/21.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/21.jpg'
  },{
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/22.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/22.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/23.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/23.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/24.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/24.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/25.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/25.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/26.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/26.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/27.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/27.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/28.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/28.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/29.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/29.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/30.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/30.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/31.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/31.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/32.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/32.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/33.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/33.jpg'
  },
  {
    src: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534503550/34.jpg',
    srcSmall: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_50,w_50/v1534503550/34.jpg'
  }
];


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
            loop
            autoplay={true}
          >
            {
              sertificats.map((sert, idx) => {
                return(
                  <ProgressiveImage src={sert.src} placeholder={sert.srcSmall} key={idx}>
                    { (src, loading, placeholder) => <img src={src} alt="Doctor" className="doctors-sert mx-auto" onClick={() => this.openLightbox(idx)} /> }
                  </ProgressiveImage>
                )
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