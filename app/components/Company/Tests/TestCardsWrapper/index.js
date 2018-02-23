/* eslint no-script-url: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const TestCardsWrapper = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

TestCardsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TestCardsWrapper;