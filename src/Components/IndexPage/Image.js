import React, {PureComponent} from 'react';


class Image extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-12 p-0 position-relative">
          <img src={require('../../lib/images/Doctor.jpg')} alt="Doctor" className="img-fluid doctors-cover-img" />
          <div className="doctors-info d-flex flex-column">
            <span className="doctors-name font-64">Dr.Fərman Həsənov</span>
            <div className="mt-1 mt-sm-3 mt-md-4">
              <span className="doctors-prof font-39">Ağız və üz-çənə cərrahı</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;