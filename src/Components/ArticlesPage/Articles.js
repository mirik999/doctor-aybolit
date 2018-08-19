import React, {PureComponent, Fragment} from 'react';
import { Link } from 'react-router-dom';
import _ from "lodash";
import classNames from 'classnames';
//api
import api from '../../api';


class Articles extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentPage: 1,
      articlesPerPage: 9
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  async componentDidMount() {
    const articles = await api.admin.getArticles();
    this.setState({ articles })
  }

  handlePageClick = (event) => {
    event.preventDefault();

    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { articles, currentPage, articlesPerPage } = this.state;
    const { txt } = this.props;

    if (articles.length === 0) return <div style={{ height: '800px' }}></div>;

    const indexOfLastTodo = currentPage * articlesPerPage;
    const indexOfFirstTodo = indexOfLastTodo - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderArticles = currentArticles.map((art, idx) =>
      <div className="article-card-wrap d-flex flex-column align-items-center justify-content-center m-3" key={idx}>
        <img src={art.artThumbnail} alt="article2" className="img-fluid article-img" />
        <div className="art-info-wrap p-2 p-md-3 d-flex flex-column justify-content-between align-items-start">
          <div className="my-2 my-md-3 text-left w-100 art-header">
            <Link to={`/articles/${art._id}`} className="text-color-blue">{ _.truncate(art.artTitle, { 'length': 45 }) }</Link>
          </div>
          <small className="my-2 text-color text-justify art-mini-desc">
            {_.truncate(art.artText, { 'length': 120 }).replace(/<\/?[^>]+>/g,'').replace('&nbsp;', ' ')}
          </small>
          <Link to={`/articles/${art._id}`} className="border my-2 mt-md-4 px-2 py-1 text-color cursor-pointer font-weight-bold">{txt.readmore}</Link>
        </div>
      </div>
    );

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number, idx) => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handlePageClick}
          className={classNames({
            "pg-num": currentPage !== number,
            "pg-num-active": currentPage === number,
          })}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10 mt-4">
          <div className="row justify-content-center align-items-center">
            { renderArticles }
          </div>
          <div className="row justify-content-center my-2 my-md-4">
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Articles;