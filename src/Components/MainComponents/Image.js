import React, {PureComponent} from 'react';
import Lightbox from 'react-images';

class Image extends PureComponent {
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
    const { images } = this.props;
    return (
      <Lightbox
        images={images}
        currentImage={this.state.currentImage}
        isOpen={this.state.isOpen}
        onClickPrev={this.gotoPrevLightboxImage}
        onClickNext={this.gotoNextLightboxImage}
        onClose={this.closeLightbox}
      />
    );
  }
}

export default Image;