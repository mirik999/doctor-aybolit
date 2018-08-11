import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Contact from './Contact';
//css
import './ContactPage.css';


class ContactPage extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Contact />
      </Wrapper>
    );
  }
}

export default ContactPage;