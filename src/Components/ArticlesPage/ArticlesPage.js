import React, {PureComponent, Fragment} from 'react';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Articles from './Articles';
//css
import './ArticlesPage.css';


class ArticlesPage extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Articles />
      </Wrapper>
    );
  }
}

export default ArticlesPage;