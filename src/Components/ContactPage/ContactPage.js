import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Contact from './Contact';
//actions
import { setlocale } from "../../Actions/locale";
//css
import './ContactPage.css';


class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.txt = {
      adress: <FormattedMessage id="contact.adress" />,
      sendmsg: <FormattedMessage id="contact.sendmsg" />
    }
  }

  render() {
    const { lang } = this.props;

    return (
      <Wrapper>
        <Contact lang={lang} txt={this.txt} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale })(ContactPage);