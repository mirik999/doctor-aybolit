import React, {PureComponent, Fragment} from 'react';
import Dropzone from 'react-dropzone';
import NProgress from 'nprogress';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import classNames from "classnames";
//api requests
import api from '../../api';

const options = [
  { value: 'book1', label: 'KÖNÜL SÖHBƏTİ' },
  { value: 'book2', label: 'BİR ÖMRÜN NƏĞMƏSİ' },
];

const bookImage = {
  imageOne: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534504855/book1.png',
  imageTwo: 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534504861/book2.png'
};


class AdminQuotes extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      currentPage: 1,
      quotesPerPage: 5,
      data: {
        book: '',
        bookPage: '',
        quote: '',
      },
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = async () => {
    const quotes = await api.admin.getQuotes(this.state.data);
    this.setState({ quotes })
  };

  async componentDidMount() {
    this.fetchData();
  }

  onChange = (e) => {
    this.setState({ ...this.state, data: { ...this.state.data, [e.target.name]: e.target.value } })
  };

  onSelect = (e) => {
    this.setState({ ...this.state, data: { 
      ...this.state.data, 
      book: e.value, 
      bookImg:  e.value === 'book1' ? bookImage.imageOne : bookImage.imageTwo
    } })
  };

  onClick = async () => {
    const { data, errors }  = this.state;

    if (data.book === '' || data.bookPage === '' || data.quote === '') {
      return toast.error('Bosh saxlamaq olmaz')
    }
    await api.admin.addQuote(this.state.data).then(res => this.fetchData() );
    this.setState({ ...this.state, data: { book: '', bookPage: '', quote: ''} })
  };

  onDelete = (id) => {
    api.admin.delQuote(id).then(res => this.fetchData() )
  };

  handlePageClick = (event) => {
    event.preventDefault();

    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { quotes, data, currentPage, quotesPerPage } = this.state;

    const indexOfLastTodo = currentPage * quotesPerPage;
    const indexOfFirstTodo = indexOfLastTodo - quotesPerPage;
    const currentQuotes = quotes.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(quotes.length / quotesPerPage); i++) {
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
      <div className="white-fon row justify-content-center align-items-center m-5 p-3">
        <div className="col-12 col-lg-6 d-flex justify-content-between align-items-center">
          <small className="mr-2" style={{ minWidth: '100px' }}>Sitat səhifəsi: </small>
            <input type="text" className="photo-title" value={data.bookPage} placeholder="Səhifə və paraqraf daxil edin"
                   name="bookPage" onChange={this.onChange}
            />
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-between align-items-center mt-4 mt-lg-0">
          <small className="mr-2" style={{ minWidth: '140px' }}>Kitab seç:</small>
          <Select
            options={options}
            className="photo-category-select"
            onChange={this.onSelect}
            defaultValue={data.book}
          />
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center py-4 position-relative border-bottom">
          <small className="mr-2" style={{ minWidth: '100px' }}>Sitat:</small>
          <input type="text" className="photo-title" name="quote" placeholder="Mətn daxil edin"
                 onChange={this.onChange} value={data.quote}
          />
          <button type="button" className="gallery-add-btn" onClick={this.onClick}>Sitat yüklə</button>
        </div>
        {/* items */}
        <div className="d-flex flex-column">
          <table className="admin-gl-table" border="1">
            <thead>
              <tr>
                <td><small>KİTAB</small></td>
                <td><small>SİTAT SƏHİFƏSİ</small></td>
                <td><small>SİTAT</small></td>
                <td><small>SEÇİMLƏR</small></td>
              </tr>
            </thead>
            <tbody>
            {
              currentQuotes.map((quote, idx) => {
                return(
                  <tr key={idx}>
                    <td className="position-relative">
                      <small>{ quote.book === 'book1' ? 'KÖNÜL SÖHBƏTİ' : 'BİR ÖMRÜN NƏĞMƏSİ' }</small><br/>
                    </td>
                    <td><small>{ quote.bookPage }</small></td>
                    <td><small>{ quote.quote }</small></td>
                    <td><button type="button" onClick={() => this.onDelete(quote._id)} className="admin-photo-del-btn">Sil</button></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
          <div className="row justify-content-center my-2 my-md-4">
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}


export default AdminQuotes;