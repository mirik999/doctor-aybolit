import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import GalleryGrid from './GalleryGrid';
//css
import './GalleryPage.css';


class GalleryPage extends PureComponent {
  render() {
    return (
      <Wrapper>
        <GalleryGrid />
      </Wrapper>
    );
  }
}

export default GalleryPage;