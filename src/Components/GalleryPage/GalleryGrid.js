import React, {PureComponent, Fragment} from 'react';
import classNames from 'classnames';
import ShowMore from '@tedconf/react-show-more';
import Lightbox from 'react-images';
//api
// import { galleryData } from '../../data';

class GalleryGrid extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      galleryCategory: 'global',
      gallery: props.photos,
      isOpen: false,
      currentImage: 0
    };

    this.onCategory = this.onCategory.bind(this);
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

  onCategory = (category) => {
    this.setState({ galleryCategory: category })
  };

  render() {
    const { gallery, galleryCategory } = this.state;
    const { txt } = this.props;

    return (
      <Fragment>
        <div className="row justify-content-center border-top">
          <div className="col-12 col-md-10 mt-5">
            <div className="row justify-content-center">
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'global',
                  "gallery-btns-active": galleryCategory === 'global',
                })} onClick={() => this.onCategory('global')}>{ txt.global }</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'collective',
                  "gallery-btns-active": galleryCategory === 'collective',
                })} onClick={() => this.onCategory('collective')}>{ txt.collective }</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'procedure',
                  "gallery-btns-active": galleryCategory === 'procedure',
                })} onClick={() => this.onCategory('procedure')}>{ txt.procedure }</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'drugs',
                  "gallery-btns-active": galleryCategory === 'drugs',
                })} onClick={() => this.onCategory('drugs')}>{ txt.drugs }</div>
              </div>
              <div className="gallery-btns-wrap p-2 my-2 my-md-0 text-center">
                <div className={classNames({
                  "gallery-btns": galleryCategory !== 'family',
                  "gallery-btns-active": galleryCategory === 'family',
                })} onClick={() => this.onCategory('family')}>{ txt.family }</div>
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
                          current.filter(gal => gal.category == galleryCategory).map((gl, idx) => {
                            return (
                              <img src={gl.src} key={idx} className="gallery-each-img img-fluid m-2" onClick={() => this.openLightbox(idx)} />
                            )
                          })
                        }
                      <div className="row justify-content-center my-4">
                        <button className="video-watch-btn border p-2 my-1 text-color-blue cursor-pointer font-weight-bold"
                                disabled={!onMore} onClick={() => { if (!!onMore) onMore(); }}
                          >
                          { txt.morecontent }
                        </button>
                      </div>
                    </Fragment>
                )}
                  </ShowMore>

          </div>
          <Lightbox
            images={galleryCategory == 'global' ? gallery : gallery.filter(gal => gal.category == galleryCategory)}
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