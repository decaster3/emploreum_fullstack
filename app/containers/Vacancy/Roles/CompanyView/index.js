import React from 'react';
import PropTypes from 'prop-types';
import MainInfromation from '../../MainInformation/Loadable';
import Skills from '../../Skills/Loadable';
import Candidates from '../../Candidates/Loadable';

export const CompanyView = (props) => {
  const { match } = props;
  return (
    <div className="container-fluid">
      <div className="panel panel-profile" id="sticky-parent">
        <div className="profile-left" id="profile-left-panel">
          <MainInfromation
            vacancyId={match.params.id}
          />
        </div>
        <div className="profile-right">
          <Skills
            vacancyId={match.params.id}
          />
          <Candidates
            vacancyId={match.params.id}
          />
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

CompanyView.propTypes = {
  match: PropTypes.object,
};

export default CompanyView;
