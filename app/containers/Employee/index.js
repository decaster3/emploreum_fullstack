import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountWrapperContainer from '../AccountWrapper';
import Test from './Test';
import EmployeeFinance from './EmployeeFinance/Loadable';

export const EmployeeMain = () => (
  <AccountWrapperContainer url={'/employee'}>
    <Switch>
      <Route exact path="/employee" component={Test} />
      <Route path="/employee/finance" component={EmployeeFinance} />
    </Switch>
  </AccountWrapperContainer>
);

export default EmployeeMain;
