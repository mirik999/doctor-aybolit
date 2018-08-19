import React, {PureComponent} from 'react';
import ProgressiveImage from 'react-progressive-image';
//user components
import IronImage from '../MainComponents/IronImage';


class DoctorIndexImage extends PureComponent {
  render() {
    const { txt } = this.props;

    // const img = 'https://res.cloudinary.com/fermanhesenov-az/image/upload/v1534601340/Doctor.jpg';
    // const imgSmall = 'http://res.cloudinary.com/fermanhesenov-az/image/upload/c_scale,h_100,w_200/v1534601340/Doctor.jpg';

    return (
      <div className="row">
        <div className="col-12 p-0 position-relative">
          <ProgressiveImage src={require('../../lib/images/Doctor.jpg')} placeholder={require('../../lib/images/Doctor-mini.jpg')}>
            { (src, loading, placeholder) => <img src={src} alt="Doctor" className="img-fluid doctors-cover-img" /> }
          </ProgressiveImage>
          <div className="doctors-info d-flex flex-column">
            <span className="doctors-name font-64 mb-1 mb-md-0">Dr.Fərman Həsənov</span>
            <div className="doctors-pros-wrap mt-1 mt-sm-3 mt-md-4 d-flex flex-column font-28-fix p-lg-2 font-weight-light">
              <span className="doctors-prof">{ txt.doctorProf1 }</span>
              <span className="doctors-prof">{ txt.doctorProf2 }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorIndexImage;