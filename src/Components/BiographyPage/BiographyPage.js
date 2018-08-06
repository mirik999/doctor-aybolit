import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Bio from './Bio';
import Sertificats from '../IndexPage/Sertificats';
import BioArticle from './BioArticle';
//css
import './BiographyPage.css';


class BiographyPage extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Bio />
        <Sertificats />
        <BioArticle />
      </Wrapper>
    );
  }
}

export default BiographyPage;