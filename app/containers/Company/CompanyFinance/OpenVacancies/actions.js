/*
 *
 * CompanyFinanceContainer actions
 *
 */

import {
  CHANGE_STATE_OPEN_VACANCIES,
  LOADING,
  LOADED,
  GET_OPEN_VACANCIES,
} from './constants';

import { getOpenVacanciesAPI } from '../../../../services/api/Vacancy';


export const loadingOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADING });
export const loadedOpenVacancies = () => ({ type: CHANGE_STATE_OPEN_VACANCIES, payload: LOADED });

export const getOpenVacancies = () => (
  (dispatch) => {
    dispatch(loadingOpenVacancies());
    return getOpenVacanciesAPI((data) => {
      const newData = data.map((el) => {
        let position = '';
        el.profiles.forEach((prof) => {
          position = `${position} ${prof.name}`;
        });
        return {
          position: `${position} developer`,
          hoursPerWeek: `${el.duration} month(s)`,
          payment: `${el.week_payment} eth`,
          id: el.id,
        };
      });
      dispatch({
        type: GET_OPEN_VACANCIES,
        payload: newData,
      });
      dispatch(loadedOpenVacancies());
    }, (err) => {
      console.log(err);
    }, dispatch);
  }
);

