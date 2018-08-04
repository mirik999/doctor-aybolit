import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Fa } from 'mdbreact';


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
  render() {
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
              <img src={require('../../lib/images/Gallery/img1.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img2.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img3.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={require('../../lib/images/Gallery/img4.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img5.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img6.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={require('../../lib/images/Gallery/img7.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img8.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img9.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
            </div>
            <div className="m-1 d-flex flex-column align-items-center">
              <img src={require('../../lib/images/Gallery/img10.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img11.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
              <img src={require('../../lib/images/Gallery/img3.jpg')} alt="gallery-1" className="mt-2 gl-image img-fluid" />
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
              </div>
              <div className="d-flex align-items-center justify-content-end w-100">
                <div className="koshk-info d-flex flex-column align-items-end">
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
            <div className="art-card-wrap d-flex flex-column align-items-center justify-content-center mx-4 my-3">
              <img src={require('../../lib/images/article1.jpg')} alt="article1" className="img-fluid art-img" />
              <div className="art-info-wrap p-2 p-md-3 d-flex flex-column justify-content-between align-items-center">
                <div className="my-2 my-md-3 text-left w-100">Nümunə məqalə</div>
                <small className="my-2 text-color text-justify">
                  Lorem İpsum – dizayn nəşrlərində istifadə olunan düzgün olmayan mətndir. Dəqiq quruluşa malik olmayan
                  bu mətn latincada hələ XVI əsrdə öz qəlib formasını almışdır.
                </small>
                <a href="#" className="border my-2 p-2 text-color cursor-pointer font-weight-bold">DƏVAMINI OXU</a>
              </div>
            </div>
            <div className="art-card-wrap d-flex flex-column align-items-center justify-content-center mx-4 my-3">
              <img src={require('../../lib/images/article2.jpg')} alt="article2" className="img-fluid art-img" />
              <div className="art-info-wrap p-2 p-md-3 d-flex flex-column justify-content-between align-items-center">
                <div className="my-2 my-md-3 text-left w-100">Nümunə məqalə</div>
                <small className="my-2 text-color text-justify">
                  Lorem İpsum – dizayn nəşrlərində istifadə olunan düzgün olmayan mətndir. Dəqiq quruluşa malik olmayan
                  bu mətn latincada hələ XVI əsrdə öz qəlib formasını almışdır.olunan düzgün olmayan mətndir. Dəqiq quruluşa malik olmayan
                  bu mətn latincada hələ XVI əsrdə öz qəlib formasını almışdır.
                </small>
                <a href="#" className="border my-2 p-2 text-color cursor-pointer font-weight-bold">DƏVAMINI OXU</a>
              </div>
            </div>
            <div className="art-card-wrap d-flex flex-column align-items-center justify-content-center mx-4 my-3">
              <img src={require('../../lib/images/article3.jpg')} alt="article3" className="img-fluid art-img" />
              <div className="art-info-wrap p-2 p-md-3 d-flex flex-column justify-content-between align-items-center">
                <div className="my-2 my-md-3 text-left w-100">Nümunə məqalə</div>
                <small className="my-2 text-color text-justify">
                  Lorem İpsum – dizayn nəşrlərində istifadə olunan düzgün olmayan mətndir.
                </small>
                <a href="#" className="border my-2 p-2 text-color cursor-pointer font-weight-bold">DƏVAMINI OXU</a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}


export default GalleryKoshk;