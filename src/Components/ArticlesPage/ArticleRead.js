import React, {PureComponent, Fragment} from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, GooglePlusShareButton, GooglePlusIcon } from 'react-share';
import Helmet from 'react-helmet';
//api
import api from '../../api';


class ArticleRead extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
  }

  async componentDidMount() {
    const artID = await this.props.match.params.id;
    const articles = await api.admin.getArticles();
    const article = articles.filter(art => art._id == artID).reduce((result, item, index) => {
      result[index] = item;
      return result[0];
    }, {});
    this.setState({ article });
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      top: 0
    })
  }

  render() {
    const { article } = this.state;

    const artID = this.props.match.params.id;

    if (Object.keys(article).length === 0) return <div style={{ height: '800px' }}></div>;

    return (
      <Fragment>
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image" content={article.artThumbnail} itemProp="image" />
          <meta property="twitter:image" content={article.artThumbnail} itemProp="image" />
        </Helmet>
        <div className="row justify-content-center border-top">
          <div className="col-12 col-md-10 my-4 py-4 border-bottom">
            <div className="article-read-wrap w-100">
              <div className="article-read-text">
                <img src={article.artThumbnail} alt="article-image" className="article-read-image" />
                <span className="text-color-blue font-22 font-weight-bold">{ article.artTitle }</span><br/><br/>
                <p className="text-justify font-16"> { article.artText } </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 d-flex justify-content-end mb-4">
            <div className="mx-2">
              <FacebookShareButton
                url={`www.fermanhesenov.az/articles/${artID}`}
                quote={article.artTitle}
                className="share-btn">
                <FacebookIcon
                  size={32}
                  round />
              </FacebookShareButton>
            </div>
            <div className="mx-2">
              <TwitterShareButton
                url={`www.fermanhesenov.az/articles/${artID}`}
                title={article.artTitle}
                className="share-btn">
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>
            </div>
            <div className="mx-2">
              <GooglePlusShareButton
                url={`www.fermanhesenov.az/articles/${artID}`}
                className="share-btn">
                <GooglePlusIcon
                  size={32}
                  round />
              </GooglePlusShareButton>
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default ArticleRead;