import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
//user components
import Wrapper from '../MainComponents/Wrapper';
import VideoPlay from './VideoPlay';
//actions
import { setlocale } from "../../Actions/locale";
//api requests
import api from '../../api';
//css
import './MediaPage.css';


class MediaPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    this.txt = {
      views: <FormattedMessage id="media.views" />,
      watchvideo: <FormattedMessage id="media.watchvideo" />,
      morecontent: <FormattedMessage id="media.morecontent" />,
    }
  }

  async componentDidMount() {
    const videos = await api.admin.getVideos();
    this.setState({ videos })
  }

  render() {
    const { videos } = this.state;
    const { lang } = this.props;

    if (videos.length === 0) return <div style={{ height: '800px' }}></div>;

    return (
      <Wrapper>
        <VideoPlay lang={lang} txt={this.txt} videos={videos} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale })(MediaPage);