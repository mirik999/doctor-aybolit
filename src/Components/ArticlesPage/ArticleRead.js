import React, {PureComponent, Fragment} from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, GooglePlusShareButton, GooglePlusIcon } from 'react-share';
//api
import { articlesData } from '../../data';


class ArticleRead extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
  }

  async componentDidMount() {
    const artID = await this.props.match.params.id;
    const article = await articlesData.filter(art => art.id == artID).reduce((result, item, index) => {
      result[index] = item;
      return result[0];
    }, {});
    this.setState({ article })
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      top: 0
    })
  }

  render() {
    const { article } = this.state;

    const shareUrl = window.location.href;

    if (Object.keys(article).length === 0) return <div></div>

    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10 my-4 py-4 border-bottom">
          <div className="article-read-wrap w-100">
            <div className="article-read-text">
              <img src={article.img} alt="article-image" className="article-read-image" />
              <span className="text-color-blue font-22 font-weight-bold">{ article.title }</span><br/><br/>
              <p className="text-justify font-16"> { article.text } </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10 d-flex justify-content-end mb-4">
          <div className="mx-2">
            <FacebookShareButton
              url={shareUrl}
              quote={article.title}
              className="share-btn">
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
          </div>
          <div className="mx-2">
            <TwitterShareButton
              url={shareUrl}
              title={article.title}
              className="share-btn">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
          </div>
          <div className="mx-2">
            <GooglePlusShareButton
              url={shareUrl}
              className="share-btn">
              <GooglePlusIcon
                size={32}
                round />
            </GooglePlusShareButton>
          </div>

        </div>
      </div>
    );
  }
}

export default ArticleRead;