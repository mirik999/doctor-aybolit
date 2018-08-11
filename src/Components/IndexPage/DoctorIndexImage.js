import React, {PureComponent} from 'react';
import ProgressiveImage from 'react-progressive-image';


class DoctorIndexImage extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-12 p-0 position-relative">
          <ProgressiveImage src={require('../../lib/images/Doctor.jpg')} placeholder={require('../../lib/images/Doctor-mini.jpg')}>
            { (src, loading, placeholder) => <img src={src} alt="Doctor" className="img-fluid doctors-cover-img" /> }
          </ProgressiveImage>
          <div className="doctors-info d-flex flex-column">
            <span className="doctors-name font-64 mb-1 mb-md-0">Dr.Fərman Həsənov</span>
            <div className="mt-1 mt-sm-3 mt-md-4">
              <span className="doctors-prof font-28-fix">Ağız və üz-çənə cərrahı</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorIndexImage;