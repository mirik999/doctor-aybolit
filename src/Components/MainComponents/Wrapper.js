import React, {PureComponent} from 'react';


class Wrapper extends PureComponent {
	render() {
		return (
			<div className="row">
				<div className="col-12">
					{this.props.children}
				</div> 
			</div>	
		);
	}
}

export default Wrapper;