import React, {PureComponent, Fragment} from 'react';
import Masonry from 'react-masonry-component';
import classNames from 'classnames';
import ShowMore from '@tedconf/react-show-more';
import Lightbox from 'react-images';
//api
import { galleryData } from '../../data';

const masonryOptions = {
  itemSelector: '.gallery-each-img',
  columnWidth: 250,
  percentPosition: true,
  gutter: 10,
  isFitWidth: true,
  stagger: 30
};

class GalleryGrid extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      galleryCategory: 'global',
      gallery: [],
      isOpen: false,
      currentImage: 0
    };

    this.onCategory = this.onCategory.bind(this);
  }

  componentDidMount() {
    this.setState({ gallery: galleryData });
  };

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

  onCategory = (category) => {
    this.setState({ galleryCategory: category })
  };

  render() {
    const { gallery, galleryCategory } = this.state;

    if (gallery.length === 0) return <div></div>;

    return (
      <Fragment>
        <div className="row justify-content-center border-top">
          <div className="col-12 col-md-10 mt-5">
            <div className="row justify-content-center">
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'global',
                  "gallery-btns-active": galleryCategory === 'global',
                })} onClick={() => this.onCategory('global')}>Global</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'colleague',
                  "gallery-btns-active": galleryCategory === 'colleague',
                })} onClick={() => this.onCategory('colleague')}>Collegue</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'procedure',
                  "gallery-btns-active": galleryCategory === 'procedure',
                })} onClick={() => this.onCategory('procedure')}>Procedure</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'drugs',
                  "gallery-btns-active": galleryCategory === 'drugs',
                })} onClick={() => this.onCategory('drugs')}>Drugs</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'walk',
                  "gallery-btns-active": galleryCategory === 'walk',
                })} onClick={() => this.onCategory('walk')}>Walking</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 my-3 text-center">

              <ShowMore
                items={gallery}
                by={12}
              >
                {({
                    current,
                    onMore,
                  }) => (
                    <Fragment>
                        {
                          galleryCategory == 'global' ? current.map((gl, idx) => {
                            return (
                              <img src={gl.src} key={idx} className="gallery-each-img img-fluid m-2" onClick={() => this.openLightbox(idx)} />
                            )
                          }) :
                          current.filter(gal => gal.section == galleryCategory).map((gl, idx) => {
                            return (
                              <img src={gl.src} key={idx} className="gallery-each-img img-fluid m-2" onClick={() => this.openLightbox(idx)} />
                            )
                          })
                        }
                      <div className="row justify-content-center my-4">
                        <button className="video-watch-btn border p-2 my-1 text-color-blue cursor-pointer font-weight-bold"
                                disabled={!onMore} onClick={() => { if (!!onMore) onMore(); }}
                          >
                          DAHA ÇOX GÖSTƏR
                        </button>
                      </div>
                    </Fragment>
                )}
                  </ShowMore>

          </div>
          <Lightbox
            images={galleryCategory == 'global' ? gallery : gallery.filter(gal => gal.section == galleryCategory)}
            currentImage={this.state.currentImage}
            isOpen={this.state.isOpen}
            onClickPrev={this.gotoPrevLightboxImage}
            onClickNext={this.gotoNextLightboxImage}
            onClose={this.closeLightbox}
          />
        </div>
      </Fragment>
    );
  }
}

export default GalleryGrid;