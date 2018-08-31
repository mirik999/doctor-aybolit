import React, {PureComponent, Fragment} from 'react';
import sha1 from 'sha1';
import superagent from 'superagent';
import Dropzone from 'react-dropzone';
import NProgress from 'nprogress';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import mediumZoom from 'medium-zoom';
import classNames from "classnames";
//api requests
import api from '../../api';


const options = [
  { value: 'procedure', label: 'Konfranslar' },
  { value: 'collective', label: 'Kollektiv' },
  { value: 'drugs', label: 'Teqdimatlar' },
  { value: 'family', label: 'Ailevi' },
];

class AdminGallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      currentPage: 1,
      photosPerPage: 5,
      data: {
        category: '',
        caption: '',
        src: '',
        srcSmall: ''
      },
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = async () => {
    const photos = await api.admin.getPhotos(this.state.data);
    this.setState({ photos: photos })
  };

  async componentDidMount() {
    this.fetchData();

    mediumZoom('#articleImages', {
      margin: 24,
      background: 'rgba(0, 0, 0, 0.7)',
      scrollOffset: 0,
      metaClick: false,
    });
  }

  onChange = (e) => {
    this.setState({ ...this.state, data: { ...this.state.data, caption: e.target.value } })
  };

  onSelect = (e) => {
    this.setState({ ...this.state, data: { ...this.state.data, category: e.value } })
  };

  onClick = async () => {
    const { data, errors }  = this.state;
    if (data.category === '' || data.caption === '' || data.src === '') {
      return toast.error('Bosh saxlamaq olmaz')
    }
    await api.admin.addPhoto(this.state.data).then(res => this.fetchData() );
    this.setState({ ...this.state, data: { category: '', caption: '', src: '', srcSmall: '' } })
  };

  onDelete = (id) => {
    api.admin.delPhoto(id).then(res => this.fetchData() )
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
          src: res.body.secure_url,
          srcSmall: res.body.secure_url.replace("/image/upload/", "/image/upload/w_50,h_50/")
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
    const { photos, data, currentPage, photosPerPage } = this.state;

    const indexOfLastTodo = currentPage * photosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(photos.length / photosPerPage); i++) {
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
							<input type="text" className="photo-url-inp float-right" disabled={true} value={data.src} />
              <button type="button" className="photo-gallery-btn">Faylı seç</button>
          </Dropzone>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-between align-items-center mt-4 mt-lg-0">
          <small className="mr-2" style={{ minWidth: '140px' }}>
            Şəkil kateqoriyası:
          </small>
          <Select
            options={options}
            className="photo-category-select"
            onChange={this.onSelect}
            defaultValue={data.category}
          />
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center py-4 position-relative border-bottom">
          <small className="mr-2" style={{ minWidth: '100px' }}>Şəkil başlığı:</small>
          <input type="text" className="photo-title" placeholder="Mətn daxil edin" onChange={this.onChange} value={data.caption} />
          <button type="button" className="gallery-add-btn" onClick={this.onClick}>Əlavə et</button>
        </div>
        {/* items */}
        <div className="d-flex flex-column">
          <table className="admin-gl-table" border="1">
            <thead>
              <tr>
                <td><small>ŞƏKİL</small></td>
                <td><small>ŞƏKİL KATEQORİYASI</small></td>
                <td><small>ŞƏKİL BAŞLIĞI</small></td>
                <td><small>SEÇİMLƏR</small></td>
              </tr>
            </thead>
            <tbody>
              {
                currentPhotos.map((photo, idx) => {
                  return(
                    <tr key={idx}>
                      <td><img id="articleImages" src={photo.src} className="admin-gl-mini-images" /></td>
                        <td><small>{ photo.category === 'procedure' ? 'Emeliyyat' :
                          ( photo.category === 'collective' ? 'Kollektiv' :
                            ( photo.category === 'drugs' ? 'Dermanlar' : '' )
                          ) }
                        </small></td>
                      <td><small>{ photo.caption }</small></td>
                      <td><button type="button" onClick={() => this.onDelete(photo._id)} className="admin-photo-del-btn">Sil</button></td>
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


export default AdminGallery;