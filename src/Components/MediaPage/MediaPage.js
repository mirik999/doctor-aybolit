import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import VideoPlay from './VideoPlay';
//css
import './MediaPage.css';


class MediaPage extends PureComponent {
  render() {
    return (
      <Wrapper>
        <VideoPlay />
      </Wrapper>
    );
  }
}

export default MediaPage;