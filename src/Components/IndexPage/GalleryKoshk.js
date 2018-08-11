import React, {Component, Fragment} from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Fa } from 'mdbreact';
import _ from 'lodash';
import Lightbox from 'react-images';
//api
import { galleryData, articlesData } from '../../data';


const owlResponsiveSecond = {
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
  }
};

const owlResponsiveThird = {
  0 : {
    items: 1,
    nav:false,
  },
  700 : {
    items: 2,
    nav:false,
  },
  990 : {
    items: 1,
    nav:false,
  },
};

const owlResponsiveFourth = {
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
  }
};

class GalleryKoshk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      gallery: [],
      isOpen: false,
      currentImage: 0
    }
  }

  componentDidMount() {
    this.setState({ gallery: galleryData, articles: articlesData })
  }

  openLightbox = (num) => {
    this.setState({ isOpen: true, currentImage: num - 1})
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
    const { gallery, articles } = this.state;

    if (gallery.length === 0 && articles.length === 0) return <div></div>

    return (
      <div className="row justify-content-center py-2 py-md-5">
        <div className="col-12 col-lg-5 border-right">
          <div className="py-2 border-bottom text-left position-relative">
            <span className="font-32 text-color">Qalereya</span>
          </div>
          <OwlCarousel
            className="owl-second owl-theme pt-2 pb-2"
            controlsClass="position-relative"
            responsive={owlResponsiveSecond}
            navContainerClass='doctors-gallery'
            navClass={['owl-g-prev', 'owl-g-next']}
            navText={[]}
            dots={false}
            loop
          >
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={gallery[0].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[0].id)}
              />
              <img src={gallery[1].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[1].id)}
              />
              <img src={gallery[2].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[2].id)}
              />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={gallery[3].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[3].id)}
              />
              <img src={gallery[4].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[4].id)}
              />
              <img src={gallery[5].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[5].id)}
              />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={gallery[6].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[6].id)}
              />
              <img src={gallery[7].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[7].id)}
              />
              <img src={gallery[8].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[8].id)}
              />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={gallery[9].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[9].id)}
              />
              <img src={gallery[10].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[10].id)}
              />
              <img src={gallery[11].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(gallery[11].id)}
              />
            </div>
          </OwlCarousel>
        </div>
        {/* ----------------- second owl -------------- */}
        <div className="col-12 col-lg-5">
          <div className="py-2 border-bottom text-left position-relative">
            <span className="font-32 text-color">Sözlər köşkü</span>
          </div>
          <OwlCarousel
            className="owl-second owl-theme pt-2 pb-2 d-flex justify-content-center"
            controlsClass="position-relative"
            responsive={owlResponsiveThird}
            navContainerClass='doctors-gallery'
            navClass={['owl-g-prev', 'owl-g-next']}
            navText={[]}
            dots={false}
          >
            <div className="m-1 d-flex flex-column align-items-center justify-content-center">
              <div className="koshk-wrap d-flex align-items-center justify-content-center position-relative">
                <span className="font-weight-bold">
                  Lorem İpsum – dizayn nəşrlərində istifadə olunan düzgün olmayan mətndir. Dəqiq quruluşa malik
                  olmayan bu mətn latincada hələ XVI əsrdə öz qəlib formasını almışdır.
                </span>
                <span className="koshk-quote-left"><Fa icon="quote-left" /></span>
                <span className="koshk-quote-right"><Fa icon="quote-right" /></span>
              </div>
              <div className="d-flex align-items-center justify-content-end w-100">
                <div className="koshk-info d-flex flex-column align-items-end mr-3">
                  <span className="font-18 font-weight-bold">NÜMUNƏ KİTAB</span>
                  <small className="text-secondary">5-ci səhifə, Lorem Ipsum, 2-ci paraqraf</small>
                </div>
                <div className="koshk-book mt-2 mt-md-3">
                  <img src={require('../../lib/images/book.png')} alt="koshk-book" className="img-fluid koshk-book" />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
        {/*------------- third owl ------------- */}
        <div className="col-12 col-md-10 d-flex flex-column align-items-center">
          <div className="text-left position-relative text-center py-2 mt-5 border-bottom w-50">
            <span className="font-32 text-color m-2 m-md-3">Məqalələr</span>
          </div>
          <OwlCarousel
            className="owl-fifth owl-theme pt-2 pb-2 d-flex justify-content-center position-relative"
            controlsClass="position-relative"
            responsive={owlResponsiveFourth}
            navContainerClass='doctors-articles'
            navClass={['owl-m-prev', 'owl-m-next']}
            navText={[]}
            dots={false}
            loop
          >
            {
              articles.map((art, idx) =>
                <div className="art-card-wrap d-flex flex-column align-items-center justify-content-center mx-4 my-3" key={idx}>
                  <img src={art.img} alt="article2" className="img-fluid art-img" />
                  <div className="art-info-wrap p-2 p-md-3 d-flex flex-column justify-content-between align-items-start">
                    <div className="my-2 my-md-3 text-left w-100 art-header">{ _.truncate(art.title, { 'length': 45 }) }</div>
                    <small className="my-2 text-color text-justify art-mini-desc">
                      {_.truncate(art.text, { 'length': 120 }).replace(/<\/?[^>]+>/g,'').replace('&nbsp;', ' ')}
                    </small>
                    <a href="#" className="border my-2 mt-md-4 px-2 py-1 text-color cursor-pointer font-weight-bold">DƏVAMINI OXU</a>
                  </div>
                </div>
              )
            }
          </OwlCarousel>
        </div>
        <Lightbox
          images={gallery}
          currentImage={this.state.currentImage}
          isOpen={this.state.isOpen}
          onClickPrev={this.gotoPrevLightboxImage}
          onClickNext={this.gotoNextLightboxImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}


export default GalleryKoshk;