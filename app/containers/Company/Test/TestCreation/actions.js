/*
 *
 * TestCreation actions
 *
 */
import { push } from 'react-router-redux';
import {
  CHANGE_SUBMIT_CREATION_TEST_BUTTON_STATUS,
} from './constants';
import { companyCreateTestAPI } from '../../../../services/api/CompanyTests';

const changeSubmitTestCreationButtonState = () => ({ type: CHANGE_SUBMIT_CREATION_TEST_BUTTON_STATUS });

export const createTest = (values) => (
  (dispatch, getState) => {
    const { testName } = values.toJS();
    const specifications = getState().get('specificationsSkillsTestCreation')
      .get('choosenSpecifications').get('items');
    dispatch(changeSubmitTestCreationButtonState());
    companyCreateTestAPI({ testName, specifications }, (id) => {
      dispatch(changeSubmitTestCreationButtonState());
      dispatch(push(`/company/tests/${id}`));
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);
