import React, {PureComponent, Fragment} from 'react';


class BlueRow extends PureComponent {
  render() {
    return (
      <div className="row justify-content-center border-top" style={styles.bg}>
        <div className="col-12 col-md-10 p-2 p-md-4">
          &nbsp;
        </div>
      </div>
    );
  }
}

const styles = {
  bg: {
    backgroundColor: '#00D2D3'
  }
};

export default BlueRow;