import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Bio from './Bio';
import BlueRow from './BlueRow';
import BioArticle from './BioArticle';
import Serificats from '../IndexPage/Sertificats';
//css
import './BiographyPage.css';


class BiographyPage extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Bio />
        <BlueRow />
        <BioArticle />
        <Serificats />
      </Wrapper>
    );
  }
}

export default BiographyPage;