import React, {PureComponent, Fragment} from 'react';

class Wrapper extends PureComponent {
	render() {
		return (
			<Fragment>
        <div className="row">
          <div className="col-12">
            {this.props.children}
          </div>
        </div>
			</Fragment>
		);
	}
}

export default Wrapper;