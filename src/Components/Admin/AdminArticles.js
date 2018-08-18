import React, {PureComponent, Fragment} from 'react';
import sha1 from 'sha1';
import superagent from 'superagent';
import Dropzone from 'react-dropzone';
import NProgress from 'nprogress';
import { ToastContainer, toast } from 'react-toastify';
import classNames from "classnames";
//api requests
import api from '../../api';


class AdminArticles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      currentPage: 1,
      articlesPerPage: 3,
      data: {
        artTitle: '',
        artThumbnail: '',
        artThumbnailSmall: '',
        artText: ''
      },
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = async () => {
    const articles = await api.admin.getArticles(this.state.data);
    this.setState({ articles })
  };

  async componentDidMount() {
    this.fetchData();
  }

  onChange = (e) => {
    this.setState({ ...this.state, data: { ...this.state.data, [e.target.name] : e.target.value } })
  };

  onClick = async () => {
    const { data, errors }  = this.state;
    if (data.artTitle === '' || data.artText === '' || data.artThumbnail === '') {
      return toast.error('Bosh saxlamaq olmaz')
    }
    await api.admin.addArticle(this.state.data).then(res => this.fetchData() );
    this.setState({ ...this.state, data: { artTitle: '', artText: '', artThumbnail: '' } })
  };

  onDelete = (id) => {
    api.admin.delArticle(id).then(res => this.fetchData() )
  };

  uploadFile = (files) => {
    NProgress.start();
    const image = files[0];
    const cloudName = 'fermanhesenov-az'; // cloudinary verir
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';
    const timestamp = Date.now()/1000;
    const uploadPreset = 'flkykn9t';
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'ecE6cx-_Z6YOSa3dkABFkwy4NFc';
    const signature = sha1(paramsStr);
    const params = {
      'api_key': '723862535889332',
      'timestamp' : timestamp,
      'upload_preset' : uploadPreset,
      'signature' : signature,
      'secure': true
    };

    let uploadRequest = superagent.post(url);
    uploadRequest.attach('file', image);

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    });

    uploadRequest.end((err, res) => {
      if (err) {
        NProgress.done();
        return this.setState({ errors: { image: "error" } })
      }
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          artThumbnail: res.body.secure_url,
          artThumbnailSmall: res.body.secure_url.replace("/image/upload/", "/image/upload/w_50,h_50/")
        }
      }, () => NProgress.done())
    })
  };

  handlePageClick = (event) => {
    event.preventDefault();

    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { articles, data, currentPage, articlesPerPage } = this.state;

    const indexOfLastTodo = currentPage * articlesPerPage;
    const indexOfFirstTodo = indexOfLastTodo - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstTodo, indexOfLastTodo);

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
      <div className="white-fon row justify-content-center align-items-center m-5 p-3">
        <div className="col-12 col-lg-6 d-flex justify-content-between align-items-center">
          <small className="mr-2" style={{ minWidth: '100px' }}>Şəkil yüklə: </small>
          <Dropzone
            className="admin-dropzone position-relative w-100"
            onDrop={this.uploadFile}
            maxSize={3240000}
            multiple={false}>
            <input type="text" className="photo-url-inp" disabled={true} value={data.artThumbnail} />
            <button type="button" className="photo-gallery-btn">Faylı seç</button>
          </Dropzone>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-between align-items-center mt-4 mt-lg-0">
          <small className="mr-2" style={{ minWidth: '140px' }}>Başlığ:</small>
          <input type="text" className="photo-title" name="artTitle" placeholder="Başlığı daxil edin"
                 onChange={this.onChange} value={data.artTitle}
          />
        </div>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center py-4 position-relative border-bottom">
          <div className="d-flex justify-content-start align-items-center w-100">
            <small className="mr-2" style={{ minWidth: '100px' }}>Məqalə:</small>
            <textarea type="text" className="photo-title" placeholder="Mətn daxil edin" name="artText"
                      onChange={this.onChange} value={data.artText} rows="10">
            </textarea>
          </div>
          <div className="d-flex justify-content-end align-items-center w-100">
            <button type="button" className="article-add-btn mt-4" onClick={this.onClick}>Əlavə et</button>
          </div>
        </div>
        {/* items */}
        <div className="d-flex flex-column">
          <table className="admin-gl-table" border="1">
            <thead>
            <tr>
              <td><small>№</small></td>
              <td><small>MƏQALƏ BAŞLIĞI</small></td>
              <td><small>MƏQALƏ MƏTNİ</small></td>
              <td><small>SEÇİMLƏR</small></td>
            </tr>
            </thead>
            <tbody>
            {
              currentArticles.map((art, idx ) => {
                return(
                  <tr key={idx} style={{ maxHeight: '200px', overflow: 'auto' }}>
                    <td><small>{ idx + 1 }</small></td>
                    <td><small>{ art.artTitle }</small></td>
                    <td className="art-text-admin"><small>{ art.artText }</small></td>
                    <td><button type="button" onClick={() => this.onDelete(art._id)} className="admin-photo-del-btn">Sil</button></td>
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


export default AdminArticles;