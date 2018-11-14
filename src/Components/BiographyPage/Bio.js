import React, {PureComponent, Fragment} from 'react';


class Bio extends PureComponent {
  render() {
    const { txt } = this.props;

    return (
      <div className="row justify-content-center border-top">
        <div className="col-12 col-md-10">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 d-flex align-items-start justify-content-center">
              <div className="d-flex flex-column justify-content-center p-2 pb-0 pb-md-4 p-md-4">
                <span className="doctors-name-2 font-39 my-1 my-md-2">{ txt.doctorName }</span>
                <span className="doctors-prof-2 font-28 my-1 my-md-3">{ txt.doctorProf }</span>
                <div className="doctors-mini-article my-0 my-md-3">
                  <p className="font-16 text-justify">
                    { txt.bioFHt }
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-lg-6 d-lg-flex align-items-center justify-content-center">
              <div className="p-2 p-md-3 mb-5 mb-md-3">
                <img src={require('../../lib/images/article3.jpg')} alt="biophoto" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;