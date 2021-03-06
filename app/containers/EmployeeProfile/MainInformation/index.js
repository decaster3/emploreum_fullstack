/**
 *
 * MainInformation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  selectMainInformationStatus,
  selectMainInfo,
} from './selectors';

import { getProfileMainInfo } from './actions';

import reducer from './reducer';
import DetailProfile from './../../../components/Employee/EmployeeProfileComponents/MainInformation/Detail/Loadable';
import MainProfile from './../../../components/Employee/EmployeeProfileComponents/MainInformation/Main/Loadable';
import SocialProfile from './../../../components/Employee/EmployeeProfileComponents/MainInformation/Social/Loadable';

export class MainInformation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getProfileMainInfo(this.props.employeeId);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>MainInformation</title>
          <meta name="description" content="Description of MainInformation" />
        </Helmet>
        <MainProfile
          mainInfoStatus={this.props.mainInfoStatus}
          mainInfo={this.props.mainInfo}
        />
        <DetailProfile />
        <SocialProfile />
      </div>
    );
  }
}

MainInformation.propTypes = {
  getProfileMainInfo: PropTypes.func,
  mainInfoStatus: PropTypes.string,
  mainInfo: PropTypes.object,
  employeeId: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    mainInfoStatus: selectMainInformationStatus(state),
    mainInfo: selectMainInfo(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfileMainInfo: (evt) => dispatch(getProfileMainInfo(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employeeProfileMainInformation', reducer });

export default compose(
  withReducer,
  withConnect,
)(MainInformation);
