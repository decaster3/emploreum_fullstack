/**
 *
 * CompanyFinanceContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { PulseLoader } from 'react-spinners';

import {
  selectRecentPaymentsItems,
  selectRecentPaymentsStatus,
} from './selectors';
import reducer from './reducer';

import PaymentsWrapper from '../../../../components/Company/CompanyFinanceComponents/Payments/RecentPaumentsWrapper/Loadable';
import Payment from '../../../../components/Company/CompanyFinanceComponents/Payments/RecentPayment/Loadable';

import { getPayments } from './actions';

export class CompanyRecentPayments extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getPayments();
  }

  renderPayments() {
    if (this.props.recentPaymentsStatus === 'LOADING') {
      return (<PulseLoader color={'#0081c2'} size={20} />);
    }
    return this.props.recentPaymentsItems.map((payment) =>
      (<Payment
        key={payment.address}
        address={payment.address}
        name={payment.name}
        payment={payment.payment}
        date={payment.date}
      />)
    );
  }

  render() {
    const recentPaments = this.renderPayments();
    return (
      <PaymentsWrapper>
        {recentPaments}
      </PaymentsWrapper>
    );
  }
}

CompanyRecentPayments.propTypes = {
  getPayments: PropTypes.func.isRequired,
  recentPaymentsItems: PropTypes.array,
  recentPaymentsStatus: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    recentPaymentsItems: selectRecentPaymentsItems(state),
    recentPaymentsStatus: selectRecentPaymentsStatus(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPayments: () => dispatch(getPayments()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'companyFinanceRecentPayments', reducer });

export default compose(
  withReducer,
  withConnect,
)(CompanyRecentPayments);