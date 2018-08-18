import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const UserRoute = ({ section, user, component: Component, ...rest }) => {
  return(
    <Route
      { ...rest }
      render={ props => user.email ? <Component section={section} {...props} /> : <Redirect to="/admin" /> }
    />
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserRoute);