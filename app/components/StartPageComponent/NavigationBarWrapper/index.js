/**
*
* NavigationBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationBar(props) {
  const { children } = props;
  return (
    <div id="wrapper" className="landing-emploreum">
      <nav id="max-navbar" className="navbar navbar-default navbar-fixed-top">
        <div className="brand">
          <Link to="/">Emploreum</Link>
        </div>
        <div className="container-fluid">
          <form className="navbar-form navbar-left">
          </form>
          <div id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/registration">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span className="btn btn-primary">
                    Post a job
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <LoadingBar showFastActions updateTime={100} maxProgress={88} progressIncrease={20} style={{ backgroundColor: '#3287B2', height: '3px' }} />
      </nav>
      <div className="main-content">
        { children }
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavigationBar;
