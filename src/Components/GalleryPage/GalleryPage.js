import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
//user components
import Wrapper from '../MainComponents/Wrapper';
import GalleryGrid from './GalleryGrid';
//actions
import { setlocale } from "../../Actions/locale";
//api requests
import api from '../../api';
//css
import './GalleryPage.css';


class GalleryPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };

    this.txt = {
      global: <FormattedMessage id="gallery.global" />,
      collective: <FormattedMessage id="gallery.collective" />,
      procedure: <FormattedMessage id="gallery.procedure" />,
      drugs: <FormattedMessage id="gallery.drugs" />,
      family: <FormattedMessage id="gallery.family" />,
      morecontent: <FormattedMessage id="media.morecontent" />
    }
  }

  async componentDidMount() {
    const photos = await api.admin.getPhotos();
    this.setState({ photos })
  }

  render() {
    const { photos } = this.state;
    const { lang } = this.props;

    if (photos.length === 0) return <div style={{ height: '800px' }}></div>;

    return (
      <Wrapper>
        <GalleryGrid lang={lang} txt={this.txt} photos={photos} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale })(GalleryPage);