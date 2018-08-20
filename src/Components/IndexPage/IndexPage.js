import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
//user components
import Wrapper from '../MainComponents/Wrapper';
import DoctorIndexImage from './DoctorIndexImage';
import DoctorInfo from './DoctorInfo';
import Sertificats from './Sertificats';
import GalleryKoshk from './GalleryKoshk';
//api
import {setlocale} from "../../Actions/locale";
//css
import './IndexPage.css';



class IndexPage extends PureComponent {
  constructor(props) {
    super(props);

    this.txt = {
      doctorProf: <FormattedMessage id="main.doctor-prof" />,
      doctorProf1: <FormattedMessage id="main.doctor-prof-1" />,
      doctorProf2: <FormattedMessage id="main.doctor-prof-2" />,
      gallery: <FormattedMessage id="main.gallery-link" />,
      articles: <FormattedMessage id="main.art-link" />,
      koshk: <FormattedMessage id="main.kosh" />,
      readmore: <FormattedMessage id="main.readmore" />,
      mainFH: <FormattedMessage id="mainFH" />,
    }
  }

	render() {
    const { lang } = this.props;

		return (
			<Wrapper>
        <DoctorIndexImage lang={lang} txt={this.txt} />
        <DoctorInfo lang={lang} txt={this.txt} />
        <Sertificats />
        <GalleryKoshk lang={lang} txt={this.txt} />
      </Wrapper>
		);
	}
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale })(IndexPage);