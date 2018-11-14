import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Bio from './Bio';
import Sertificats from '../IndexPage/Sertificats';
import BioArticle from './BioArticle';
//actions
import { setlocale } from "../../Actions/locale";
//css
import './BiographyPage.css';


class BiographyPage extends PureComponent {
  constructor(props) {
    super(props);

    this.txt = {
      doctorProf: <FormattedMessage id="main.doctor-prof" />,
      bioFHt: <FormattedMessage id="bioFH-t" />,
      bioFHb: <FormattedMessage id="bioFH-b" />,
      doctorName: <FormattedMessage id="main.doctor.name" />,
    }
  }

  render() {
    const { lang } = this.props;

    return (
      <Wrapper>
        <Bio lang={lang} txt={this.txt} />
        <Sertificats />
        <BioArticle lang={lang} txt={this.txt} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale })(BiographyPage);