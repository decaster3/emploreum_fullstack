/* eslint no-script-url: 0 */
import React from 'react';
import PropTypes from 'prop-types';

export const Vacancies = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th style={{ fontSize: '18px' }}>
              Open Vacancies
              </th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Vacancies.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Vacancies;
