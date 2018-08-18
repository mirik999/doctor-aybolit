import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
//user components
import Wrapper from '../MainComponents/Wrapper';
import Articles from './Articles';
//actions
import { setlocale } from "../../Actions/locale";
//css
import './ArticlesPage.css';



class ArticlesPage extends PureComponent {
  constructor(props) {
    super(props);

    this.txt = {
      readmore: <FormattedMessage id="main.readmore" />
    }
  }

  render() {
    const { lang } = this.props;

    return (
      <Wrapper>
        <Articles lang={lang} txt={this.txt} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  }
}


export default connect(mapStateToProps, { setlocale })(ArticlesPage);