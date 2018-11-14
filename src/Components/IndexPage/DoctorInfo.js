import React, {PureComponent} from 'react';


class DoctorInfo extends PureComponent {
  render() {
    const { txt } = this.props;

    return (
      <div className="row justify-content-center px-3 px-md-0 pt-2 pt-md-3 pt-xl-5">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <span className="doctors-name-2 font-39 my-1 my-md-2">{ txt.doctorName }</span>
          <span className="doctors-prof-2 font-28 my-1 my-md-3">{ txt.doctorProf }</span>
          <div className="doctors-mini-article my-1 my-md-3">
            <p className="font-16 text-justify">
              { txt.mainFH }
            </p>
            <div className="d-flex justify-content-end">
              <div className="col-4 col-sm-3">
                <img src={require('../../lib/images/signature.svg')} alt="Signature" className="mb-3 mb-md-5 img-fluid doctors-signature" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-md-flex col-md-4 align-items-end justify-content-center">
          <img src={require('../../lib/images/urolog.png')} alt="doctors-photo" className="img-fluid" />
        </div>
      </div>
    );
  }
}

export default DoctorInfo;