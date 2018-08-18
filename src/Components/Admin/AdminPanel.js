import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
//actions
import { enter } from '../../Actions/locale';
//css
import './AdminPanel.css';



class AdminPanel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        pass: ''
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = (e) => {
   this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })
  };

   onClick = () => {
    this.props.enter(this.state.data);
    //window.location.href = '/admin/dashboard';
  };

  render() {
    const { data } = this.state;

    return (
      <div className="col-12" style={{ backgroundColor: '#E5E5E5' }}>
        <div className="admin-header row justify-content-center align-items-center">
          <span className="admin-enter-header-text">İdarəetmə paneli</span>
        </div>
        <div className="body-height row justify-content-center align-items-center">
          <div className="admin-enter-form d-flex flex-column mx-2 p-2 p-md-4 p-xl-5">
            <input type="email" className="contact-inp-mini my-2" placeholder="E-poçt" name="email" value={data.email} onChange={this.onChange}/>
            <input type="password" className="contact-inp-mini my-2" placeholder="Şifrə" name="pass" value={data.pass} onChange={this.onChange}/>
            <div className="d-flex justify-content-end my-2">
              <button type="button" className="contact-btn" onClick={this.onClick}>DAXİL OL</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { enter })(AdminPanel);