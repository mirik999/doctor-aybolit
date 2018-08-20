import React, {PureComponent, Fragment} from 'react';


class BlueRow extends PureComponent {
  render() {
    const { txt } = this.props;

    return (
      <div className="row justify-content-center px-3 px-md-0 pt-2 pt-md-3 pt-xl-5">
        <div className="d-flex col-md-4 align-items-end justify-content-center">
          <img src={require('../../lib/images/urolog.png')} alt="doctors-photo" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div className="doctors-mini-article my-2 my-md-3">
            <p className="font-16 text-justify">
              { txt.bioFHb }
            </p>
            <div className="d-flex justify-content-end">
              <div className="col-4 col-sm-3 mb-3 mb-md-0">
                <img src={require('../../lib/images/signature.svg')} alt="Signature" className="img-fluid doctors-signature" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlueRow;