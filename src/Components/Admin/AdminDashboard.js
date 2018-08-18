import React, {PureComponent, Fragment} from 'react';
import { connect } from 'react-redux';
//user componenets
import AdminHeader from './AdminHeader';
import AdminBurgerMenu from './AdminBurgerMenu';
import AdminGallery from './AdminGallery';
import AdminQuotes from './AdminQuotes';
import AdminMedia from './AdminMedia';
import AdminArticles from './AdminArticles';
//actions
import { logout } from '../../Actions/locale';


class AdminDashboard extends PureComponent {
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
      <div className="admin-content col-12 col-xl-10">
        <AdminHeader section={section} />
        { section === 'gallery' && <AdminGallery /> }
        { section === 'wordpad' && <AdminQuotes /> }
        { section === 'media' && <AdminMedia /> }
        { section === 'articles' && <AdminArticles /> }
      </div>
    );
  }
}


export default connect(null, { logout })(AdminDashboard);