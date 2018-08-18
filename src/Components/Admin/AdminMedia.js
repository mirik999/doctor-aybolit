import React, {PureComponent, Fragment} from 'react';
import NProgress from 'nprogress';
import { Modal, ModalBody } from 'mdbreact';
import YouTube from 'react-youtube';
import { ToastContainer, toast } from 'react-toastify';
import classNames from "classnames";
import moment from 'moment';
//api requests
import api from '../../api';


class AdminMedia extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentPage: 1,
      videosPerPage: 5,
      data: {
        videoID: '',
        videoTitle: '',
        videoDesc: ''
      },
      modal: false,
      modalVideoID: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onModal = this.onModal.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const videos = await api.admin.getVideos(this.state.data);
    this.setState({ videos })
  };

  onModal = (id = '') => {
    this.setState({ modal: !this.state.modal, modalVideoID: id });
  };

  onChange = (e) => {
    this.setState({ ...this.state, data: { ...this.state.data, [e.target.name]: e.target.value } })
  };

  onClick = async () => {
    const { data, errors }  = this.state;

    if (data.videoID === '' || data.videoTitle === '' || data.videoDesc === '') {
      return toast.error('Bosh saxlamaq olmaz')
    }
    await api.admin.addVideo(this.state.data).then(res => this.fetchData() );
    this.setState({ ...this.state, data: { videoID: '', videoTitle: '', videoDesc: ''} })
  };

  onDelete = (id) => {
    api.admin.delVideo(id).then(res => this.fetchData() )
  };

  handlePageClick = (event) => {
    event.preventDefault();

    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { videos, data, currentPage, videosPerPage, modal, modalVideoID } = this.state;

    const indexOfLastTodo = currentPage * videosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(videos.length / videosPerPage); i++) {
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
          <small className="mr-2" style={{ minWidth: '100px' }}>Youtube ID: </small>
          <input type="text" className="photo-title" value={data.videoID} placeholder="Youtube ID daxil edin"
                 name="videoID" onChange={this.onChange}
          />
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-between align-items-center mt-4 mt-lg-0">
          <small className="mr-2" style={{ minWidth: '140px' }}>Video başlığı:</small>
          <input type="text" className="photo-title" value={data.videoTitle} placeholder="Başlığı daxil edin"
                 name="videoTitle" onChange={this.onChange}
          />
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center py-4 position-relative border-bottom">
          <small className="mr-2" style={{ minWidth: '100px' }}>Video təsviri:</small>
          <input type="text" className="photo-title" name="videoDesc" placeholder="Mətn daxil edin"
                 onChange={this.onChange} value={data.videoDesc}
          />
          <button type="button" className="gallery-add-btn" onClick={this.onClick}>Video yüklə</button>
        </div>
        {/* items */}
        <div className="d-flex flex-column">
          <table className="admin-gl-table" border="1">
            <thead>
            <tr>
              <td><small>YOUTUBE ID</small></td>
              <td><small>VIDEO BAŞLIĞI</small></td>
              <td><small>VIDEO BAŞLIĞI</small></td>
              <td><small>SEÇİMLƏR</small></td>
            </tr>
            </thead>
            <tbody>
            {
              currentVideos.map((vd, idx) => {
                return(
                  <tr key={idx}>
                    <td className="position-relative text-center cursor-pointer" onClick={() => this.onModal(vd.videoID)}>
                      <small>Video # <br/> { vd.videoID }</small><br/>
                    </td>
                    <td><small>{ vd.videoTitle }</small></td>
                    <td><small>{ vd.videoDesc }</small></td>
                    <td><button type="button" onClick={() => this.onDelete(vd._id)} className="admin-photo-del-btn">Sil</button></td>
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
        <Modal isOpen={modal} toggle={() => this.onModal()}>
          <ModalBody>
            <YouTube
              id={modalVideoID}
              videoId={modalVideoID}
              containerClassName="video-container-in-modal"
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


export default AdminMedia;