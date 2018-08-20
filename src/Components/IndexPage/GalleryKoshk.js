import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { Fa } from 'mdbreact';
import _ from 'lodash';
import Lightbox from 'react-images';
import ImageZoom from 'react-medium-image-zoom'
//api requests
import { galleryData, articlesData } from '../../data';
import api from '../../api';


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
    items: 1,
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
  1100 : {
    items: 3,
    nav:false,
  },
  // breakpoint from 768 up
  1500 : {
    items: 4,
    nav:false,
  }
};

const bookImg = {
  book1: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534504861/book2.png',
  book2: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534504855/book1.png'
};

class GalleryKoshk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      gallery: [],
      quotes: [],
      isOpen: false,
      currentImage: 0
    }
  }

  async componentDidMount() {
    const quotes = await api.admin.getQuotes();
    const articles = await api.admin.getArticles();
    const gallery = await api.admin.getPhotos();
    this.setState({ gallery: gallery.reverse().slice(Math.max(gallery.length - 13)), articles, quotes })
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
    const { gallery, articles, quotes } = this.state;
    const { txt } = this.props;

    if (gallery.length === 0 && articles.length === 0) return <div style={{ height: '800px' }}></div>;

    return (
      <div className="row justify-content-center py-2 py-md-5">
        <div className="col-12 col-lg-5 border-right">
          <div className="py-2 border-bottom text-left position-relative">
            <span className="font-32 text-color">{ txt.gallery }</span>
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
                   onClick={() => this.openLightbox(0)}
              />
              <img src={gallery[1].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(1)}
              />
              <img src={gallery[2].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(2)}
              />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={gallery[3].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(3)}
              />
              <img src={gallery[4].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(4)}
              />
              <img src={gallery[5].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(5)}
              />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={gallery[6].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(6)}
              />
              <img src={gallery[7].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(7)}
              />
              <img src={gallery[8].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(8)}
              />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={gallery[9].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(9)}
              />
              <img src={gallery[10].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(10)}
              />
              <img src={gallery[11].src} alt="gallery-1" className="mt-2 gl-image img-fluid"
                   onClick={() => this.openLightbox(11)}
              />
            </div>
          </OwlCarousel>
        </div>
        {/* ----------------- second owl -------------- */}
        <div className="col-12 col-lg-5">
          <div className="py-2 border-bottom text-left position-relative">
            <span className="font-32 text-color">{ txt.koshk }</span>
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
            {
              quotes.map((qt, idx) => {
                return(
                  <div className="m-1 d-flex flex-column align-items-center justify-content-center" key={idx}>
                    <div className="koshk-wrap d-flex align-items-center justify-content-center position-relative">
                      <span className="font-weight-bold fix-quote-height">
                        { qt.quote }
                      </span>
                      <span className="koshk-quote-left"><Fa icon="quote-left" /></span>
                      <span className="koshk-quote-right"><Fa icon="quote-right" /></span>
                    </div>
                    <div className="d-flex align-items-center justify-content-end w-100">
                      <div className="koshk-info d-flex flex-column align-items-end mr-3">
                        <span className="font-18 font-weight-bold">{ qt.book === 'book1' ? 'BİR ÖMRÜN NƏĞMƏSİ' : 'KÖNÜL SÖHBƏTİ' }</span>
                        <small className="text-secondary">{ qt.bookPage }</small>
                      </div>
                      <div className="koshk-book mt-2 mt-md-3">
                        <ImageZoom
                          image={{
                            src: qt.src ,
                            alt: 'kitab',
                            className: 'img-fluid koshk-book',
                            style: { cursor: 'pointer' }
                          }}
                          zoomImage={{
                            src: qt.src,
                            alt: 'Kitab'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </OwlCarousel>
        </div>
        {/*------------- third owl ------------- */}
        <div className="col-12 col-md-10 d-flex flex-column align-items-center">
          <div className="text-left position-relative text-center py-2 mt-5 border-bottom w-50">
            <span className="font-32 text-color m-2 m-md-3">{ txt.articles }</span>
          </div>
          <OwlCarousel
            className="owl-fifth owl-theme p-4"
            controlsClass=""
            responsive={owlResponsiveFourth}
            navContainerClass='d-flex'
            navClass={['owl-m-prev', 'owl-m-next']}
            navText={[]}
            dots={false}
            loop
          >
            {
              articles.map((art, idx) =>
              <div className="art-card-wrap d-flex flex-column align-items-center justify-content-center mx-4 my-3 h-100" key={idx}>
                <img src={art.artThumbnail} alt="article2" className="img-fluid art-card-img" />
                <div className="art-info-wrap p-2 p-md-3 d-flex flex-column justify-content-between align-items-start h-100">
                  <div className="my-2 my-md-3 text-left w-100 art-header text-center">
                    <Link to={`/articles/${art._id}`} className="text-color-blue">{ _.truncate(art.artTitle, { 'length': 35 }) }</Link>
                  </div>
                  <small className="my-2 text-color text-justify art-mini-desc">
                    {_.truncate(art.artText, { 'length': 120 }).replace(/<\/?[^>]+>/g,'').replace('&nbsp;', ' ')}
                  </small>
                  <Link to={`/articles/${art._id}`} className="border mx-auto mt-md-4 px-2 py-1 text-color cursor-pointer font-weight-bold">{ txt.readmore }</Link>
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

