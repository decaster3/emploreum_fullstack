import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectRegistrationEmployeeDomain = (state) => state.get('continueRegistrationEmployee');

const selectRegistrationStep = createSelector(
   selectRegistrationEmployeeDomain,
   (registrationStep) => fromJS(registrationStep).get('registrationStep').get('step')
 );

const selectRegistrationStepStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (registrationStep) => fromJS(registrationStep).get('registrationStep').get('registrationStepStatus')
  );

const selectSpecificationList = createSelector(
    selectRegistrationEmployeeDomain,
    (specificationList) => specificationList.get('specificationList').get('list')
);

const selectSpecificationListStatus = createSelector(
    selectRegistrationEmployeeDomain,
    (specificationList) => specificationList.get('specificationList').get('specificationListStatus')
);

const selectChoosenSpecifications = createSelector(
    selectRegistrationEmployeeDomain,
    (choosenSpecifications) => choosenSpecifications.get('choosenSpecifications').get('items')
);

export const selectSubmitSpecificationButtonState = createSelector(
    selectRegistrationEmployeeDomain,
    (submittingSpecification) => submittingSpecification.get('submittingSpecification')
);

export const selectSubmitAboutButtonState = createSelector(
    selectRegistrationEmployeeDomain,
    (submittingAbout) => submittingAbout.get('submittingAbout')
);

export {
  selectChoosenSpecifications,
  selectSpecificationListStatus,
  selectRegistrationStep,
  selectSpecificationList,
  selectRegistrationEmployeeDomain,
  selectRegistrationStepStatus,
};
