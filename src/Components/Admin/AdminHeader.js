import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
//actions
import { logout } from '../../Actions/locale';


class AdminHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout = () => {
    this.props.logout();
    //window.location.href = '/admin';
  };

  render() {
    const { section } = this.props;

    return (
      <div className="admin-menu-header row justify-content-between align-items-center p-5">
        <span className="m-3 admin-menu-name">
          {
            section === 'gallery' ? 'Qalereya' :
              ( section === 'wordpad' ? 'Sözlər köşkü' :
                  ( section === 'media' ? 'Media' :
                      ( section === 'articles' && 'Məqalələr' )
                  )
              )
          }
        </span>
        <button type="button" className="m-3 admin-menu-logout" onClick={this.onLogout}>Çıxış</button>
      </div>
    );
  }
}


export default connect(null, { logout })(AdminHeader);