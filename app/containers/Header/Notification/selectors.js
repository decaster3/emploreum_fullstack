import { createSelector } from 'reselect';

/**
 * Direct selector to the header state domain
 */
const selectNotifications = (state) => state.get('notifications').get('notifications');


export const selectNotificationsStatus = createSelector(
  selectNotifications,
  (notificationsStatus) => notificationsStatus.get('status')
);

export const selectNotificationsItems = createSelector(
  selectNotifications,
  (notificationsItems) => {
    if (notificationsItems.get('items').toJS().length > 0) {
      return notificationsItems.get('items').toJS().map((el) =>
      `You have new message from ${el.employee.name}`);
    }
    return ['You haven\'t got new notifications'];
  }
);

export const selectNotificationsCount = createSelector(
  selectNotifications,
  (notoficationCount) => notoficationCount.get('items').toJS().length
);
